import dotenv from "dotenv";
import { ethers } from "ethers";

dotenv.config();

export const PORT = parseInt(process.env.PORT || "8000");
export const ORGANIZATION_CONTROLLER_ADDRESS =
  process.env.ORGANIZATION_CONTROLLER_ADDRESS || "";
export const QUEST_CONTROLLER_ADDRESS =
  process.env.QUEST_CONTROLLER_ADDRESS || "";
export const CREDENTIAL_CONTROLLER_ADDRESS =
  process.env.CREDENTIAL_CONTROLLER_ADDRESS || "";
export const WEB3_RPC_URI = process.env.WEB3_RPC_URI || "";
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
export const SIGNER_PRIVATE_KEY = process.env.SIGNER_PRIVATE_KEY || "";
export const LIGHTHOUSE_API_KEY = process.env.LIGHTHOUSE_API_KEY || "";
export const CHAIN_ID = 3141;
export const NONCE_TEMPLATE = process.env.NONCE_MESSAGE || "The Nonce is: %";
export const CHANNEL_PK = process.env.CHANNEL_PK || "";

export const provider = new ethers.providers.JsonRpcProvider(
  WEB3_RPC_URI,
  CHAIN_ID
);

export async function getOrganizationContractDomain() {
  return {
    name: "Organization Controller",
    version: "1",
    chainId: CHAIN_ID,
    verifyingContract: ORGANIZATION_CONTROLLER_ADDRESS,
  };
}

export async function getQuestContractDomain() {
  return {
    name: "Quest Controller",
    version: "1",
    chainId: CHAIN_ID,
    verifyingContract: QUEST_CONTROLLER_ADDRESS,
  };
}
