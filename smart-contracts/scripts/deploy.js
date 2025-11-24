const hre = require('hardhat');

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log('Deploying from:', deployer.address);
  console.log('Balance:', (await hre.ethers.provider.getBalance(deployer.address)).toString());

  const HealthAI = await hre.ethers.getContractFactory('HealthAI');
  const health = await HealthAI.deploy();
  await health.waitForDeployment();

  console.log('🚀 0G-HealthAI LIVE on MAINNET!');
  console.log('Contract:', health.target);
  console.log('Explorer: https://explorer.0g.ai/address/', health.target);
}

main().catch(console.error);