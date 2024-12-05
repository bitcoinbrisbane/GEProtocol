const { ethers } = require("ethers");
const BigNumber = require("bignumber.js");
const { JsonRpcProvider } = require("@ethersproject/providers");

require("dotenv").config();

const private_key = process.env.PRIVATE_KEY;
const ROUTER_ADDRESS = "0xc5450a95011f3bde4ccf55d0c083e01ec43cfba1";
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
  "function symbol() public view returns (string memory)",
  "function decimals() public view returns (uint8)",
  "function totalSupply() external view returns (uint256)",
  "function balanceOf(address account) external view returns (uint256)",
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function allowance(address owner, address spender) external view returns (uint256)"
];

const pairAbi = [
  "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
  "function token0() external view returns (address)",
  "function token1() external view returns (address)",
  "function totalSupply() external view returns (uint256)"
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

const checkPairLiquidity = async (pairAddress) => {
  try {
    // Create contract instances
    const pairContract = new ethers.Contract(pairAddress, pairAbi, wallet);

    // Get tokens in the pair
    const token0Address = await pairContract.token0();
    const token1Address = await pairContract.token1();

    // Get token contracts
    const token0Contract = new ethers.Contract(token0Address, erc20Abi, wallet);
    const token1Contract = new ethers.Contract(token1Address, erc20Abi, wallet);

    // Get token information
    const [
      token0Symbol,
      token1Symbol,
      token0Decimals,
      token1Decimals,
      reserves,
      totalSupply
    ] = await Promise.all([
      token0Contract.symbol(),
      token1Contract.symbol(),
      token0Contract.decimals(),
      token1Contract.decimals(),
      pairContract.getReserves(),
      pairContract.totalSupply()
    ]);

    // Format reserves according to token decimals
    const reserve0 = ethers.utils.formatUnits(reserves[0], token0Decimals);
    const reserve1 = ethers.utils.formatUnits(reserves[1], token1Decimals);
    const formattedTotalSupply = ethers.utils.formatEther(totalSupply);

    console.log("\nPair Liquidity Information:");
    console.log("------------------------");
    console.log(`Pair Address: ${pairAddress}`);
    console.log(`Token0 (${token0Symbol}): ${reserve0}`);
    console.log(`Token1 (${token1Symbol}): ${reserve1}`);
    console.log(`Total LP Tokens: ${formattedTotalSupply}`);
    console.log(`Last Updated: Block Timestamp ${reserves[2]}`);

    return {
      token0: {
        address: token0Address,
        symbol: token0Symbol,
        reserve: reserve0
      },
      token1: {
        address: token1Address,
        symbol: token1Symbol,
        reserve: reserve1
      },
      totalSupply: formattedTotalSupply,
      lastUpdated: reserves[2]
    };

  } catch (error) {
    console.error("Error checking pair liquidity:", error);
    throw error;
  }
}

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

const removeLiquidity = async (
  pairAddress,
  tokenA,
  tokenB,
  liquidityPercentage // percentage of LP tokens to remove (1-100)
) => {

  // Router ABI for removeLiquidity
  const routerAbi = [
    "function removeLiquidity(address tokenA, address tokenB, uint liquidity, uint amountAMin, uint amountBMin, address to, uint deadline) external returns (uint amountA, uint amountB)"
  ];

  try {
    // Initialize contracts
    const pairContract = new ethers.Contract(pairAddress, erc20Abi, wallet);
    const routerContract = new ethers.Contract(ROUTER_ADDRESS, routerAbi, wallet);

    // Get user's LP token balance
    const lpBalance = await pairContract.balanceOf(wallet.address);
    console.log("LP Token Balance:", ethers.utils.formatEther(lpBalance));

    if (lpBalance.eq(0)) {
      throw new Error("No LP tokens available to remove");
    }

    // Calculate amount of LP tokens to remove
    const liquidityToRemove = lpBalance.mul(liquidityPercentage).div(100);
    console.log("Liquidity to remove:", ethers.utils.formatEther(liquidityToRemove));

    // Check router allowance
    const allowance = await pairContract.allowance(wallet.address, ROUTER_ADDRESS);
    console.log("Current Router Allowance:", ethers.utils.formatEther(allowance));

    // Approve router if needed
    if (allowance.lt(liquidityToRemove)) {
      console.log("Approving LP tokens to router...");
      const approveTx = await pairContract.approve(
        ROUTER_ADDRESS,
        ethers.constants.MaxUint256 // Infinite approval, can be adjusted
      );
      await approveTx.wait();
      console.log("Approval successful");
    }

    // Calculate minimum amounts (95% of proportional share as slippage protection)
    const totalSupply = await pairContract.totalSupply();
    const share = liquidityToRemove.mul(ethers.constants.WeiPerEther).div(totalSupply);

    // Get current reserves using the previous checkPairLiquidity function
    const reserves = await checkPairLiquidity(pairAddress);

    // Calculate minimum amounts with 5% slippage
    const amountAMin = ethers.utils.parseUnits(
      (parseFloat(reserves.token0.reserve) * share.mul(95).div(100) / ethers.constants.WeiPerEther).toString(),
      18
    );
    const amountBMin = ethers.utils.parseUnits(
      (parseFloat(reserves.token1.reserve) * share.mul(95).div(100) / ethers.constants.WeiPerEther).toString(),
      18
    );

    // Set deadline to 20 minutes from now
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20;

    console.log("Removing liquidity...");
    console.log("Amount A Min:", ethers.utils.formatEther(amountAMin));
    console.log("Amount B Min:", ethers.utils.formatEther(amountBMin));

    // Remove liquidity
    const removeTx = await routerContract.removeLiquidity(
      tokenA,
      tokenB,
      liquidityToRemove,
      amountAMin,
      amountBMin,
      wallet.address,
      deadline,
      {
        gasLimit: 500000 // Adjust as needed
      }
    );

    console.log("Remove liquidity transaction submitted:", removeTx.hash);

    // Wait for transaction confirmation
    const receipt = await removeTx.wait();
    console.log("Remove liquidity transaction confirmed in block:", receipt.blockNumber);

    // Get updated liquidity info
    console.log("\nUpdated pool information:");
    await checkPairLiquidity(pairAddress);

    return receipt;

  } catch (error) {
    console.error("Error removing liquidity:", error);
    throw error;
  }
}

const dai = "0x337CdBAc14AB233f947DA164078774e4e99F5C2D";
const wbtc = "0x574084E6A21cD334277B79f35F98C0Aae24E0030";
// addLiquidity(dai, wbtc, 1000);
// checkPairLiquidity("0x2f05e505fD2C884F7406A737d71dea1d811BAd77");
removeLiquidity("0x2f05e505fD2C884F7406A737d71dea1d811BAd77", dai, wbtc, 100);