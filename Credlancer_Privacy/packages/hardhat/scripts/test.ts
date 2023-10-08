import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  const platformIdContract = await ethers.getContractAt(
    "TalentLayerPlatformID",
    "0x8571d5b996494DAaAe38f7E7ab89F3085B7Bc6aA"
  );
  const idContract = await ethers.getContractAt(
    "TalentLayerID",
    "0xE781DF79AB7afc5996Ba761BA40aaf646438656C"
  );
  await idContract.updateMintStatus(2);

  const deployerIdPlatform = await platformIdContract.ids(deployer.address);

  const mint = await idContract.mint(deployerIdPlatform, "marcuspang");
  const receipt = await mint.wait();
  console.log({ receipt });

  // const mintRole = await platformIdContract.MINT_ROLE();
  // const grantRole = await platformIdContract.grantRole(
  //   mintRole,
  //   deployer.address
  // );
  // await grantRole.wait();
  // await platformIdContract.whitelistUser(deployer.address);

  // const mint = await platformIdContract.mintForAddress(
  //   "credlancer",
  //   deployer.address,
  //   {
  //     gasLimit: 1000000,
  //   }
  // );
  // const receipt = await mint.wait();
  // console.log({ receipt });
}

main().catch(console.error);
