import {
  PrismaClient,
  ProposalStatus,
  QuestStatus,
  SignatureType,
} from "@prisma/client";
import { Router } from "express";
import { body, param } from "express-validator";
import { authorizeUser, validate } from "../middlewares";
import { getNonce } from "../helpers";
import { signForWorkSubmission } from "../signatures";

const workRouter = Router();
const prisma = new PrismaClient();

workRouter.post(
  "/:proposalId",
  body("address").isString(),
  body("signature").isString(),
  body("cid").isHexadecimal(),
  validate,
  authorizeUser("address", "signature"),
  async (req, res) => {
    const { proposalId } = req.params;
    const { address, cid } = req.body;

    const proposal = await prisma.proposal.findUnique({
      where: { id: proposalId },
      include: { quest: true },
    });

    if (!proposal)
      return res.status(404).json({ message: "proposal not found" });
    if (proposal.proposer != address)
      return res.status(401).json({ message: "you are not the proposer" });
    if (proposal.status != ProposalStatus.Accepted)
      return res.status(400).json({ message: "proposal not accepted yet" });
    if (proposal.quest.status != QuestStatus.Open)
      return res.status(400).json({ message: "quest not open" });

    const nonce = await getNonce();
    const signature = await signForWorkSubmission({
      questId: proposal.questId,
      proposer: address,
      workCID: cid,
      nonce,
    });
    await prisma.signature.create({
      data: {
        nonce: Number(nonce),
        signature,
        user: address,
        type: SignatureType.WorkSubmission,
      },
    });

    res.json({ nonce, signature });
  }
);

export default workRouter;
