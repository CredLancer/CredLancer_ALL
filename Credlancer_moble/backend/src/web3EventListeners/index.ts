import { OrganizationDetailUpdateType, PrismaClient } from "@prisma/client";
import { ethers } from "ethers";
import ORGANIZATION_CONTROLLER_ABI from "../abi/OrganizationController.json";
import QUEST_CONTROLLER_ABI from "../abi/QuestController.json";
import CREDENTIAL_ABI from "../abi/Credential.json";
import {
  ORGANIZATION_CONTROLLER_ADDRESS,
  provider,
  QUEST_CONTROLLER_ADDRESS,
  CREDENTIAL_CONTROLLER_ADDRESS,
} from "../config";
import {
  Credential,
  OrganizationController,
  QuestController,
} from "../typechain-types";
import organizationAdminChangeHandler from "./eventHandlers/organizationAdminChangeHandler";
import organizationCreatedHandler from "./eventHandlers/organizationCreatedHandler";
import organizationImageCIDChangeHandler from "./eventHandlers/organizationImageCIDChangeHandler";
import organizationNameChangeHandler from "./eventHandlers/organizationNameChangeHandler";
import proposalCreatedHandler from "./eventHandlers/proposalCreatedHandler";
import proposalStatusUpdateHandler from "./eventHandlers/proposalStatusUpdateHandler";
import questCreatedHandler from "./eventHandlers/questCreatedHandler";
import credentialSingleTransferHandler from "./eventHandlers/credentialTransferHandler";
import workSubmittedHandler from "./eventHandlers/workSubmittedHandler";

const organizationController = new ethers.Contract(
  ORGANIZATION_CONTROLLER_ADDRESS,
  ORGANIZATION_CONTROLLER_ABI,
  provider
) as OrganizationController;

const questController = new ethers.Contract(
  QUEST_CONTROLLER_ADDRESS,
  QUEST_CONTROLLER_ABI,
  provider
) as QuestController;

const credential = new ethers.Contract(
  CREDENTIAL_CONTROLLER_ADDRESS,
  CREDENTIAL_ABI,
  provider
) as Credential;

const prisma = new PrismaClient();

const approxBlockTime = 30;
const blocksInADay = ((24 * 60 * 60) / approxBlockTime) | 0;

async function main(currBlockNumber: number) {
  const LOWEST_BLOCK = currBlockNumber - blocksInADay - 1;
  console.log(currBlockNumber);
  console.log(LOWEST_BLOCK);

  const organizationCreatedFilter =
    organizationController.filters.OrganizationCreated();
  const adminChangedFilter = organizationController.filters.AdminChanged();
  const organizationNameChangedFilter =
    organizationController.filters.OrganizationNameChanged();
  const organizationImageCIDChangedFilter =
    organizationController.filters.OrganizationImageCIDChanged();
  const questCreatedFilter = questController.filters.QuestCreated();
  const proposalCreatedFilter = questController.filters.ProposalCreated();
  const proposalStatusChangedFilter =
    questController.filters.ProposalStatusChanged();
  const workSubmittedFilter = questController.filters.WorkSubmitted();
  const credentialTransferFilter = credential.filters.TransferSingle();

  {
    const lastCreatedOrganization = await prisma.organization.findFirst({
      orderBy: { blockNumber: "desc" },
    });
    const lastBlock =
      lastCreatedOrganization && lastCreatedOrganization.blockNumber
        ? lastCreatedOrganization.blockNumber
        : LOWEST_BLOCK;
    const eventsEmitted = await organizationController.queryFilter(
      organizationCreatedFilter,
      lastBlock
    );

    for (const eventEmitted of eventsEmitted) {
      await organizationCreatedHandler(eventEmitted);
    }
  }

  {
    const lastAdminChanged = await prisma.organizationDetailUpdate.findFirst({
      where: { type: OrganizationDetailUpdateType.AdminChange },
      orderBy: { blockNumber: "desc" },
    });
    const lastBlock = lastAdminChanged
      ? lastAdminChanged.blockNumber
      : LOWEST_BLOCK;
    const eventsEmitted = await organizationController.queryFilter(
      adminChangedFilter,
      lastBlock
    );

    for (const eventEmitted of eventsEmitted) {
      await organizationAdminChangeHandler(eventEmitted);
    }
  }

  {
    const lastNameChanged = await prisma.organizationDetailUpdate.findFirst({
      where: { type: OrganizationDetailUpdateType.NameChange },
      orderBy: { blockNumber: "desc" },
    });
    const lastBlock = lastNameChanged
      ? lastNameChanged.blockNumber
      : LOWEST_BLOCK;
    const eventsEmitted = await organizationController.queryFilter(
      organizationNameChangedFilter,
      lastBlock
    );

    for (const eventEmitted of eventsEmitted) {
      await organizationNameChangeHandler(eventEmitted);
    }
  }

  {
    const lastImageCIDChanged = await prisma.organizationDetailUpdate.findFirst(
      {
        where: { type: OrganizationDetailUpdateType.ImageCIDChange },
        orderBy: { blockNumber: "desc" },
      }
    );
    const lastBlock = lastImageCIDChanged
      ? lastImageCIDChanged.blockNumber
      : LOWEST_BLOCK;
    const eventsEmitted = await organizationController.queryFilter(
      organizationImageCIDChangedFilter,
      lastBlock
    );

    for (const eventEmitted of eventsEmitted) {
      await organizationImageCIDChangeHandler(eventEmitted);
    }
  }

  {
    const lastQuestCreated = await prisma.quest.findFirst({
      orderBy: { blockNumber: "desc" },
    });
    const lastBlock = lastQuestCreated
      ? lastQuestCreated.blockNumber
      : LOWEST_BLOCK;
    const eventsEmitted = await questController.queryFilter(
      questCreatedFilter,
      lastBlock
    );

    for (const eventEmitted of eventsEmitted) {
      await questCreatedHandler(eventEmitted);
    }
  }

  {
    const lastProposalCreated = await prisma.proposal.findFirst({
      orderBy: { blockNumber: "desc" },
    });
    const lastBlock = lastProposalCreated
      ? lastProposalCreated.blockNumber
      : LOWEST_BLOCK;
    const eventsEmitted = await questController.queryFilter(
      proposalCreatedFilter,
      lastBlock
    );

    for (const eventEmitted of eventsEmitted) {
      await proposalCreatedHandler(eventEmitted);
    }
  }

  {
    const lastProposalStatusChange =
      await prisma.proposalStatusChange.findFirst({
        orderBy: { blockNumber: "desc" },
      });
    const lastBlock = lastProposalStatusChange
      ? lastProposalStatusChange.blockNumber
      : LOWEST_BLOCK;
    const eventsEmitted = await questController.queryFilter(
      proposalStatusChangedFilter,
      lastBlock
    );

    for (const eventEmitted of eventsEmitted) {
      await proposalStatusUpdateHandler(eventEmitted);
    }
  }

  {
    const lastCredential = await prisma.credential.findFirst({
      orderBy: { blockNumber: "desc" },
    });
    const lastBlock = lastCredential
      ? lastCredential.blockNumber
      : LOWEST_BLOCK;
    const eventsEmitted = await credential.queryFilter(
      credentialTransferFilter,
      lastBlock
    );

    for (const eventEmitted of eventsEmitted) {
      await credentialSingleTransferHandler(eventEmitted);
    }
  }

  {
    const lastWorkSubmission = await prisma.workSubmission.findFirst({
      orderBy: { blockNumber: "desc" },
    });
    const lastBlock = lastWorkSubmission
      ? lastWorkSubmission.blockNumber
      : LOWEST_BLOCK;
    const eventsEmitted = await questController.queryFilter(
      workSubmittedFilter,
      lastBlock
    );

    for (const eventEmitted of eventsEmitted) {
      await workSubmittedHandler(eventEmitted);
    }
  }
}

export default async function web3EventListeners() {
  provider.on("block", main);
}
