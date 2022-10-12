const hre = require("hardhat");

async function main() {
    const web3cmsFactory = await hre.ethers.getContractFactory("Web3Cms")
    const web3cmsContract = await web3cmsFactory.deploy()
    await web3cmsContract.deployed()
    console.log("Contract deployed to:", web3cmsContract.address);
};

main();