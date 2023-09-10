import { Contract, ContractFactory, Signer } from "ethers";
import { assert, expect } from "chai";
import { ethers } from "hardhat";
import { EventFragment } from "ethers/lib/utils";
import keccak256 from "keccak256";
import { TransactionReceipt } from "@ethersproject/abstract-provider";

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export function registerContractEvents(
  eventList: Record<string, EventFragment>,
  contract: ContractFactory
) {
  Object.keys(contract.interface.events).forEach((key) => {
    const hash = `0x${keccak256(key).toString("hex")}`;
    eventList[hash] = contract.interface.events[key];
  });
}

export function getEvents(
  eventList: Record<string, EventFragment>,
  receipt: TransactionReceipt
) {
  const events = receipt.logs.map((log) => {
    const eventType = eventList[log.topics[0]];
    const namesI = eventType.inputs.filter((i) => i.indexed).map((i) => i.name);
    const typesI = eventType.inputs.filter((i) => i.indexed).map((i) => i.type);
    const names = eventType.inputs.filter((i) => !i.indexed).map((i) => i.name);
    const types = eventType.inputs.filter((i) => !i.indexed).map((i) => i.type);
    const args: Record<string, any> = {};
    for (let i = 0; i < typesI.length; i++) {
      const type = typesI[i];
      args[namesI[i]] = ethers.utils.defaultAbiCoder.decode(
        [type],
        log.topics[i + 1]
      )[0];
    }
    const nonIndexedData = ethers.utils.defaultAbiCoder.decode(types, log.data);
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      args[name] = nonIndexedData[i];
    }
    return { ...log, name: eventType.name, args };
  });
  return events;
}

export function expectEvent(
  events: any[],
  eventName: string,
  expectedValues: Record<string, any>
) {
  const event = events.filter(({ name }) => name === eventName)[0];
  if (!event) assert(false, `${eventName} event not emitted`);
  const keys = Object.keys(expectedValues);
  const actualValues: Record<string, any> = {};
  keys.forEach(
    (key) =>
      (actualValues[key] = event.args ? event.args[key].toString() : undefined)
  );
  expect(actualValues).to.deep.equal(
    expectedValues,
    `${eventName} event data does not match`
  );
}

export async function testMint(
  eventList: Record<string, EventFragment>,
  contract: Contract,
  signer: Signer,
  account: string,
  tokenId: string
) {
  const initialNftsHeld = await contract.balanceOf(account);
  const tx = await contract.connect(signer).mint(account, tokenId);
  const receipt = await tx.wait(1);
  const events = getEvents(eventList, receipt);
  const expectedBalance = initialNftsHeld.add(1).toString();
  expectEvent(events, "Transfer", { from: ZERO_ADDRESS, to: account, tokenId });
  expect((await contract.balanceOf(account)).toString()).to.be.equal(
    expectedBalance
  );
  expect(await contract.ownerOf(tokenId)).to.be.equal(account);
}

export async function testSuccessfulTransfer(
  eventList: Record<string, EventFragment>,
  contract: Contract,
  signer: Signer,
  from: string,
  to: string,
  tokenId: string
) {
  let initialFromBalance = await contract.balanceOf(from);
  let initialToBalance = await contract.balanceOf(to);
  const tx = await contract.connect(signer).transferFrom(from, to, "1");
  const receipt = await tx.wait(1);
  const events = getEvents(eventList, receipt);
  expect(await contract.ownerOf(tokenId)).to.be.equal(
    to,
    "did not transfer the ownership of the given token ID to the given address"
  );
  expectEvent(events, "Transfer", { from, to, tokenId });
  expect(await contract.getApproved(tokenId)).to.be.equal(
    ZERO_ADDRESS,
    "did not clear the approval for the token ID"
  );
  expectEvent(events, "Approval", {
    owner: from,
    approved: ZERO_ADDRESS,
    tokenId,
  });
  expect(await contract.balanceOf(from)).to.be.equal(
    initialFromBalance.sub(1),
    "did not update the balance of the sender"
  );
  expect(await contract.balanceOf(to)).to.be.equal(
    initialToBalance.add(1),
    "did not update the balance of the receiver"
  );
}

export async function testBurnedNFT(contract: Contract, tokenId: string) {
  await expect(contract.ownerOf(tokenId)).to.be.revertedWith(
    "QueryForNonexistentToken"
  );
}

export function advanceTime(time: Number) {
  return ethers.provider.send("evm_increaseTime", [time]);
}

export function advanceBlock() {
  return ethers.provider.send("evm_mine", []);
}

export function takeSnapshot() {
  return ethers.provider.send("evm_snapshot", []);
}

export function revertToSnapShot(id: Number) {
  return ethers.provider.send("evm_revert", [id]);
}

export async function advanceTimeAndBlock(time: Number) {
  await advanceTime(time);
  await advanceBlock();
  return ethers.provider.getBlock("latest");
}
