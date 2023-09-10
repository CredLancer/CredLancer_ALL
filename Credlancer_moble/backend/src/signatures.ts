import { ethers } from "ethers";
import {
  getOrganizationContractDomain,
  getQuestContractDomain,
  SIGNER_PRIVATE_KEY,
} from "./config";

const signer = new ethers.Wallet(SIGNER_PRIVATE_KEY);

export async function signForOrganizationCreation(data: {
  admin: string;
  name: string;
  imageCID: string;
  nonce: string;
}) {
  const types = {
    CreateOrganization: [
      { name: "admin", type: "address" },
      { name: "name", type: "string" },
      { name: "imageCID", type: "bytes" },
      { name: "nonce", type: "uint256" },
    ],
  };

  return await signer._signTypedData(
    await getOrganizationContractDomain(),
    types,
    data
  );
}

export async function signForOrganizationImageCIDUpdate(data: {
  orgId: string;
  imageCID: string;
  nonce: string;
}) {
  const types = {
    UpdateImageCID: [
      { name: "orgId", type: "uint256" },
      { name: "imageCID", type: "bytes" },
      { name: "nonce", type: "uint256" },
    ],
  };

  return await signer._signTypedData(
    await getOrganizationContractDomain(),
    types,
    data
  );
}

export async function signForQuestCreation(data: {
  orgId: string;
  questCID: string;
  reward: string;
  deadline: string;
  nonce: string;
}) {
  const types = {
    CreateQuest: [
      { name: "orgId", type: "uint256" },
      { name: "questCID", type: "bytes" },
      { name: "reward", type: "uint256" },
      { name: "deadline", type: "uint256" },
      { name: "nonce", type: "uint256" },
    ],
  };

  return await signer._signTypedData(
    await getQuestContractDomain(),
    types,
    data
  );
}

export async function signForProposalCreation(data: {
  questId: string;
  proposer: string;
  proposalCID: string;
  nonce: string;
}) {
  const types = {
    SendProposal: [
      { name: "questId", type: "uint256" },
      { name: "proposer", type: "address" },
      { name: "proposalCID", type: "bytes" },
      { name: "nonce", type: "uint256" },
    ],
  };

  return await signer._signTypedData(
    await getQuestContractDomain(),
    types,
    data
  );
}

export async function signForWorkSubmission(data: {
  questId: string;
  proposer: string;
  workCID: string;
  nonce: string;
}) {
  const types = {
    SubmitWork: [
      { name: "questId", type: "uint256" },
      { name: "proposer", type: "address" },
      { name: "workCID", type: "bytes" },
      { name: "nonce", type: "uint256" },
    ],
  };

  return await signer._signTypedData(
    await getQuestContractDomain(),
    types,
    data
  );
}
