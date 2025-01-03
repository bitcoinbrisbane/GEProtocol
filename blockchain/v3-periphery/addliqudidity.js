const { ethers } = require("ethers");

const dotenv = require("dotenv");
dotenv.config();

//  USDC - ETH POOL UNISWAP V3 EXAMPLE
// Configuration
const RPC_URL = process.env.HTTPS_PROVIDER;
const UNISWAP_POOL_ADDRESS = "0xB7fD55f421908eb5b8F955d474B71fd95F2d6169"; // "0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640";
const TOKEN_0_DECIMALS = 6; // USDC DECIMALS
const TOKEN_1_DECIMALS = 18; // ETH DECIMALS
const TOKEN_0_AMOUNT = ethers.parseUnits("1", TOKEN_0_DECIMALS);  // Amount of USDC to add

// PUT PRICE RANGE HERE MIN AND MAX PRICE
const MIN_PRICE = 0.0003;
const MAX_PRICE = 0.0004;

// Tick spacing for the Uniswap V3 pool (modify based on fee tier)
const TICK_SPACING = 10; // Adjust based on your pool's fee tier

// Provider and wallet setup
const provider = new ethers.JsonRpcProvider(RPC_URL);

// Uniswap Pool Contract ABI and setup
const uniswapPoolAbi = [
    "function slot0() view returns (uint160 sqrtPriceX96, int24 tick, uint16 observationIndex, uint16 observationCardinality, uint16 observationCardinalityNext, uint8 feeProtocol, bool unlocked)",
    "function mint(address recipient, int24 tickLower, int24 tickUpper, uint128 amount, bytes calldata data) external returns (uint256 amount0, uint256 amount1)"
];

// Calculate current price (Token0 in terms of Token1) using BigInt
async function getCurrentPrice(sqrtPriceX96) {
    const Q96 = 2 ** 96
    const price = (sqrtPriceX96 / Q96) ** 2

    return price;
}

function priceToSqrtPriceX96(price) {
    const priceWithDecimals = price * (10 ** TOKEN_1_DECIMALS) / (10 ** TOKEN_0_DECIMALS);
    return Math.sqrt(priceWithDecimals) * (2 ** 96)
}

function sqrtPriceToTick(sqrtPriceX96) {
    const eq = sqrtPriceX96 / (2 ** 96);
    const result = 2 * Math.log(eq) / Math.log(1.0001);
    return Math.floor(result / TICK_SPACING) * TICK_SPACING;
}

function getLiquidityFromAmount0(sqrtPriceX96Min, sqrtPriceX96Max, amount0) {
    const intermediate = (sqrtPriceX96Min * sqrtPriceX96Max) / (2 ** 96);
    return Math.floor(amount0 * (intermediate / (sqrtPriceX96Max - sqrtPriceX96Min)));
}

function getLiquidityFromSingleAmount0(sqrtPriceX96, sqrtPriceX96Min, sqrtPriceX96Max, amount0) {
    if (sqrtPriceX96 <= sqrtPriceX96Min) {
        return getLiquidityFromAmount0(sqrtPriceX96Min, sqrtPriceX96Max, amount0);
    } else if (sqrtPriceX96 < sqrtPriceX96Max) {
        return getLiquidityFromAmount0(sqrtPriceX96, sqrtPriceX96Max, amount0);
    }

    return 0;
}

function getSqrtPriceAtTick(tick) {
    const exp = (1.0001 ** tick) * (2 ** 96) * (2 ** 96);
    return Math.sqrt(exp);
}

function getAmount0(sqrtPriceA, sqrtPriceB, liquidity) {
    const sqrtPa = sqrtPriceA / (2 ** 96);
    const sqrtPb = sqrtPriceB / (2 ** 96);
    return liquidity * ((1 / sqrtPa) - (1 / sqrtPb));
}

function getAmount1(sqrtPriceA, sqrtPriceB, liquidity) {
    const sqrtPa = sqrtPriceA / (2 ** 96);
    const sqrtPb = sqrtPriceB / (2 ** 96);
    return liquidity * (sqrtPb - sqrtPa);
}

function getLiquidityDelta(tick, tickLower, tickUpper, sqrtPriceX96, sqrtPriceMin, sqrtPriceMax, liquidity) {
    let amount0 = 0;
    let amount1 = 0;

    if (tick < tickLower) {
        amount0 = getAmount0(sqrtPriceMin, sqrtPriceMax, liquidity);
    } else if (tick < tickUpper) {
        amount0 = getAmount0(sqrtPriceX96, sqrtPriceMax, liquidity);
        amount1 = getAmount1(sqrtPriceMin, sqrtPriceX96, liquidity);
    } else {
        amount1 = getAmount1(sqrtPriceMin, sqrtPriceMax, liquidity);
    }
    return [amount0, amount1];
}

async function addLiquidityWithCalculatedAmounts() {
    const poolContract = new ethers.Contract(UNISWAP_POOL_ADDRESS, uniswapPoolAbi, provider);
    const [sqrtPriceX96, currentTick] = await poolContract.slot0();
    console.log("Current Tick", currentTick);
    console.log("Current sqrtPriceX96", (sqrtPriceX96));

    // Get and print the current price
    const currentPrice = await getCurrentPrice(Number(sqrtPriceX96));
    console.log("Current Price 1 USDC = ", currentPrice * (10 ** TOKEN_0_DECIMALS) / (10 ** TOKEN_1_DECIMALS), "ETH");

    // Define lower and upper sqrt ratios
    const sqrtRatioAX64 = priceToSqrtPriceX96(MIN_PRICE);
    const sqrtRatioBX64 = priceToSqrtPriceX96(MAX_PRICE);

    console.log("SQRT PRICE FOR ", MIN_PRICE, " IS ", BigInt(sqrtRatioAX64));
    console.log("SQRT PRICE FOR ", MAX_PRICE, " IS ", BigInt(sqrtRatioBX64));

    // // Calculate nearest usable ticks based on tick spacing
    const tickLower = sqrtPriceToTick(sqrtRatioAX64);
    const tickUpper = sqrtPriceToTick(sqrtRatioBX64);
    console.log("Tick Lower: (parameter)", tickLower);
    console.log("Tick Upper: (parameter)", tickUpper);

    let liquidity = getLiquidityFromSingleAmount0(Number(sqrtPriceX96), sqrtRatioAX64, sqrtRatioBX64, Number(TOKEN_0_AMOUNT));
    console.log("Liquidity: (parameter)", liquidity);

    let sqrtPriceMin = getSqrtPriceAtTick(tickLower);
    let sqrtPriceMax = getSqrtPriceAtTick(tickUpper);

    console.log("SQRT PRICE FOR MIN TICK", BigInt(sqrtPriceMin));
    console.log("SQRT PRICE FOR MAX TICK", BigInt(sqrtPriceMax));

    let liquidityDelta = getLiquidityDelta(currentTick, tickLower, tickUpper, Number(sqrtPriceX96), sqrtPriceMin, sqrtPriceMax, liquidity);
    console.log("AMOUNT OF token 0 YOU WILL ADD : ", ethers.formatUnits(Math.floor(liquidityDelta[0]), TOKEN_0_DECIMALS));
    console.log("AMOUNT OF token 1 WILL ADD :", ethers.formatUnits(Math.floor(liquidityDelta[1]), TOKEN_1_DECIMALS));
}

addLiquidityWithCalculatedAmounts().catch(console.error);