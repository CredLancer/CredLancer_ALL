import { OrganizationDetailUpdateType, PrismaClient } from "@prisma/client";
import { AdminChangedEvent } from "../../typechain-types/contracts/OrganizationController";

const prisma = new PrismaClient();

export default async function organizationAdminChangeHandler(
  eventEmitted: AdminChangedEvent
) {
  const { transactionHash, blockNumber, transactionIndex, logIndex, args } =
    eventEmitted;
  const { orgId, oldAdmin, newAdmin } = args;

  console.log(`\n---${eventEmitted.event}---`);
  console.log(args);

  let org = await prisma.organization.findUnique({
    where: { id: orgId.toString() },
  });
  if (!org)
    org = await prisma.organization.create({
      data: { id: orgId.toString(), admin: newAdmin, name: "", imageCID: "" },
    });

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
      type: OrganizationDetailUpdateType.AdminChange,
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
      data: { admin: newAdmin },
    });
  detailUpdate = await prisma.organizationDetailUpdate.create({
    data: {
      type: OrganizationDetailUpdateType.AdminChange,
      transactionHash,
      logIndex,
      blockNumber,
      transactionIndex,
      from: oldAdmin,
      to: newAdmin,
      org: {
        connect: {
          id: orgId.toString(),
        },
      },
    },
  });
}
