import { PrismaClient, SignatureType } from "@prisma/client";
import CID from "cids";
import { Router } from "express";
import { body } from "express-validator";
import { getNonce, uploadToIPFS } from "../helpers";
import { file, paginate, validate } from "../middlewares";
import {
  signForOrganizationCreation,
  signForOrganizationImageCIDUpdate,
} from "../signatures";

const prisma = new PrismaClient();

const organizationRouter = Router();

organizationRouter.post(
  "/",
  file("image", "image"),
  body("name").isLength({ min: 3 }),
  body("admin").isEthereumAddress(),
  body("signature").isString(),
  validate,
  async (req, res) => {
    console.log({ body: req.body });
    const { signature: userSignature, admin, name } = req.body;
    const image = req.file as Express.Multer.File;
    const organization = await prisma.organization.findFirst({
      where: { admin },
    });
    console.log("Organization exists?", organization);
    if (organization)
      return res
        .status(400)
        .json({ message: "one admin can create only one organization" });

    // TODO: verify the signature

    const response = await uploadToIPFS(image.buffer);
    const imageCID = `0x${new CID(response.Hash)
      .toV1()
      .toString("base16")
      .substring(1)}`;
    const nonce = await getNonce();
    const signature = await signForOrganizationCreation({
      admin,
      name,
      imageCID,
      nonce,
    });
    await prisma.signature.create({
      data: {
        nonce: Number(nonce),
        signature,
        user: admin,
        type: SignatureType.OrganizationCreation,
      },
    });
    res.json({ nonce, signature, imageCID, name });
  }
);

organizationRouter.get("/", paginate(10), validate, async (req, res) => {
  const { limit, offset } = req.query;
  const organizations = await prisma.organization.findMany({
    skip: Number(offset),
    take: Number(limit),
  });
  const totalOrganizations = await prisma.organization.count();

  res.json({
    organizations,
    totalPages: Math.ceil(totalOrganizations / Number(limit)),
  });
});

organizationRouter.put(
  "/imageCID/:orgId",
  file("image", "image"),
  body("signature").isString(),
  body("signer").isEthereumAddress(),
  validate,
  async (req, res) => {
    const { orgId } = req.params;
    const image = req.file as Express.Multer.File;
    const { signature: userSignature, signer } = req.body;
    const organization = await prisma.organization.findUnique({
      where: { id: orgId },
    });
    if (!organization)
      return res.status(404).json({ message: "Organization not found" });
    if (organization.admin != signer)
      return res.status(401).json({ message: "only admins are allowed" });
    const response = await uploadToIPFS(image.buffer);
    const imageCID = `0x${new CID(response.Hash)
      .toV1()
      .toString("base16")
      .substring(1)}`;
    if (organization.imageCID == imageCID)
      return res.status(400).json({ message: "image not changed" });
    const nonce = await getNonce();

    // TODO: verify the signature

    const signature = await signForOrganizationImageCIDUpdate({
      orgId,
      imageCID,
      nonce,
    });
    await prisma.signature.create({
      data: {
        nonce: Number(nonce),
        signature,
        user: signer,
        type: SignatureType.OrganizationImageCIDChange,
      },
    });
    res.json({ nonce, signature, imageCID });
  }
);

organizationRouter.put(
  "/:id",
  body("description").isString().optional({ nullable: true }),
  body("email").isString().optional({ nullable: true }),
  body("video").isString().optional({ nullable: true }),
  body("signature").isString(),
  validate,
  async (req, res) => {
    const { id } = req.params;
    const { description, email, video, signature } = req.body;
    const organization = await prisma.organization.findUnique({
      where: { id },
    });
    if (!organization)
      return res.status(404).json({ message: "Organization not found" });
    if (!description && !email && !video)
      return res.status(400).json({ message: "nothing parsed to update" });

    // TODO: verify the signature

    await prisma.organization.update({
      where: { id },
      data: { description, email, video },
    });

    res.json({
      organization: await prisma.organization.findUnique({ where: { id } }),
    });
  }
);

organizationRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const org = await prisma.organization.findUnique({ where: { id } });
  if (!org) return res.status(404).json({ message: "Organization not found" });
  res.json({ org });
});

organizationRouter.get("/admin/:admin", async (req, res) => {
  const { admin } = req.params;
  const org = await prisma.organization.findFirst({ where: { admin } });
  if (!org) return res.status(404).json({ message: "Organization not found" });
  res.json({ org });
});

organizationRouter.put(
  "/imageCID/:orgId",
  file("image", "image"),
  body("signature").isEthereumAddress(),
  body("signer").isEthereumAddress(),
  validate,
  async (req, res) => {
    const { orgId } = req.params;
    const image = req.file as Express.Multer.File;
    const { signature: userSignature, signer } = req.body;
    const organization = await prisma.organization.findUnique({
      where: { id: orgId },
    });
    if (!organization)
      return res.status(404).json({ message: "Organization not found" });
    if (organization.admin != signer)
      return res.status(401).json({ message: "only admins are allowed" });
    const response = await uploadToIPFS(image.buffer);
    const imageCID = `0x${new CID(response.Hash)
      .toV1()
      .toString("base16")
      .substring(1)}`;
    if (organization.imageCID == imageCID)
      return res.status(400).json({ message: "image not changed" });
    const nonce = await getNonce();

    // TODO: verify the signature

    const signature = await signForOrganizationImageCIDUpdate({
      orgId,
      imageCID,
      nonce,
    });
    await prisma.signature.create({
      data: {
        nonce: Number(nonce),
        signature,
        user: signer,
        type: SignatureType.OrganizationImageCIDChange,
      },
    });
    res.json({ nonce, signature, imageCID });
  }
);

organizationRouter.put(
  "/:id",
  body("description").isString().optional({ nullable: true }),
  body("email").isString().optional({ nullable: true }),
  body("video").isString().optional({ nullable: true }),
  body("signature").isString(),
  validate,
  async (req, res) => {
    const { id } = req.params;
    const { description, email, video, signature } = req.body;
    const organization = await prisma.organization.findUnique({
      where: { id },
    });
    if (!organization)
      return res.status(404).json({ message: "Organization not found" });
    if (!description && !email && !video)
      return res.status(400).json({ message: "nothing parsed to update" });

    // TODO: verify the signature

    await prisma.organization.update({
      where: { id },
      data: { description, email, video },
    });

    res.json({
      organization: await prisma.organization.findUnique({ where: { id } }),
    });
  }
);

organizationRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const org = await prisma.organization.findUnique({ where: { id } });
  if (!org) return res.status(404).json({ message: "Organization not found" });
  res.json({ org });
});

organizationRouter.get("/admin/:admin", async (req, res) => {
  const { admin } = req.params;
  const org = await prisma.organization.findFirst({ where: { admin } });
  if (!org) return res.status(404).json({ message: "Organization not found" });
  res.json({ org });
});

export default organizationRouter;
