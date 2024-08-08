const fs = require("fs");
const { ethers } = require("ethers");
const BigNumber = require("bignumber.js");
const { JsonRpcProvider } = require("@ethersproject/providers");

require("dotenv").config();

// const private_key = process.env.PRIVATE_KEY;
const private_key = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
// const ROUTER_ADDRESS = "0x819A6D981F0b886384aa257bcFb153Ea9F98cA8e"; // SEPOLIA
const ROUTER_ADDRESS = "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d";
// const MOCK_USD_ADDRESS = "0x5Df3cF639d8cB528A973B2b4BA6eC9D7EEd6a176";
const MOCK_USD_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const TOKEN_0_USD = "0x26a69c93Fbda73A5a46D79bdfCD282B947b741BE";
const TOKEN_1 = "0xd21ba2B3Fd3B921CCf9C60ab2aBEaCCaDb4cE220";
// const MOCK_WBTC_ADDRESS = "0x0aD29c477599531eb6d490084C098CE2c430567b";
const MOCK_WBTC_ADDRESS = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
const WETH = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const PAIR = "0x805C24890478BbCd82c8Ce2cF73d9cb00cC7715C";

// const routerJson = JSON.parse(
//   fs.readFileSync("./ignition/deployments/chain-11155111/artifacts/UniswapV2RouterModule#UniswapV2Router01.json")
// );

// const routerAbi = routerJson.abi;
const url = "http://localhost:8545"; //process.env.HTTPS_PROVIDER;
const network = 1337; // 11155111;

const provider = new JsonRpcProvider(url, network, {
  staticNetwork: network,
});

const signer = new ethers.Wallet(private_key, provider);

// Your wallet private key
const privateKey = private_key; // process.env.PRIVATE_KEY;

// Create a wallet instance
const wallet = new ethers.Wallet(privateKey, provider);

// The ABI of the ERC-20 contract (simplified)
const abi = ["function approve(address spender, uint256 amount) external returns (bool)"];

// The amount you want to approve (as a BigNumber)
const amount = ethers.BigNumber.from("1000000000000000000"); // 1 token with 18 decimals

async function getFactory() {
  try {
    // Create a contract instance
    const factoryAbi = ["function factory() view returns (address)"];
    const contract = new ethers.Contract(ROUTER_ADDRESS, factoryAbi, wallet);
    const factory = await contract.factory();
    console.log("Factory address:", factory);
  } catch (error) {
    console.error("Error approving tokens:", error);
  }
}

async function approveTokenA() {
  try {
    // Create a contract instance
    const contract = new ethers.Contract(MOCK_USD_ADDRESS, abi, wallet);
    const tx = await contract.approve(ROUTER_ADDRESS, amount);
    console.log("Transaction hash:", tx.hash);

    // Wait for the transaction to be mined
    const receipt = await tx.wait();
    console.log("Transaction was mined in block:", receipt.blockNumber);
  } catch (error) {
    console.error("Error approving tokens:", error);
  }
}

async function approveTokenB() {
  try {
    // Create a contract instance
    const contract = new ethers.Contract(MOCK_WBTC_ADDRESS, abi, wallet);
    const tx = await contract.approve(ROUTER_ADDRESS, amount);
    console.log("Transaction hash:", tx.hash);

    // Wait for the transaction to be mined
    const receipt = await tx.wait();
    console.log("Transaction was mined in block:", receipt.blockNumber);
  } catch (error) {
    console.error("Error approving tokens:", error);
  }
}

const addLiquidity = async () => {
  const abi = ["function balanceOf(address owner) view returns (uint256)"];

  // Check owners wallet token balance
  const wbtc = new ethers.Contract(MOCK_WBTC_ADDRESS, abi, wallet);
  const wbtcBalance = await wbtc.balanceOf(wallet.address);
  console.log("WBTC Balance:", wbtcBalance.toString());

  const usdc = new ethers.Contract(MOCK_USD_ADDRESS, abi, wallet);
  const usdcBalance = await usdc.balanceOf(wallet.address);
  console.log("USDC Balance:", usdcBalance.toString());

  const addLiquidityAbi = [
    "function addLiquidity(address tokenA, address tokenB, uint amountADesired, uint amountBDesired, uint amountAMin, uint amountBMin, address to, uint deadline) external returns (uint amountA, uint amountB, uint liquidity)",
  ];

  const contract = new ethers.Contract(ROUTER_ADDRESS, addLiquidityAbi, wallet);
  const amountADesired = ethers.BigNumber.from("1000000000000000"); // 1 USDC
  const amountAMin = ethers.BigNumber.from("100000000000000"); // 0.1 USDC
  const amountBDesired = ethers.BigNumber.from("10000000000000000"); // 0.01 WBTC
  const amountBMin = ethers.BigNumber.from("1000000000000000"); // 0.001 WBTC

  if (usdcBalance.lt(amountADesired)) {
    console.error("Insufficient USDC balance");
    return;
  }

  if (wbtcBalance.lt(amountBDesired)) {
    console.error("Insufficient WBTC balance");
    return;
  }

  const to = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; //"0x7988123D1F90ccF9675f9D154870Af0f9274DF91";
  //const to = "0xB758DAF16A01d63E4570E10CbB3897Ab0Cc2a51D"; // index 1
  const deadline = 99999999999; // Math.floor(Date.now() / 1000) + 60 * 60; // 60 minutes from the current Unix time
  const token0 = MOCK_WBTC_ADDRESS;
  const token1 = MOCK_USD_ADDRESS;

  const tx = await contract.addLiquidity(
    token0,
    token1,
    amountADesired,
    amountBDesired,
    amountAMin,
    amountBMin,
    to,
    deadline
  );

  console.log("Transaction hash:", tx.hash);

  // Wait for the transaction to be mined
  const receipt = await tx.wait();
  console.log("Transaction was mined in block:", receipt.blockNumber);
};

// Run the approve function on mock usdt
// TODO: Check the allowance first
// approveTokenA();
// approveTokenB();
// getFactory();
addLiquidity();
