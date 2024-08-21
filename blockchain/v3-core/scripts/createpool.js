const ethers = require('ethers');

const poolFactory = require('../artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json');

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

const wallet = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);

const factory = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', poolFactory.abi, wallet);

const tokenA = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const tokenB = "0x5FbDB2315678afecb367f032d93F642f64180aa3";