require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");

// ENV Vars
const OG_RPC_URL = process.env.OG_RPC_URL || "https://evmrpc-testnet.0g.ai";
const OG_MAINNET_RPC_URL = process.env.OG_MAINNET_RPC_URL || "https://evmrpc.0g.ai";
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

if (!PRIVATE_KEY) {
  console.warn("⚠️ PRIVATE_KEY missing — deployments will fail.");
}
const accounts = PRIVATE_KEY ? [PRIVATE_KEY] : [];

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: { enabled: true, runs: 200 },
      metadata: { bytecodeHash: "none" },
      evmVersion: "paris",
    },
  },
  networks: {
    og_galileo: {
      chainId: 16602,
      url: OG_RPC_URL,
      accounts,
      gasPrice: 3000000000,
      gas: 5_000_000,
    },
    og_mainnet: {
      chainId: 16661,
      url: OG_MAINNET_RPC_URL,
      accounts,
      gasPrice: 3000000000,
      gas: 5_000_000,
    },
    sepolia: {
      chainId: 11155111,
      url: SEPOLIA_RPC_URL,
      accounts,
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
      og_mainnet: ETHERSCAN_API_KEY, // Use 0G explorer API key if required
    },
    customChains: [
      {
        network: "og_galileo",
        chainId: 16602,
        urls: {
          apiURL: "https://explorer.testnet.0g.ai/api",
          browserURL: "https://explorer.testnet.0g.ai",
        },
      },
      {
        network: "og_mainnet",
        chainId: 16661,
        urls: {
          apiURL: "https://explorer.0g.ai/api",
          browserURL: "https://explorer.0g.ai",
        },
      },
    ],
  },
};