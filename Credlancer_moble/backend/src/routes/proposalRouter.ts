import { PrismaClient, SignatureType } from "@prisma/client";
import CID from "cids";
import { Router } from "express";
import { body, param } from "express-validator";
import {
  generateNonce,
  getNonce,
  getNonceMessage,
  uploadJSONtoIPFS,
  verifySignature,
} from "../helpers";
import { validate } from "../middlewares";
import { signForProposalCreation } from "../signatures";

const proposalRouter = Router();
const prisma = new PrismaClient();

proposalRouter.post(
  "/:questId",
  body("description").isLength({ min: 100 }),
  body("approxCompletionTime").isISO8601().toDate(),
  body("proposer").isEthereumAddress(),
  body("signature").isString(),
  validate,
  async (req, res) => {
    const { questId } = req.params;
    const {
      description,
      approxCompletionTime,
      proposer,
      signature: lancerSignature,
    } = req.body;

    // get the lancer
    let lancer = await prisma.lancer.findUnique({
      where: { address: proposer as string },
    });
    if (!lancer || !lancer.registered)
      return res.status(400).json({ message: "lancer not registered" });

    // Verify Signature
    const nonceMessage = getNonceMessage(lancer.nonce);
    const isSignValid = verifySignature(
      nonceMessage,
      lancerSignature,
      proposer
    );
    if (!isSignValid)
      return res.status(401).json({ message: "invalid signature" });

    await prisma.lancer.update({
      where: { address: proposer },
      data: { nonce: generateNonce() },
    });

    // fetch the quest
    const quest = await prisma.quest.findUnique({ where: { id: questId } });
    if (!quest) return res.status(404).json({ message: "quest not found" });

    // upload the proposal in JSON format to ipfs
    const jsonObj = {
      description,
      approxCompletionTime,
    };
    const file = await prisma.proposalFile.findFirst({ where: jsonObj });
    let proposalCID;
    if (file) proposalCID = file.cid;
    else {
      const response = await uploadJSONtoIPFS(jsonObj);
      proposalCID = `0x${new CID(response.Hash)
        .toV1()
        .toString("base16")
        .substring(1)}`;
      await prisma.proposalFile.create({
        data: { cid: proposalCID, ...jsonObj },
      });
    }

    // create a signature for the proposal
    const nonce = await getNonce();
    const signature = await signForProposalCreation({
      questId,
      proposer,
      proposalCID,
      nonce,
    });
    await prisma.signature.create({
      data: {
        nonce: Number(nonce),
        signature,
        user: proposer,
        type: SignatureType.ProposalCreation,
      },
    });
    res.json({ nonce, signature, proposalCID });
  }
);

proposalRouter.get(
  "/address/:address",
  param("address").isEthereumAddress(),
  validate,
  async (req, res) => {
    const { address } = req.params;

    // get the lancer
    let lancer = await prisma.lancer.findUnique({
      where: { address: address as string },
    });
    if (!lancer || !lancer.registered)
      return res.status(400).json({ message: "lancer not registered" });

    let proposals = await prisma.proposal.findMany({
      where: { proposer: address },
      include: { quest: { include: { org: true } } },
    });
    proposals = await Promise.all(
      proposals.map(async (proposal) => {
        const file = await prisma.proposalFile.findUnique({
          where: { cid: proposal.fileCID },
        });
        return { file, ...proposal };
      })
    );
    res.json({ proposals });
  }
);

proposalRouter.get(
  "/questId/:questId",
  param("questId").isNumeric(),
  validate,
  async (req, res) => {
    const { questId } = req.params;

    // get the lancer
    let quest = await prisma.quest.findUnique({
      where: { id: questId },
    });
    if (!quest) return res.status(404).json({ message: "quest not found" });

    let proposals = await prisma.proposal.findMany({
      where: { questId },
    });
    proposals = (await Promise.all(
      proposals.map(async (proposal) => {
        const file = await prisma.proposalFile.findUnique({
          where: { cid: proposal.fileCID },
        });
        const proposer = await prisma.lancer.findUnique({
          where: { address: proposal.proposer },
        });
        return { file, ...proposal, proposer };
      })
    )) as any;
    res.json({ proposals });
  }
);

export default proposalRouter;
