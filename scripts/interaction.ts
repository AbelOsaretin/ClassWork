import { parseEther } from "ethers";
import { ethers } from "hardhat";

async function main() {
  const multiSigFactoryContract = "0x757509E05df72465fc1FAc678Ae823c5DC450005";
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
