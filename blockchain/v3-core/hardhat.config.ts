import "@nomicfoundation/hardhat-ignition-ethers";

export default {
  networks: {
    hardhat: {
      mining: {
        mempool: {
          order: "fifo",
        },
        auto: true,
      },
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    sepolia: {
      url: process.env.HTTPS_PROVIDER || 'https://eth-sepolia.g.alchemy.com/v2/0PISwk2ZJQ4XJt4-OHdq5ACx_jmnGzxX',
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
}
