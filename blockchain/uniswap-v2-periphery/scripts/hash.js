const fs = require("fs");
const ethers = require("ethers");

// load from artifacts

const pairJson = JSON.parse(fs.readFileSync("./artifacts/contracts/UniswapV2Pair.sol/UniswapV2Pair.json"));
const bytecode = pairJson.bytecode;

console.log(bytecode);

// hash the byte code with keccak256
const hash = ethers.utils.keccak256(bytecode);
console.log("Hash:", hash);