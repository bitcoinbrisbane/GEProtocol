const fs = require("fs");
const { ethers } = require("ethers");
const BigNumber = require("bignumber.js");
const { JsonRpcProvider } = require("@ethersproject/providers");

require("dotenv").config();

const private_key = process.env.PRIVATE_KEY;
const MOCK_USD_ADDRESS = "0x5Df3cF639d8cB528A973B2b4BA6eC9D7EEd6a176";
const TOKEN_0_USD = "0x26a69c93Fbda73A5a46D79bdfCD282B947b741BE";
const TOKEN_1 = "0xd21ba2B3Fd3B921CCf9C60ab2aBEaCCaDb4cE220";
const MOCK_WBTC_ADDRESS = "0x0aD29c477599531eb6d490084C098CE2c430567b";
const WETH = "0xc665C290BaCA0709d66327320206d7c65e2A6F36";
const FACTORY = "0x22d06d680aBfE8638a2F2136656325Af518C3FD8";

const factoryJson = JSON.parse(
  fs.readFileSync("./ignition/deployments/chain-11155111/artifacts/UniswapV2FactoryModule#UniswapV2Factory.json")
);

const factoryAbi = factoryJson.abi;
const url = process.env.HTTPS_PROVIDER;
const network = 11155111;

const provider = new JsonRpcProvider(url, network, {
  staticNetwork: network,
});

const signer = new ethers.Wallet(private_key, provider);

// Your wallet private key
const privateKey = process.env.PRIVATE_KEY;

// Create a wallet instance
const wallet = new ethers.Wallet(privateKey, provider);

// The amount you want to approve (as a BigNumber)
const amount = ethers.BigNumber.from("1000000000000000000"); // 1 token with 18 decimals

const allPairs = async () => {
  const factory = new ethers.Contract(FACTORY, factoryAbi, provider);
  const length = await factory.allPairsLength();
  console.log("Pairs count:", length);

  const pairs = await factory.allPairs(0);
  console.log("Pairs :", pairs);
};

const createPair = async () => {
  const factory = new ethers.Contract(FACTORY, factoryAbi, wallet);
  const tx = await factory.createPair(MOCK_USD_ADDRESS, MOCK_WBTC_ADDRESS);
  console.log("Transaction hash:", tx.hash);
}

allPairs();
createPair();

