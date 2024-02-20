import { parseEther } from "ethers";
import { ethers } from "hardhat";

async function main() {
  const multiSigFactoryContract = "0xD15FBEb549E0b94C0282c01139A94742Cab6074E";
  const MULTISIGFACTORY = await ethers.getContractAt(
    "SaveERC20",
    multiSigFactoryContract
  );

  const amount = parseEther("1");

  const createWalletTx = await MULTISIGFACTORY.deposit(amount);
  await createWalletTx.wait();

  console.log(createWalletTx);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
