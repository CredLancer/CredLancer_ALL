import { PrismaClient } from "@prisma/client";
import { ProposalCreatedEvent } from "../../typechain-types/contracts/QuestController";

const prisma = new PrismaClient();

export default async function proposalCreatedHandler(
  eventEmitted: ProposalCreatedEvent
) {
  const { blockNumber, args } = eventEmitted;
  const { questId, proposalId, proposalCID, proposer } = args;

  console.log(`\n---${eventEmitted.event}---`);
  console.log(args);

  let proposal = await prisma.proposal.findUnique({
    where: { id: proposalId.toString() },
  });
  if (proposal) return;
  proposal = await prisma.proposal.create({
    data: {
      id: proposalId.toString(),
      fileCID: proposalCID,
      proposer,
      blockNumber,
      quest: { connect: { id: questId.toString() } },
    },
  });
}
