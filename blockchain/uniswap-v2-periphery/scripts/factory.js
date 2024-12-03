const fs = require("fs");
const { ethers } = require("ethers");
const BigNumber = require("bignumber.js");
const { JsonRpcProvider } = require("@ethersproject/providers");

require("dotenv").config();

// const private_key = process.env.PRIVATE_KEY;
const MOCK_USD_ADDRESS = "0x5Df3cF639d8cB528A973B2b4BA6eC9D7EEd6a176";
const TOKEN_0_USD = "0x26a69c93Fbda73A5a46D79bdfCD282B947b741BE";
const TOKEN_1 = "0xd21ba2B3Fd3B921CCf9C60ab2aBEaCCaDb4cE220";
const MOCK_WBTC_ADDRESS = "0x0aD29c477599531eb6d490084C098CE2c430567b";
const WETH = "0xc665C290BaCA0709d66327320206d7c65e2A6F36";
const FACTORY = "0x22d06d680aBfE8638a2F2136656325Af518C3FD8";

// const factoryJson = JSON.parse(
//   fs.readFileSync("./ignition/deployments/chain-11155111/artifacts/UniswapV2FactoryModule#UniswapV2Factory.json")
// );

const factoryAbi = [
  "function allPairsLength() external view returns (uint256)",
  "function allPairs(uint256) external view returns (address)",
]

const pairAbi = [
  "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
  "function token0() external view returns (address)",
  "function token1() external view returns (address)",
  "function mint(address to) external",
  "function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external",
  "function skim(address to) external",
  "function sync() external",
  "function initialize(address, address) external"
];

const erc20Abi = [
  "function name() public view returns (string memory)",
  "function balanceOf(address account) external view returns (uint256)",
  "function approve(address spender, uint256 amount) external returns (bool)"
];

const url = process.env.HTTPS_PROVIDER;
const network = 11155111;

const provider = new JsonRpcProvider(url, network, {
  staticNetwork: network,
});

// const signer = new ethers.Wallet(private_key, provider);

// // Your wallet private key
// const privateKey = process.env.PRIVATE_KEY;

// // Create a wallet instance
// const wallet = new ethers.Wallet(privateKey, provider);

// The amount you want to approve (as a BigNumber)
const amount = ethers.BigNumber.from("1000000000000000000"); // 1 token with 18 decimals

const allPairs = async () => {
  const factory = new ethers.Contract(FACTORY, factoryAbi, provider);
  const length = await factory.allPairsLength();
  console.log("Pairs count:", length);

  const pairs = [];

  // Set to 1 because the first pair breaks
  for (let i = 1; i < length; i++) {
    try {
      const pairAddress = await factory.allPairs(i);

      const pair = new ethers.Contract(pairAddress, pairAbi, provider);
      const token0 = await pair.token0();
      const token1 = await pair.token1();

      console.log("Token0:", token0);
      console.log("Token1:", token1);

      const token0Contract = new ethers.Contract(token0, erc20Abi, provider);
      const token1Contract = new ethers.Contract(token1, erc20Abi, provider);

      const name0 = await token0Contract.name();
      const name1 = await token1Contract.name();

      console.log("Token0 name:", name0);
      console.log("Token1 name:", name1);

      pairs.push({
        pairAddress,
        token0,
        token1,
        name0,
        name1,
      });
    } catch (e) {
      console.log(e);
    }
  }

  console.table(pairs);
};

const createPair = async () => {
  const factory = new ethers.Contract(FACTORY, factoryAbi, wallet);
  const tx = await factory.createPair(MOCK_USD_ADDRESS, MOCK_WBTC_ADDRESS);
  console.log("Transaction hash:", tx.hash);
}

const removeLiquidity = async () => {
  const pair = new ethers.Contract("0xc5450a95011f3bde4ccf55d0c083e01ec43cfba1", pairAbi, wallet);
  const tx = await pair.mint("0x7c5D4F8345e66f68099581db340cd65B78C0b3d8");
  console.log("Transaction hash:", tx.hash);
}

allPairs();
// createPair();
