import { ethers } from 'hardhat';

async function main() {
  const Cryptomeda = await ethers.getContractFactory('Cryptomeda');
  const cryptomeda = await Cryptomeda.deploy();

  await cryptomeda.deployed();

  console.log(`Cryptomeda deployed to ${cryptomeda.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
