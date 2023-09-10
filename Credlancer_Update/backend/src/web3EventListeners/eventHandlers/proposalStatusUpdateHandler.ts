import { PrismaClient, ProposalStatus } from "@prisma/client";
import { ProposalStatusChangedEvent } from "../../typechain-types/contracts/QuestController";

const prisma = new PrismaClient();

const proposalStatusFromProposalStatusId = [
  ProposalStatus.Proposed,
  ProposalStatus.Accepted,
  ProposalStatus.Rejected,
  ProposalStatus.Awarded,
];

export default async function proposalStatusUpdateHandler(
  eventEmitted: ProposalStatusChangedEvent
) {
  const { transactionHash, blockNumber, transactionIndex, logIndex, args } =
    eventEmitted;
  const { proposalId, oldStatus, newStatus } = args;

  console.log(`\n---${eventEmitted.event}---`);
  console.log(args);

  let proposal = await prisma.proposal.findUnique({
    where: { id: proposalId.toString() },
  });
  if (!proposal) return;

  let proposalStatusUpdate = await prisma.proposalStatusChange.findUnique({
    where: {
      transactionHash_blockNumber_transactionIndex_logIndex: {
        transactionHash,
        blockNumber: blockNumber,
        transactionIndex,
        logIndex,
      },
    },
  });
  if (proposalStatusUpdate) return;

  const lastProposalStatusUpdate = await prisma.proposalStatusChange.findFirst({
    where: {
      proposalId: proposalId.toString(),
    },
    orderBy: [
      { blockNumber: "desc" },
      { transactionIndex: "desc" },
      { logIndex: "desc" },
    ],
  });
  if (
    proposal.status != ProposalStatus.Awarded &&
    (!lastProposalStatusUpdate ||
      blockNumber > lastProposalStatusUpdate.blockNumber ||
      (blockNumber == lastProposalStatusUpdate.blockNumber &&
        (transactionIndex > lastProposalStatusUpdate.transactionIndex ||
          (transactionIndex == lastProposalStatusUpdate.transactionIndex &&
            logIndex > lastProposalStatusUpdate.logIndex))))
  )
    await prisma.proposal.update({
      where: { id: proposalId.toString() },
      data: { status: proposalStatusFromProposalStatusId[newStatus] },
    });

  proposalStatusUpdate = await prisma.proposalStatusChange.create({
    data: {
      transactionHash,
      logIndex,
      blockNumber,
      transactionIndex,
      oldStatus: proposalStatusFromProposalStatusId[oldStatus],
      newStatus: proposalStatusFromProposalStatusId[newStatus],
      proposal: {
        connect: {
          id: proposalId.toString(),
        },
      },
    },
  });
}
