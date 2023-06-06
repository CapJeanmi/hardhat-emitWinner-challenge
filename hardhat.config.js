require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_TESTNET_RPC_URL,
      accounts: [process.env.WALLET_TESTNET_PRIVATE_KEY]
    }
  }
};