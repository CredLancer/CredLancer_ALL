import { OrganizationController } from "../typechain-types";
import { ethers } from "hardhat";
import { ethers as e, Signer } from "ethers";
import { expect } from "chai";
import { ZERO_ADDRESS } from "./helpers";

describe("Organization Controller Contract", function () {
  const domain = {
    name: "Organization Controller",
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

  let signers: Signer[];
  const accounts: string[] = [];
  let wallet: e.Wallet;
  let organizationController: OrganizationController;
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
    domain.verifyingContract = organizationController.address;
    domain.chainId = ethers.provider.network.chainId;
    await organizationController.setSigner(wallet.address);
  });

  describe("Organization Creation", function () {
    it("Should create a organization", async function () {
      const nonce = ++lastNonce;
      const signature = await wallet._signTypedData(
        domain,
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

    it("Should not create a organization again for the same admin", async function () {
      const nonce = ++lastNonce;
      const signature = await wallet._signTypedData(
        domain,
        typesForCreateOrganization,
        {
          admin: accounts[0],
          name: "Org 2",
          imageCID:
            "0x01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a",
          nonce,
        }
      );

      await expect(
        organizationController.createOrganization(
          "Org 2",
          "0x01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a",
          signature,
          nonce
        )
      ).to.be.revertedWithCustomError(
        organizationController,
        "OrganizationsPerAddressLimitReached"
      );
    });

    it("Should create organization for another user", async function () {
      const nonce = ++lastNonce;
      const signature = await wallet._signTypedData(
        domain,
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

  describe("Check Organization Methods", function () {
    it("Should not return admin if organization doesn't exist", async function () {
      await expect(
        organizationController.adminOf(3)
      ).to.be.revertedWithCustomError(
        organizationController,
        "InvalidOrganizationId"
      );
    });

    it("Should return doesn't exist if not exists", async function () {
      expect(await organizationController.exists(3)).to.be.false;
      expect(await organizationController.exists(2)).to.be.true;
    });

    it("Should get the organization id from the admin address", async function () {
      expect(
        await organizationController.organizationIds(accounts[1])
      ).to.be.equal("2");
    });

    it("Should not update the name of the organization if not the admin", async function () {
      await expect(
        organizationController.connect(signers[1]).updateName("1", "Org 3")
      ).to.be.revertedWithCustomError(organizationController, "Unauthorized");
    });

    it("Should update the name of the organization", async function () {
      await organizationController.updateName("1", "Org 3");
      expect(
        (await organizationController.organizations("1")).name
      ).to.be.equal("Org 3");
    });

    it("Should return an error if we call update name function on non-existent org", async function () {
      await expect(
        organizationController.updateName("3", "Org 4")
      ).to.be.revertedWithCustomError(
        organizationController,
        "InvalidOrganizationId"
      );
    });

    it("Should not change admin if not the admin", async function () {
      await expect(
        organizationController.connect(signers[1]).changeAdmin("1", accounts[1])
      ).to.be.revertedWithCustomError(organizationController, "Unauthorized");
    });

    it("Should not change admin if new admin already a admin of another org", async function () {
      await expect(
        organizationController.changeAdmin("1", accounts[1])
      ).to.be.revertedWithCustomError(
        organizationController,
        "OrganizationsPerAddressLimitReached"
      );
    });

    it("Should not change admin to Zero Address", async function () {
      await expect(
        organizationController.changeAdmin("1", ZERO_ADDRESS)
      ).to.be.revertedWithCustomError(
        organizationController,
        "ZeroAddressCannotBeAdmin"
      );
    });

    it("Should change admin", async function () {
      await organizationController.changeAdmin("1", accounts[2]);
      expect(await organizationController.adminOf("1")).to.be.equal(
        accounts[2]
      );
    });

    it("Should not update image cid if not the admin", async function () {
      const nonce = ++lastNonce;
      const signature = await wallet._signTypedData(
        domain,
        typesForUpdateImageCID,
        {
          orgId: 1,
          imageCID:
            "0x0f01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a",
          nonce,
        }
      );

      await expect(
        organizationController.updateImageCID(
          "1",
          "0x0f01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a",
          signature,
          nonce
        )
      ).to.be.revertedWithCustomError(organizationController, "Unauthorized");
    });

    it("Should update image cid", async function () {
      const nonce = ++lastNonce;
      const signature = await wallet._signTypedData(
        domain,
        typesForUpdateImageCID,
        {
          orgId: 1,
          imageCID:
            "0x0f01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a",
          nonce,
        }
      );

      await organizationController
        .connect(signers[2])
        .updateImageCID(
          "1",
          "0x0f01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a",
          signature,
          nonce
        );
      expect(
        (await organizationController.organizations("1")).imageCID
      ).to.be.equal(
        "0x0f01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a"
      );
    });
  });

  describe("Pause", function () {
    it("Should not pause the contract if not the owner", async function () {
      await expect(
        organizationController.connect(signers[1]).pause()
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });

    it("Should pause the contract", async function () {
      expect(await organizationController.paused()).to.be.false;
      await organizationController.pause();
      expect(await organizationController.paused()).to.be.true;
    });
  });

  describe("Methods should not be callable if contract is paused", function () {
    it("Should not call the create organization method", async function () {
      const nonce = ++lastNonce;
      const signature = await wallet._signTypedData(
        domain,
        typesForCreateOrganization,
        {
          admin: accounts[3],
          name: "Org 4",
          imageCID:
            "0x01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a",
          nonce,
        }
      );

      await expect(
        organizationController
          .connect(signers[3])
          .createOrganization(
            "Org 4",
            "0x01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a",
            signature,
            nonce
          )
      ).to.be.revertedWith("Pausable: paused");
    });

    it("Should not call the update name method", async function () {
      await expect(
        organizationController.connect(signers[2]).updateName("1", "Org 4")
      ).to.be.revertedWith("Pausable: paused");
    });

    it("Should not call update image cid method", async function () {
      const nonce = ++lastNonce;
      const signature = await wallet._signTypedData(
        domain,
        typesForUpdateImageCID,
        {
          orgId: 1,
          imageCID:
            "0x0f01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a",
          nonce,
        }
      );

      await expect(
        organizationController
          .connect(signers[2])
          .updateImageCID(
            "1",
            "0x01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a",
            signature,
            nonce
          )
      ).to.be.revertedWith("Pausable: paused");
    });

    it("Should not call change admin method", async function () {
      await expect(
        organizationController.connect(signers[2]).changeAdmin("1", accounts[0])
      ).to.be.revertedWith("Pausable: paused");
    });
  });

  describe("Unpause", function () {
    it("Should not unpause the contract if not the owner", async function () {
      await expect(
        organizationController.connect(signers[1]).unpause()
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });

    it("Should unpause the contract", async function () {
      expect(await organizationController.paused()).to.be.true;
      await organizationController.unpause();
      expect(await organizationController.paused()).to.be.false;
    });
  });
});
