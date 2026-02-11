require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY, ARC_RPC_URL } = process.env;

module.exports = {
  solidity: "0.8.20",
  networks: {
    arc: {
      url: ARC_RPC_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
