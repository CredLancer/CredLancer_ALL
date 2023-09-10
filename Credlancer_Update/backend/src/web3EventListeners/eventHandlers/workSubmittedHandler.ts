import { PrismaClient } from "@prisma/client";
import { WorkSubmittedEvent } from "../../typechain-types/contracts/QuestController";

const prisma = new PrismaClient();

export default async function workSubmittedHandler(
  eventEmitted: WorkSubmittedEvent
) {
  const { transactionHash, blockNumber, transactionIndex, logIndex, args } =
    eventEmitted;
  const { workCID, proposalId, worker } = args;

  console.log(`\n---${eventEmitted.event}---`);
  console.log(args);

  let workSubmission = await prisma.workSubmission.findUnique({
    where: {
      transactionHash_blockNumber_transactionIndex_logIndex: {
        transactionHash,
        blockNumber,
        transactionIndex,
        logIndex,
      },
    },
  });
  if (workSubmission) return;

  const lastWorkSubmittion = await prisma.workSubmission.findFirst({
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
    !lastWorkSubmittion ||
    blockNumber > lastWorkSubmittion.blockNumber ||
    (blockNumber == lastWorkSubmittion.blockNumber &&
      (transactionIndex > lastWorkSubmittion.transactionIndex ||
        (transactionIndex == lastWorkSubmittion.transactionIndex &&
          logIndex > lastWorkSubmittion.logIndex)))
  )
    await prisma.proposal.update({
      where: { id: proposalId.toString() },
      data: { workCID },
    });
  workSubmission = await prisma.workSubmission.create({
    data: {
      transactionHash,
      logIndex,
      blockNumber,
      transactionIndex,
      cid: workCID,
      proposal: { connect: { id: proposalId.toString() } },
    },
  });
}
