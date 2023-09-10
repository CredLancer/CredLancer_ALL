import { PrismaClient, SignatureType } from "@prisma/client";
import CID from "cids";
import { ethers } from "ethers";
import { Router } from "express";
import { body } from "express-validator";
import { findOrCreateSkills, getNonce, uploadJSONtoIPFS } from "../helpers";
import { paginate, validate } from "../middlewares";
import { getSkills } from "../openai";
import { signForQuestCreation } from "../signatures";

const questRouter = Router();
const prisma = new PrismaClient();

questRouter.get("/", paginate(12), async (req, res) => {
  const { limit, offset } = req.query;
  let quests = await prisma.quest.findMany({
    take: Number(limit),
    skip: Number(offset),
  });
  quests = await Promise.all(
    quests.map(async (quest) => {
      const file = await prisma.questFile.findUnique({
        where: { cid: quest.questCID },
      });
      return { ...file, ...quest };
    })
  );
  const totalQuests = await prisma.quest.count();
  res.json({ quests, pages: Math.ceil(totalQuests / Number(limit)) });
});

questRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const quest = await prisma.quest.findUnique({ where: { id } });
  if (!quest) return res.status(404).json({ message: "Quest not found" });
  res.json({ quest });
});

questRouter.get("/organizationId/:id", paginate(12), async (req, res) => {
  const { id } = req.params;
  const { limit, offset } = req.query;
  const organization = await prisma.organization.findUnique({ where: { id } });
  if (!organization)
    return res.status(400).json({ message: "organization not found" });
  let quests = await prisma.quest.findMany({
    where: { orgId: id },
    take: Number(limit),
    skip: Number(offset),
  });
  quests = await Promise.all(
    quests.map(async (quest) => {
      const file = await prisma.questFile.findUnique({
        where: { cid: quest.questCID },
      });
      return { ...file, ...quest };
    })
  );
  const totalQuests = await prisma.quest.count();
  res.json({ quests, pages: Math.ceil(totalQuests / Number(limit)) });
});

questRouter.post(
  "/",
  body("orgId").isNumeric(),
  body("title").isLength({ min: 3 }),
  body("description").isString(),
  body("reward").isNumeric(),
  body("deadline").isNumeric(),
  validate,
  async (req, res) => {
    const { orgId, title, description, reward, deadline } = req.body;

    if (new Date(parseInt(deadline) * 1000) <= new Date())
      return res
        .status(400)
        .json({ message: "Deadline cannot be in the past" });

    const organization = await prisma.organization.findUnique({
      where: { id: orgId },
    });
    if (!organization)
      return res.status(404).json({ message: "organization not found" });

    const rewardInWei = ethers.BigNumber.from(reward);
    const jsonFile = { title, description };
    const file = await prisma.questFile.findFirst({ where: jsonFile });
    let questCID;
    if (file) questCID = file.cid;
    else {
      const skills = await getSkills(description);
      (jsonFile as any).skills = skills;
      const response = await uploadJSONtoIPFS(jsonFile);
      questCID = `0x${new CID(response.Hash)
        .toV1()
        .toString("base16")
        .substring(1)}`;
      await findOrCreateSkills(skills);
      await prisma.questFile.create({
        data: {
          cid: questCID,
          skills: {
            connect: (skills as string[]).map((skill) => ({ title: skill })),
          },
          title,
          description,
        },
      });
    }

    const nonce = await getNonce();
    const signature = await signForQuestCreation({
      orgId,
      questCID,
      reward: rewardInWei.toString(),
      deadline,
      nonce,
    });
    await prisma.signature.create({
      data: {
        nonce: Number(nonce),
        signature,
        user: organization.admin,
        type: SignatureType.QuestCreation,
      },
    });
    res.json({ nonce, signature, questCID });
  }
);

export default questRouter;
