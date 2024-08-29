// Deploy factory, token a and token b in that order to get the same addresses
const dotenv = require('dotenv')
dotenv.config()
const { ethers, JsonRpcProvider } = require('ethers')

const provider = new JsonRpcProvider(process.env.HTTPS_PROVIDER)

const get_pair_abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenA",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "tokenB",
        "type": "address"
      }
    ],
    "name": "getPair",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

const get_reserves_abi = [
  {
    "inputs": [],
    "name": "getReserves",
    "outputs": [
      {
        "internalType": "uint112",
        "name": "_reserve0",
        "type": "uint112"
      },
      {
        "internalType": "uint112",
        "name": "_reserve1",
        "type": "uint112"
      },
      {
        "internalType": "uint32",
        "name": "_blockTimestampLast",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

const get_price0CumulativeLast_abi = [
  {
    "inputs": [],
    "name": "price0CumulativeLast",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

const get_price1CumulativeLast_abi = [
  {
    "inputs": [],
    "name": "price1CumulativeLast",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
const factory = new ethers.Contract('0x22d06d680aBfE8638a2F2136656325Af518C3FD8', get_pair_abi, provider)
const pair = new ethers.Contract('0x805C24890478BbCd82c8Ce2cF73d9cb00cC7715C', get_pair_abi, provider)

const tokenA = '0x574084E6A21cD334277B79f35F98C0Aae24E0030'
const tokenB = '0x945d9Eb083b477472870B2D1a3FAbaFc7ad70F00'

const getPrice = async () => {
  const pair = await factory.getPair(tokenA, tokenB)
  console.log(pair)

  const pairContract = new ethers.Contract(pair, get_reserves_abi, provider)
  const reserves = await pairContract.getReserves()
  console.log(reserves)

  const price0CumulativeLast = new ethers.Contract(pair, get_price0CumulativeLast_abi, provider)
  const price1CumulativeLast = new ethers.Contract(pair, get_price1CumulativeLast_abi, provider)

  const [ price0, price1 ] = await Promise.all([
    price0CumulativeLast.price0CumulativeLast(),
    price1CumulativeLast.price1CumulativeLast()
  ])

  console.log(price0.toString())
  console.log(price1.toString())
}

getPrice()