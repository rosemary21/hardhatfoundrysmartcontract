async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const Owner = await ethers.getContractFactory("Owner");
  const ownerContract = await Owner.deploy();

  // ethers v6 uses waitForDeployment instead of deployed()
  await ownerContract.waitForDeployment();

  console.log("Owner.sol deployed to:", await ownerContract.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
