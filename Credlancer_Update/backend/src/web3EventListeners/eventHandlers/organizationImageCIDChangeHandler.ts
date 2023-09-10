import { OrganizationDetailUpdateType, PrismaClient } from "@prisma/client";
import { OrganizationImageCIDChangedEvent } from "../../typechain-types/contracts/OrganizationController";

const prisma = new PrismaClient();

export default async function organizationImageCIDChangeHandler(
  eventEmitted: OrganizationImageCIDChangedEvent
) {
  const { transactionHash, blockNumber, transactionIndex, logIndex, args } =
    eventEmitted;
  const { orgId, oldImageCID, newImageCID } = args;

  console.log(`\n---${eventEmitted.event}---`);
  console.log(args);

  let org = await prisma.organization.findUnique({
    where: { id: orgId.toString() },
  });
  if (!org) return;

  let detailUpdate = await prisma.organizationDetailUpdate.findUnique({
    where: {
      transactionHash_blockNumber_transactionIndex_logIndex: {
        transactionHash,
        blockNumber: blockNumber,
        transactionIndex,
        logIndex,
      },
    },
  });
  if (detailUpdate) return;

  const lastDetailUpdate = await prisma.organizationDetailUpdate.findFirst({
    where: {
      orgId: orgId.toString(),
      type: OrganizationDetailUpdateType.ImageCIDChange,
    },
    orderBy: [
      { blockNumber: "desc" },
      { transactionIndex: "desc" },
      { logIndex: "desc" },
    ],
  });
  if (
    !lastDetailUpdate ||
    blockNumber > lastDetailUpdate.blockNumber ||
    (blockNumber == lastDetailUpdate.blockNumber &&
      (transactionIndex > lastDetailUpdate.transactionIndex ||
        (transactionIndex == lastDetailUpdate.transactionIndex &&
          logIndex > lastDetailUpdate.logIndex)))
  )
    await prisma.organization.update({
      where: { id: orgId.toString() },
      data: { imageCID: newImageCID },
    });
  detailUpdate = await prisma.organizationDetailUpdate.create({
    data: {
      type: OrganizationDetailUpdateType.ImageCIDChange,
      transactionHash,
      logIndex,
      blockNumber,
      transactionIndex,
      from: oldImageCID,
      to: newImageCID,
      org: {
        connect: {
          id: orgId.toString(),
        },
      },
    },
  });
}
