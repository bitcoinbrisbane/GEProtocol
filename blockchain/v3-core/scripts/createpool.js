// Deploy factory, token a and token b in that order to get the same addresses

const { ethers, JsonRpcProvider } = require('ethers')

const poolFactory = require('../artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json')

const provider = new JsonRpcProvider('http://localhost:8545')

const wallet = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider)
const factory = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', poolFactory.abi, wallet)

const tokenA = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
const tokenB = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'

const createPool = async () => {
  const pool = await factory.createPool(tokenA, tokenB, 3000)
  console.log(pool)
}

const getPool = async () => {
  const pool = await factory.getPool(tokenA, tokenB, 3000)
  console.log(pool)
}

// createPool()
getPool()