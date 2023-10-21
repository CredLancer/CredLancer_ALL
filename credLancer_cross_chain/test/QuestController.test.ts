import {
  OrganizationController,
  QuestController,
  Credential,
} from "../typechain-types";
import { ethers } from "hardhat";
import { ethers as e, Signer } from "ethers";
import { expect } from "chai";
import { ZERO_ADDRESS } from "./helpers";

describe("Quest Controller Contract", function () {
  const organizationContractDomain = {
    name: "Organization Controller",
    version: "1",
    chainId: 1,
    verifyingContract: "",
  };

  const questContractDomain = {
    name: "Quest Controller",
    version: "1",
    chainId: 1,
    verifyingContract: "",
  };

  const typesForCreateOrganization = {
    CreateOrganization: [
      { name: "admin", type: "address" },
      { name: "name", type: "string" },
      { name: "imageCID", type: "bytes" },
      { name: "nonce", type: "uint256" },
    ],
  };
  const typesForUpdateImageCID = {
    UpdateImageCID: [
      { name: "orgId", type: "uint256" },
      { name: "imageCID", type: "bytes" },
      { name: "nonce", type: "uint256" },
    ],
  };
  const typesForCreateQuest = {
    CreateQuest: [
      { name: "orgId", type: "uint256" },
      { name: "questCID", type: "bytes" },
      { name: "reward", type: "uint256" },
      { name: "deadline", type: "uint256" },
      { name: "nonce", type: "uint256" },
    ],
  };
  const typesForSendProposal = {
    SendProposal: [
      { name: "questId", type: "uint256" },
      { name: "proposer", type: "address" },
      { name: "proposalCID", type: "bytes" },
      { name: "nonce", type: "uint256" },
    ],
  };

  let signers: Signer[];
  const accounts: string[] = [];
  let wallet: e.Wallet;
  let organizationController: OrganizationController,
    questController: QuestController,
    credentialContract: Credential;
  let lastNonce = 0;

  this.beforeAll(async function () {
    wallet = e.Wallet.createRandom();
    // get signers
    signers = await ethers.getSigners();
    for (const signer of signers) accounts.push(await signer.getAddress());

    // deploy the organizations contract
    const OrganizationController = await ethers.getContractFactory(
      "OrganizationController"
    );
    organizationController = await OrganizationController.deploy();
    await organizationController.deployed();

    // deploy the credential contract
    const Credential = await ethers.getContractFactory("Credential");
    credentialContract = await Credential.deploy();
    await credentialContract.deployed();

    const QuestController = await ethers.getContractFactory("QuestController");
    questController = await QuestController.deploy(
      organizationController.address,
      credentialContract.address
    );
    await questController.deployed();

    organizationContractDomain.verifyingContract =
      organizationController.address;
    organizationContractDomain.chainId = ethers.provider.network.chainId;
    questContractDomain.verifyingContract = questController.address;
    questContractDomain.chainId = ethers.provider.network.chainId;

    await organizationController.setSigner(wallet.address);
    await questController.setSigner(wallet.address);
  });

  describe("Organization Creation", function () {
    it("Should create a organization", async function () {
      const nonce = ++lastNonce;
      const signature = await wallet._signTypedData(
        organizationContractDomain,
        typesForCreateOrganization,
        {
          admin: accounts[0],
          name: "Org 1",
          imageCID:
            "0x01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a",
          nonce,
        }
      );

      await organizationController.createOrganization(
        "Org 1",
        "0x01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a",
        signature,
        nonce
      );
      expect(await organizationController.adminOf(1)).to.be.equal(accounts[0]);
    });

    it("Should create organization for another user", async function () {
      const nonce = ++lastNonce;
      const signature = await wallet._signTypedData(
        organizationContractDomain,
        typesForCreateOrganization,
        {
          admin: accounts[1],
          name: "Org 2",
          imageCID:
            "0x01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a",
          nonce,
        }
      );

      await organizationController
        .connect(signers[1])
        .createOrganization(
          "Org 2",
          "0x01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a",
          signature,
          nonce
        );
      expect(await organizationController.adminOf(2)).to.be.equal(accounts[1]);
    });
  });

  describe("Quest Creation", function () {
    it("Should not create a quest if deadline is already passed", async function () {
      const deadline = ((new Date().getTime() / 1000) | 0) - 24 * 60 * 60;

      const nonce = ++lastNonce;
      const signature = await wallet._signTypedData(
        questContractDomain,
        typesForCreateQuest,
        {
          orgId: "1",
          questCID:
            "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          reward: "1000000000",
          deadline,
          nonce,
        }
      );

      await expect(
        questController.createQuest(
          "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          "1000000000",
          "1",
          deadline,
          signature,
          nonce,
          { value: "1000000000" }
        )
      ).to.be.revertedWithCustomError(questController, "DeadlineAlreadyPassed");
    });

    it("Should create a quest for org 1", async function () {
      const deadline = ((new Date().getTime() / 1000) | 0) + 24 * 60 * 60;

      const nonce = ++lastNonce;
      const signature = await wallet._signTypedData(
        questContractDomain,
        typesForCreateQuest,
        {
          orgId: "1",
          questCID:
            "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          reward: "1000000000",
          deadline,
          nonce,
        }
      );

      await questController.createQuest(
        "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
        "1000000000",
        "1",
        deadline,
        signature,
        nonce,
        { value: "1000000000" }
      );
    });

    it("Should say the status of the quest 1 as active", async function () {
      const status = await questController.statusOfQuest("1");
      expect(status.toString()).to.be.equal("0");
    });

    it("Should not say the status of the quest 2 as it doesn't exist", async function () {
      await expect(
        questController.statusOfQuest("2")
      ).to.be.revertedWithCustomError(questController, "InvalidQuestId");
    });

    it("Should not create a quest if nonce already used", async function () {
      const deadline = ((new Date().getTime() / 1000) | 0) + 24 * 60 * 60;

      const nonce = lastNonce;
      const signature = await wallet._signTypedData(
        questContractDomain,
        typesForCreateQuest,
        {
          orgId: "1",
          questCID:
            "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          reward: "1000000000",
          deadline,
          nonce,
        }
      );

      await expect(
        questController.createQuest(
          "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          "1000000000",
          "1",
          deadline,
          signature,
          nonce,
          { value: "1000000000" }
        )
      ).to.be.revertedWithCustomError(questController, "InvalidNonce");
    });

    it("Should not create a quest if organization doesn't exist", async function () {
      const deadline = ((new Date().getTime() / 1000) | 0) + 24 * 60 * 60;

      const nonce = ++lastNonce;
      const signature = await wallet._signTypedData(
        questContractDomain,
        typesForCreateQuest,
        {
          orgId: "5",
          questCID:
            "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          reward: "1000000000",
          deadline,
          nonce,
        }
      );

      await expect(
        questController.createQuest(
          "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          "1000000000",
          "5",
          deadline,
          signature,
          nonce,
          { value: "1000000000" }
        )
      ).to.be.revertedWithCustomError(questController, "InvalidOrganizationId");
    });

    it("Should not create a quest if not the admin", async function () {
      const deadline = ((new Date().getTime() / 1000) | 0) + 24 * 60 * 60;

      const nonce = lastNonce;
      const signature = await wallet._signTypedData(
        questContractDomain,
        typesForCreateQuest,
        {
          orgId: "2",
          questCID:
            "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          reward: "1000000000",
          deadline,
          nonce,
        }
      );

      await expect(
        questController.createQuest(
          "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          "1000000000",
          "2",
          deadline,
          signature,
          nonce,
          { value: "1000000000" }
        )
      ).to.be.revertedWithCustomError(questController, "Unauthorized");
    });

    it("Should not create a quest if value is not attached", async function () {
      const deadline = ((new Date().getTime() / 1000) | 0) + 24 * 60 * 60;

      const nonce = lastNonce;
      const signature = await wallet._signTypedData(
        questContractDomain,
        typesForCreateQuest,
        {
          orgId: "1",
          questCID:
            "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          reward: "1000000000",
          deadline,
          nonce,
        }
      );

      await expect(
        questController.createQuest(
          "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          "1000000000",
          "1",
          deadline,
          signature,
          nonce
        )
      ).to.be.revertedWithCustomError(questController, "InvalidValue");
    });

    it("Should not create a quest if not correct signature", async function () {
      const deadline = ((new Date().getTime() / 1000) | 0) + 24 * 60 * 60;

      const nonce = lastNonce;
      const signature = await wallet._signTypedData(
        questContractDomain,
        typesForCreateQuest,
        {
          orgId: "2",
          questCID:
            "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          reward: "1000000000",
          deadline,
          nonce,
        }
      );

      await expect(
        questController.createQuest(
          "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          "1000000000",
          "1",
          deadline,
          signature,
          nonce,
          { value: "1000000000" }
        )
      ).to.be.revertedWithCustomError(questController, "InvalidSignature");
    });
  });

  describe("Send Proposal", function () {
    it("Should not send the proposal if the sign is invalid", async function () {
      const nonce = lastNonce;
      const signature = await wallet._signTypedData(
        questContractDomain,
        typesForSendProposal,
        {
          questId: "0",
          proposer: accounts[4],
          proposalCID:
            "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          nonce,
        }
      );

      await expect(
        questController
          .connect(signers[4])
          .sendProposal(
            1,
            "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
            signature,
            nonce
          )
      ).to.be.revertedWithCustomError(questController, "InvalidSignature");
    });

    it("Should send the proposal - 1", async function () {
      const nonce = lastNonce;
      const signature = await wallet._signTypedData(
        questContractDomain,
        typesForSendProposal,
        {
          questId: "1",
          proposer: accounts[4],
          proposalCID:
            "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          nonce,
        }
      );

      await questController
        .connect(signers[4])
        .sendProposal(
          1,
          "0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b",
          signature,
          nonce
        );
    });
  });
});
