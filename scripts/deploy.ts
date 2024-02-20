import { ethers } from "hardhat";
import "dotenv/config";

async function main() {
  const tokenAddress = 0xcafd6a3fcbafd07484d144ac434cf5d27b81724a;
  const TokenAbel = await ethers.deployContract("SaveERC20");

  await TokenAbel.waitForDeployment();

  console.log(`LContract deployed to ${TokenAbel.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
