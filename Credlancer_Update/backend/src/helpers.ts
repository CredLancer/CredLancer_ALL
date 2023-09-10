import { ethers } from "ethers";
import {
  LIGHTHOUSE_API_KEY,
  NONCE_TEMPLATE,
  SIGNER_PRIVATE_KEY,
} from "./config";
import multer from "multer";
import lighthouse from "@lighthouse-web3/sdk";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const storage = multer.memoryStorage();
export const multerUploader = multer({ storage: storage });

export async function getNonce() {
  const lastSignature = await prisma.signature.findFirst({
    orderBy: { nonce: "desc" },
  });
  const nonce = lastSignature ? lastSignature.nonce + BigInt(1) : BigInt(1);
  return nonce.toString();
}

export function getNonceMessage(nonce: string) {
  return NONCE_TEMPLATE.replace("%", nonce);
}

export function generateNonce() {
  const options = "ABCDEDFGHIJKLMNOPQRSTUVWXYZ";
  let nonce = "";
  for (let i = 0; i < 32; i++) {
    if (i !== 0 && i % 8 === 0) {
      nonce += "-";
    }
    nonce += options.charAt(Math.floor(Math.random() * options.length));
  }
  return nonce;
}

export function verifySignature(
  data: string,
  signature: string,
  address: string
) {
  let signer;
  try {
    signer = ethers.utils.verifyMessage(data, signature);
  } catch (err) {
    return false;
  }
  return signer.toLowerCase() === address.toLowerCase();
}

export async function signMessage(hash: any) {
  const signer = new ethers.Wallet(SIGNER_PRIVATE_KEY);
  const hashBytes = ethers.utils.arrayify(hash);
  const signature = await signer.signMessage(hashBytes);
  return signature;
}

export async function uploadToIPFS(file: Buffer) {
  const res = await lighthouse.uploadBuffer(file, LIGHTHOUSE_API_KEY);
  return res.data;
}

export async function uploadJSONtoIPFS(obj: any) {
  const res = await lighthouse.uploadBuffer(
    Buffer.from(JSON.stringify(obj), "utf-8"),
    LIGHTHOUSE_API_KEY,
    "application/json"
  );
  return res.data;
}

export async function findOrCreateSkills(skills: string[]) {
  for (const skill of skills) {
    let skillObj = await prisma.skill.findUnique({ where: { title: skill } });
    if (!skillObj) {
      skillObj = await prisma.skill.create({ data: { title: skill } });
    }
  }
}

export async function getCredentialsFromQuestIds(ids: string[]) {
  const quests = await prisma.quest.findMany({ where: { id: { in: ids } } });
  return await Promise.all(
    quests.map(async (quest) => {
      const file = await prisma.questFile.findUnique({
        where: { cid: quest.questCID },
        include: { skills: true },
      });
      return { ...file, ...quest };
    })
  );
}
