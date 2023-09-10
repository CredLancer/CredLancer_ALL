import { PrismaClient, ProposalStatus, QuestStatus } from "@prisma/client";
import { TransferSingleEvent } from "../../typechain-types/contracts/Credential";

const prisma = new PrismaClient();

export default async function credentialSingleTransferHandler(
  eventEmitted: TransferSingleEvent
) {
  const { transactionHash, blockNumber, transactionIndex, logIndex, args } =
    eventEmitted;
  const { from, to, id, value } = args;

  console.log(`\n---${eventEmitted.event}---`);
  console.log(args);

  let credential = await prisma.credential.findUnique({
    where: {
      transactionHash_blockNumber_transactionIndex_logIndex: {
        transactionHash,
        blockNumber,
        transactionIndex,
        logIndex,
      },
    },
  });
  if (credential) return;
  credential = await prisma.credential.create({
    data: {
      transactionHash,
      blockNumber,
      transactionIndex,
      logIndex,
      quest: { connect: { id: id.toString() } },
      holder: { connect: { address: to } },
    },
  });
  await prisma.proposal.updateMany({
    where: { questId: id.toString(), proposer: to },
    data: { status: ProposalStatus.Awarded },
  });
  await prisma.quest.update({
    where: { id: id.toString() },
    data: { status: QuestStatus.Awarded },
  });
}
