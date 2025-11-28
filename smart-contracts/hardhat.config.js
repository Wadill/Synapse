require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");

// ENV Vars
const OG_RPC_URL = process.env.OG_RPC_URL || "https://evmrpc-testnet.0g.ai";
const OG_MAINNET_RPC_URL = process.env.OG_MAINNET_RPC_URL || "https://evmrpc.0g.ai";
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "";
const POLYGON_AMOY_RPC_URL = process.env.POLYGON_AMOY_RPC_URL || "https://rpc-amoy.polygon.technology";
const POLYGON_MAINNET_RPC_URL = process.env.POLYGON_MAINNET_RPC_URL || "https://polygon-rpc.com";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "";

if (!PRIVATE_KEY) {
  console.warn("⚠️ PRIVATE_KEY missing — deployments will fail.");
}
const accounts = PRIVATE_KEY ? [PRIVATE_KEY] : [];

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: { 
        enabled: true, 
        runs: 200 
      },
      metadata: { 
        bytecodeHash: "none" 
      },
      evmVersion: "paris",
      viaIR: true // Recommended for better optimization
    },
  },
  networks: {
    // Existing networks
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
    // Polygon networks
    polygon_amoy: {
      url: POLYGON_AMOY_RPC_URL,
      accounts,
      chainId: 80002,
      gasPrice: 30000000000, // 30 gwei
      timeout: 60000 // 60 seconds
    },
    polygon: {
      url: POLYGON_MAINNET_RPC_URL,
      accounts,
      chainId: 137,
      gasPrice: 30000000000, // 30 gwei
      timeout: 60000 // 60 seconds
    },
    // Local development
    hardhat: {
      chainId: 1337,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    }
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
      og_mainnet: ETHERSCAN_API_KEY,
      polygon: POLYGONSCAN_API_KEY,
      polygonAmoy: POLYGONSCAN_API_KEY,
    },
    customChains: [
      // Existing 0G networks
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
      // Polygon Amoy Testnet
      {
        network: "polygonAmoy",
        chainId: 80002,
        urls: {
          apiURL: "https://api-amoy.polygonscan.com/api",
          browserURL: "https://amoy.polygonscan.com"
        }
      }
    ],
  },
  sourcify: {
    enabled: false
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS === "true",
    currency: "USD",
  },
};