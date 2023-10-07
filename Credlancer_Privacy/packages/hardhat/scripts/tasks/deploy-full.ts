import { formatEther } from "ethers/lib/utils";
import { task } from "hardhat/config";
import { getConfig, Network, NetworkConfig } from "../../networkConfig";
import {
  DeploymentProperty,
  setDeploymentProperty,
} from "../../utils/deploymentManager";
import { verifyAddress } from "../../utils/utils";

/**
 * @notice Task created only for test purposes of the upgradable process
 * @usage npx hardhat deploy-full --use-test-erc20 --verify --network mumbai
 */
task("deploy-full", "Deploy all the contracts on their first version")
  .addFlag("useTestErc20", "deploy a mock ERC20 contract")
  .addFlag("verify", "verify contracts on etherscan")
  .setAction(async (args, { ethers, run, network, upgrades }) => {
    try {
      const { verify, useTestErc20 } = args;
      const [deployer, bob, carol, dave] = await ethers.getSigners();
      const chainId = network.config.chainId
        ? network.config.chainId
        : Network.LOCAL;
      const networkConfig: NetworkConfig = getConfig(chainId);

      console.log("Network");
      console.log(network.name);
      console.log("Task Args");
      console.log(args);

      console.log("Signer");
      console.log("  at", deployer.address);
      console.log("  ETH", formatEther(await deployer.getBalance()));

      await run("compile");

      // Deploy TalentLayerPlatformID contract
      const TalentLayerPlatformID = await ethers.getContractFactory(
        "TalentLayerPlatformID"
      );

      const talentLayerPlatformID = await upgrades.deployProxy(
        TalentLayerPlatformID,
        {
          timeout: 0,
          pollingInterval: 20000,
        }
      );

      if (verify) {
        await verifyAddress(talentLayerPlatformID.address);
      }

      await talentLayerPlatformID.deployTransaction.wait(1);

      const talentLayerPlatformIDImplementationAddress =
        await upgrades.erc1967.getImplementationAddress(
          talentLayerPlatformID.address
        );
      console.log("TalentLayerPlatformID addresses:", {
        proxy: talentLayerPlatformID.address,
        implementation: talentLayerPlatformIDImplementationAddress,
      });

      setDeploymentProperty(
        network.name,
        DeploymentProperty.TalentLayerPlatformID,
        talentLayerPlatformID.address
      );

      // Deploy ID contract
      const TalentLayerID = await ethers.getContractFactory("TalentLayerID");
      const talentLayerIDArgs: [string] = [talentLayerPlatformID.address];

      const talentLayerID = await upgrades.deployProxy(
        TalentLayerID,
        talentLayerIDArgs,
        {
          timeout: 0,
          pollingInterval: 20000,
        }
      );

      await talentLayerID.deployTransaction.wait(1);

      if (verify) {
        await verifyAddress(talentLayerID.address);
      }
      console.log(talentLayerID.address);
      const talentLayerIDImplementationAddress =
        await upgrades.erc1967.getImplementationAddress(talentLayerID.address);
      console.log("TalentLayerID addresses:", {
        proxy: talentLayerID.address,
        implementation: talentLayerIDImplementationAddress,
      });

      setDeploymentProperty(
        network.name,
        DeploymentProperty.TalentLayerID,
        talentLayerID.address
      );

      // Deploy TalentLayerService Contract
      const TalentLayerService = await ethers.getContractFactory(
        "TalentLayerService"
      );
      const talentLayerServiceArgs: [string, string] = [
        talentLayerID.address,
        talentLayerPlatformID.address,
      ];

      const talentLayerService = await upgrades.deployProxy(
        TalentLayerService,
        talentLayerServiceArgs,
        {
          timeout: 0,
          pollingInterval: 20000,
        }
      );

      await talentLayerService.deployTransaction.wait(1);

      if (verify) {
        await verifyAddress(talentLayerService.address);
      }
      const talentLayerServiceImplementationAddress =
        await upgrades.erc1967.getImplementationAddress(
          talentLayerService.address
        );
      console.log("TalentLayerService addresses:", {
        proxy: talentLayerService.address,
        implementation: talentLayerServiceImplementationAddress,
      });
      setDeploymentProperty(
        network.name,
        DeploymentProperty.TalentLayerService,
        talentLayerService.address
      );

      // Deploy Review contract
      const TalentLayerReview = await ethers.getContractFactory(
        "TalentLayerReview"
      );
      const talentLayerReviewArgs: [string, string] = [
        talentLayerID.address,
        talentLayerService.address,
      ];

      const talentLayerReview = await upgrades.deployProxy(
        TalentLayerReview,
        talentLayerReviewArgs,
        {
          timeout: 0,
          pollingInterval: 20000,
        }
      );

      await talentLayerReview.deployTransaction.wait(1);

      if (verify) {
        await verifyAddress(talentLayerReview.address);
      }
      const talentLayerReviewImplementationAddress =
        await upgrades.erc1967.getImplementationAddress(
          talentLayerReview.address
        );
      console.log("TalentLayerReview addresses:", {
        proxy: talentLayerReview.address,
        implementation: talentLayerReviewImplementationAddress,
      });

      setDeploymentProperty(
        network.name,
        DeploymentProperty.TalentLayerReview,
        talentLayerReview.address
      );

      // Deploy TalentLayerArbitrator
      const TalentLayerArbitrator = await ethers.getContractFactory(
        "TalentLayerArbitrator"
      );
      const talentLayerArbitrator = await TalentLayerArbitrator.deploy(
        talentLayerPlatformID.address
      );

      await talentLayerArbitrator.deployTransaction.wait(1);
      if (verify) {
        await verifyAddress(talentLayerArbitrator.address, [
          talentLayerPlatformID.address,
        ]);
      }
      console.log(
        "TalentLayerArbitrator contract address:",
        talentLayerArbitrator.address
      );

      setDeploymentProperty(
        network.name,
        DeploymentProperty.TalentLayerArbitrator,
        talentLayerArbitrator.address
      );

      // Add TalentLayerArbitrator to platform available arbitrators
      await talentLayerPlatformID.addArbitrator(
        talentLayerArbitrator.address,
        true
      );

      if (!networkConfig.requestContracts.erc20FeeProxy) {
        const ERC20FeeProxy = await ethers.getContractFactory("ERC20FeeProxy");
        const erc20FeeProxy = await ERC20FeeProxy.deploy();

        await erc20FeeProxy.deployTransaction.wait(1);

        if (verify) {
          await verifyAddress(erc20FeeProxy.address);
        }
        console.log("ERC20FeeProxy contract address:", erc20FeeProxy.address);

        networkConfig.requestContracts.erc20FeeProxy = erc20FeeProxy.address;
      }
      if (!networkConfig.requestContracts.ethereumFeeProxy) {
        const EthereumFeeProxy = await ethers.getContractFactory(
          "EthereumFeeProxy"
        );
        const ethereumFeeProxy = await EthereumFeeProxy.deploy();

        await ethereumFeeProxy.deployTransaction.wait(1);

        if (verify) {
          await verifyAddress(ethereumFeeProxy.address);
        }
        console.log(
          "EthereumFeeProxy contract address:",
          ethereumFeeProxy.address
        );

        networkConfig.requestContracts.ethereumFeeProxy =
          ethereumFeeProxy.address;
      }

      const TalentLayerEscrow = await ethers.getContractFactory(
        "CustomTalentLayerEscrow"
      );
      const talentLayerEscrowArgs: [
        string,
        string,
        string,
        string | undefined,
        string | undefined,
        string | undefined
      ] = [
        talentLayerService.address,
        talentLayerID.address,
        talentLayerPlatformID.address,
        networkConfig.multisigAddressList.fee,
        networkConfig.requestContracts.erc20FeeProxy,
        networkConfig.requestContracts.ethereumFeeProxy,
      ];

      const talentLayerEscrow = await upgrades.deployProxy(
        TalentLayerEscrow,
        talentLayerEscrowArgs,
        {
          timeout: 0,
          pollingInterval: 20000,
        }
      );

      await talentLayerEscrow.deployTransaction.wait(1);

      if (verify) {
        await verifyAddress(talentLayerEscrow.address);
      }
      const talentLayerEscrowImplementationAddress =
        await upgrades.erc1967.getImplementationAddress(
          talentLayerEscrow.address
        );
      console.log("CustomTalentLayerEscrow contract addresses:", {
        proxy: talentLayerEscrow.address,
        implementation: talentLayerEscrowImplementationAddress,
      });

      setDeploymentProperty(
        network.name,
        DeploymentProperty.TalentLayerEscrow,
        talentLayerEscrow.address
      );

      if (useTestErc20) {
        // Deploy ERC20 contract

        // amount transferred to bob, dave and carol
        const amount = ethers.utils.parseUnits("10", 18);
        const SimpleERC20 = await ethers.getContractFactory("SimpleERC20");
        const simpleERC20 = await SimpleERC20.deploy();
        await simpleERC20.transfer(bob.address, amount);
        await simpleERC20.transfer(carol.address, amount);
        await simpleERC20.transfer(dave.address, amount);

        console.log("simpleERC20 address:", simpleERC20.address);

        // get the SimpleERC20 balance in wallet of bob, carol and dave
        const balance = await simpleERC20.balanceOf(bob.address);
        console.log("SimpleERC20 balance:", balance.toString());
        const balance2 = await simpleERC20.balanceOf(carol.address);
        console.log("SimpleERC20 balance2:", balance2.toString());
        const balance3 = await simpleERC20.balanceOf(dave.address);
        console.log("SimpleERC20 balance3:", balance3.toString());

        setDeploymentProperty(
          network.name,
          DeploymentProperty.SimpleERC20,
          simpleERC20.address
        );
      }

      // Grant escrow role
      const escrowRole = await talentLayerService.ESCROW_ROLE();
      await talentLayerService.grantRole(escrowRole, talentLayerEscrow.address);
    } catch (e) {
      console.log("------------------------");
      console.log("FAILED");
      console.error(e);
      console.log("------------------------");
      return "FAILED";
    }
  });
