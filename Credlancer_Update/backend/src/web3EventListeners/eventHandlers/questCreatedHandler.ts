import { PrismaClient } from "@prisma/client";
import { QuestCreatedEvent } from "../../typechain-types/contracts/QuestController";

const prisma = new PrismaClient();

export default async function questCreatedHandler(
  eventEmitted: QuestCreatedEvent
) {
  const { blockNumber, args } = eventEmitted;
  const { questId, organizationId, questCID, reward, deadline } = args;

  console.log(`\n---${eventEmitted.event}---`);
  console.log(args);

  let quest = await prisma.quest.findUnique({
    where: { id: questId.toString() },
  });
  if (quest) return;
  quest = await prisma.quest.create({
    data: {
      id: questId.toString(),
      questCID,
      value: reward.toString(),
      deadline: new Date(Number(deadline) * 1000).toISOString(),
      blockNumber,
      org: { connect: { id: organizationId.toString() } },
    },
  });
}
