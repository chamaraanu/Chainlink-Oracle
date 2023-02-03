const hre = require("hardhat");

async function main() {
  console.log("deploying API Consumer Contract...");
  const APIConsumer = await hre.ethers.getContractFactory("APIConsumer");
  const apiConsumer = await APIConsumer.deploy(
    /*{gasPrice: 30000000000, gasLimit: 1000000, nonce: 1311}*/
  );

  await apiConsumer.deployed();

  console.log(`APIConsumer contract deployed to: ${apiConsumer.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
