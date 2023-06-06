const hre = require("hardhat");

async function main() {

  /*
  *
  * The content of originalContractAddress is:
  * 
  * // SPDX-License-Identifier: Unlicense
  * pragma solidity ^0.8.0;
 
  * contract Contract {
  *     event Winner(address);
 
  *     function attempt() external {
  *         require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
  *         emit Winner(msg.sender);
  *     }
  * }
  * 
  * 
  */

  const originalContractAddress = "0xdC7Ae38Aef9B9D559Da26a0Ba9c72892EB6d0A1a";
  const Contract = await hre.ethers.getContractFactory("Contract");
  const contract = await Contract.deploy();

  const emitWinner = await contract.triggerWinningAttempt(originalContractAddress);

  if (emitWinner) {
    console.log("Attempt was made");
    console.log(`You can check your transaction here: https://sepolia.etherscan.io/address/${contract.address}`)
    console.log(`You can check the event here: https://sepolia.etherscan.io/address/0xdc7ae38aef9b9d559da26a0ba9c72892eb6d0a1a#events`)
  } else{
    console.log("Something went wrong :(");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});