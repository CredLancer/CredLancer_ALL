import { PrismaClient } from "@prisma/client";
import { OrganizationCreatedEvent } from "../../typechain-types/contracts/OrganizationController";

const prisma = new PrismaClient();

export default async function organizationCreatedHandler(
  eventEmitted: OrganizationCreatedEvent
) {
  const { transactionHash, blockNumber, transactionIndex, logIndex, args } =
    eventEmitted;
  const { orgId, admin, name, imageCID } = args;
  console.log(`\n---${eventEmitted.event}---`);
  console.log(args);
  let org = await prisma.organization.findUnique({
    where: { id: orgId.toString() },
  });
  if (org) return;
  org = await prisma.organization.create({
    data: { id: orgId.toString(), admin, name, imageCID, blockNumber },
  });
}
