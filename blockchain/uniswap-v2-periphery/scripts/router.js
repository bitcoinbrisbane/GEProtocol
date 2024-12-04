const fs = require("fs");
const { ethers } = require("ethers");
const BigNumber = require("bignumber.js");
const { JsonRpcProvider } = require("@ethersproject/providers");

require("dotenv").config();

const private_key = process.env.PRIVATE_KEY;
const ROUTER_ADDRESS = "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d";
const MOCK_USD_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const TOKEN_0_USD = "0x26a69c93Fbda73A5a46D79bdfCD282B947b741BE";
const TOKEN_1 = "0xd21ba2B3Fd3B921CCf9C60ab2aBEaCCaDb4cE220";
const MOCK_WBTC_ADDRESS = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
const WETH = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const PAIR = "0x805C24890478BbCd82c8Ce2cF73d9cb00cC7715C";

const url = process.env.HTTPS_PROVIDER;
const network = 11155111;

const provider = new JsonRpcProvider(url, network, {
  staticNetwork: network,
});

const wallet = new ethers.Wallet(private_key, provider);

const erc20Abi = [
  "function name() public view returns (string memory)",
  "function balanceOf(address account) external view returns (uint256)",
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function allowance(address owner, address spender) external view returns (uint256)"
];

const amount = ethers.BigNumber.from("1000000000000000000");

const getFactory = async () => {
  try {
    const factoryAbi = ["function factory() view returns (address)"];
    const contract = new ethers.Contract(ROUTER_ADDRESS, factoryAbi, wallet);
    const factory = await contract.factory();
    console.log("Factory address:", factory);
  } catch (error) {
    console.error("Error approving tokens:", error);
  }
};

const approveToken = async (address) => {
  try {
    const contract = new ethers.Contract(address, erc20Abi, wallet);
    const tx = await contract.approve(ROUTER_ADDRESS, amount);
    console.log("Transaction hash:", tx.hash);

    const name = await contract.name();
    console.log("Token name:", name, "approved");

    const receipt = await tx.wait();
    console.log("Transaction was mined in block:", receipt.blockNumber);
  } catch (error) {
    console.error("Error approving tokens:", error);
  }
};

const addLiquidity = async (tokenAAddress, tokenBAddress, tokenAAmount) => {
  const tokenA = new ethers.Contract(tokenAAddress, erc20Abi, wallet);
  const aBalance = await tokenA.balanceOf(wallet.address);
  const nameA = await tokenA.name();
  console.log("A Balance:", aBalance.toString(), "Name:", nameA);

  const tokenB = new ethers.Contract(tokenBAddress, erc20Abi, wallet);
  const bBalance = await tokenB.balanceOf(wallet.address);
  const nameB = await tokenB.name();
  console.log("B Balance:", bBalance.toString(), "Name:", nameB);

  // do math
  const amountADesired = ethers.utils.parseUnits(tokenAAmount.toString()) // 10,000 DAI 18 decimals
  const amountAMin = ethers.utils.parseUnits("999");      // 9,900 DAI (99% of desired):

  // WBTC amount (Token B) - 0.10869565 BTC with 18 decimals
  // 0.10869565 * 10^18
  const amountBDesired = ethers.BigNumber.from("1086956521739130"); // 0.10869565 BTC
  const amountBMin = ethers.BigNumber.from("1076086956521739");     // 0.10760869 BTC (99% of desired)

  // Check approval of token a
  const allowance = await tokenA.allowance(wallet.address, ROUTER_ADDRESS);
  console.log("Allowance:", allowance.toString());

  if (allowance.lt(tokenAAmount)) {
    await approveToken(tokenAAddress);
  }

  // Check approval of token b
  const allowanceB = await tokenB.allowance(wallet.address, ROUTER_ADDRESS);
  console.log("Allowance:", allowanceB.toString());

  if (allowanceB.lt(tokenAAmount)) {
    await approveToken(tokenBAddress);
  }

  const addLiquidityAbi = [
    "function addLiquidity(address tokenA, address tokenB, uint amountADesired, uint amountBDesired, uint amountAMin, uint amountBMin, address to, uint deadline) external returns (uint amountA, uint amountB, uint liquidity)",
  ];

  const contract = new ethers.Contract(ROUTER_ADDRESS, addLiquidityAbi, wallet);

  if (aBalance.lt(amountADesired)) {
    console.error("Insufficient Token A balance");
    return;
  }

  if (bBalance.lt(amountBDesired)) {
    console.error("Insufficient Token B balance");
    return;
  }

  const to = wallet.address
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from now

  const tx = await contract.addLiquidity(
    token0 = tokenAAddress,
    token1 = tokenBAddress,
    amountADesired,
    amountBDesired,
    amountAMin,
    amountBMin,
    to,
    deadline
  );

  console.log("Transaction hash:", tx.hash);

  const receipt = await tx.wait();
  console.log("Transaction for add liquidity was mined in block:", receipt.blockNumber);
};

const dai = "0x337CdBAc14AB233f947DA164078774e4e99F5C2D";
const wbtc = "0x574084E6A21cD334277B79f35F98C0Aae24E0030";
addLiquidity(dai, wbtc, 1000);