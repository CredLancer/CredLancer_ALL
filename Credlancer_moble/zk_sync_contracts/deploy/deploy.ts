import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the Greeter contract`);

  // Initialize the wallet.
  const wallet = new Wallet(process.env.PRIVATE_KEY || "");

  // Create deployer object and load the artifact of the contract you want to deploy.
  const deployer = new Deployer(hre, wallet);

  // deploy the organizations contract
  console.log("Deploying the organization contract");
  const OrganizationController = await deployer.loadArtifact(
    "OrganizationController"
  );

  const deploymentFee = await deployer.estimateDeployFee(
    OrganizationController,
    []
  );

  console.log(ethers.utils.formatEther(deploymentFee));

  // OPTIONAL: Deposit funds to L2
  // Comment this block if you already have funds on zkSync.
  const depositHandle = await deployer.zkWallet.deposit({
    to: deployer.zkWallet.address,
    token: utils.ETH_ADDRESS,
    amount: deploymentFee.mul(2),
  });
  // Wait until the deposit is processed on zkSync
  await depositHandle.wait();

  const organizationController = await deployer.deploy(
    OrganizationController,
    []
  );
  console.log(
    `The organization contract is deployed to address: ${organizationController.address}`
  );

  // deploy the credentials contract
  console.log("Deploying the organization contract");
  const Credential = await deployer.loadArtifact("Credential");
  const credential = await deployer.deploy(Credential, []);
  console.log(
    `The credential contract is deployed to address: ${credential.address}`
  );

  // deploy the quests contract
  console.log("Deploying the quest contract");
  const QuestController = await deployer.loadArtifact("QuestController");
  const questController = await deployer.deploy(QuestController, [
    organizationController.address,
    credential.address,
  ]);
  console.log(
    `The quest contract is deployed to address: ${questController.address}`
  );
}
