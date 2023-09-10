import { Lancer, PrismaClient } from "@prisma/client";
import CID from "cids";
import { Router } from "express";
import { body, param } from "express-validator";
import {
  generateNonce,
  getCredentialsFromQuestIds,
  getNonceMessage,
  uploadToIPFS,
} from "../helpers";
import { authorizeUser, file, validate } from "../middlewares";

const lancerRouter = Router();
const prisma = new PrismaClient();

// get nonce message
lancerRouter.get(
  "/:address",
  param("address").isEthereumAddress(),
  validate,
  async (req, res) => {
    const { address } = req.params;

    const lancer = await prisma.lancer.findUnique({
      where: { address: address as string },
      include: { Credential: true },
    });
    if (lancer) {
      const questsCompleted = await getCredentialsFromQuestIds(
        lancer.Credential.map((cred) => cred.id)
      );
      if (lancer.registered)
        return res.json({
          lancer,
          registered: true,
          questsCompleted,
          message: getNonceMessage(lancer.nonce),
        });
      return res.json({
        registered: false,
        message: getNonceMessage(lancer.nonce),
      });
    }

    const nonce = generateNonce();
    await prisma.lancer.create({ data: { address, nonce } });
    return res.json({ registered: false, message: getNonceMessage(nonce) });
  }
);

lancerRouter.post(
  "/register",
  file("image", "image"),
  body("address").isEthereumAddress(),
  body("signature").isString(),
  body("name").isLength({ min: 3 }),
  body("email").isEmail(),
  body("description").isString(),
  validate,
  authorizeUser("address", "signature", true),
  async (req, res) => {
    const { address, signature, name, email, description } = req.body;
    const image = req.file as Express.Multer.File;

    // upload image
    const response = await uploadToIPFS(image.buffer);
    const imageCID = `0x${new CID(response.Hash)
      .toV1()
      .toString("base16")
      .substring(1)}`;

    // update the details of the lancer
    await prisma.lancer.update({
      where: { address },
      data: { description, email, imageCID, name },
    });

    // return the lancer
    const lancer = await prisma.lancer.findUnique({
      where: { address },
      include: { Credential: true },
    });
    res.json({ lancer });
  }
);

lancerRouter.put(
  "/:address",
  param("address").isEthereumAddress(),
  body("signature").isString(),
  body("name").isLength({ min: 3 }).optional({ nullable: true }),
  body("email").isEmail().optional({ nullable: true }),
  body("description").isString().optional({ nullable: true }),
  validate,
  authorizeUser("address", "signature"),
  async (req, res) => {
    const { address, signature, name, email, description } = req.body;

    // update the details of the lancer
    await prisma.lancer.update({
      where: { address },
      data: { description, email, name },
    });

    // return the lancer
    const lancer = await prisma.lancer.findUnique({
      where: { address },
      include: { Credential: true },
    });
    res.json({ lancer });
  }
);

lancerRouter.put(
  "/image/:address",
  file("image", "image"),
  param("address").isEthereumAddress(),
  body("signature").isString(),
  validate,
  authorizeUser("address", "signature"),
  async (req, res) => {
    const { address, signature } = req.body;
    const image = req.file as Express.Multer.File;

    // upload image
    const response = await uploadToIPFS(image.buffer);
    const imageCID = `0x${new CID(response.Hash)
      .toV1()
      .toString("base16")
      .substring(1)}`;

    // update the details of the lancer
    await prisma.lancer.update({
      where: { address },
      data: { imageCID },
    });

    // return the lancer
    const lancer = await prisma.lancer.findUnique({
      where: { address },
      include: { Credential: true },
    });
    res.json({ lancer });
  }
);

export default lancerRouter;
