const { ethers } = require('ethers');
const { Pool } = require('pg');
require('dotenv').config();

// Uniswap V3 Factory address on Ethereum mainnet
const UNISWAP_V3_FACTORY = '0x1F98431c8aD98523631AE4a59f267346ea31F984';

// Factory ABI - we only need the pool creation event
const FACTORY_ABI = [
    'event PoolCreated(address indexed token0, address indexed token1, uint24 indexed fee, int24 tickSpacing, address pool)'
];

// Pool ABI - we only need the swap event
const POOL_ABI = [
    'event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)'
];

// Create PostgreSQL connection pool
const pgPool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
});

// Initialize database
async function initDatabase() {
    const client = await pgPool.connect();
    try {
        // Create pools table
        await client.query(`
            CREATE TABLE IF NOT EXISTS pools (
                address VARCHAR(42) PRIMARY KEY,
                token0_address VARCHAR(42) NOT NULL,
                token1_address VARCHAR(42) NOT NULL,
                fee INTEGER NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Create swaps table
        await client.query(`
            CREATE TABLE IF NOT EXISTS swaps (
                tx_hash VARCHAR(66) NOT NULL,
                block_number BIGINT NOT NULL,
                pool_address VARCHAR(42) NOT NULL,
                sender VARCHAR(42) NOT NULL,
                recipient VARCHAR(42) NOT NULL,
                amount0 NUMERIC NOT NULL,
                amount1 NUMERIC NOT NULL,
                sqrt_price_x96 NUMERIC NOT NULL,
                liquidity NUMERIC NOT NULL,
                tick INTEGER NOT NULL,
                price NUMERIC NOT NULL,
                timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (tx_hash, pool_address),
                FOREIGN KEY (pool_address) REFERENCES pools(address)
            )
        `);

        console.log('Database initialized successfully');
    } catch (err) {
        console.error('Error initializing database:', err);
        throw err;
    } finally {
        client.release();
    }
}

async function insertPool(poolData) {
    const { poolAddress, token0, token1, fee } = poolData;
    try {
        await pgPool.query(
            'INSERT INTO pools (address, token0_address, token1_address, fee) VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING',
            [poolAddress, token0, token1, fee]
        );
        console.log(`Pool ${poolAddress} saved to database`);
    } catch (err) {
        console.error('Error saving pool to database:', err);
    }
}

async function insertSwap(swapData) {
    const {
        txHash,
        blockNumber,
        poolAddress,
        sender,
        recipient,
        amount0,
        amount1,
        sqrtPriceX96,
        liquidity,
        tick,
        price
    } = swapData;

    try {
        await pgPool.query(
            `INSERT INTO swaps (
                tx_hash, block_number, pool_address, sender, recipient,
                amount0, amount1, sqrt_price_x96, liquidity, tick, price
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            ON CONFLICT (tx_hash, pool_address) DO NOTHING`,
            [
                txHash,
                blockNumber,
                poolAddress,
                sender,
                recipient,
                amount0,
                amount1,
                sqrtPriceX96.toString(),
                liquidity.toString(),
                tick,
                price
            ]
        );
        console.log(`Swap ${txHash} saved to database`);
    } catch (err) {
        console.error('Error saving swap to database:', err);
    }
}

async function main() {
    // Initialize database first
    await initDatabase();

    // Connect to Ethereum network
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

    // Create contract instance for the factory
    const factory = new ethers.Contract(UNISWAP_V3_FACTORY, FACTORY_ABI, provider);

    // Store pool addresses we're monitoring
    const monitoredPools = new Set();

    // Function to start monitoring a pool
    async function monitorPool(poolAddress) {
        if (monitoredPools.has(poolAddress)) return;

        console.log(`Starting to monitor pool: ${poolAddress}`);
        monitoredPools.add(poolAddress);

        const pool = new ethers.Contract(poolAddress, POOL_ABI, provider);

        pool.on('Swap', async (sender, recipient, amount0, amount1, sqrtPriceX96, liquidity, tick, event) => {
            console.log('\nNew swap detected!');

            const price = (Number(sqrtPriceX96) ** 2 / (2 ** 192)).toString();

            // Save swap to database
            await insertSwap({
                txHash: event.transactionHash,
                blockNumber: event.blockNumber,
                poolAddress,
                sender,
                recipient,
                amount0: ethers.formatUnits(amount0, 18), // Adjust decimals as needed
                amount1: ethers.formatUnits(amount1, 18), // Adjust decimals as needed
                sqrtPriceX96,
                liquidity,
                tick,
                price
            });
        });
    }

    // Listen for new pool creations
    factory.on('PoolCreated', async (token0, token1, fee, tickSpacing, poolAddress) => {
        console.log('\nNew pool created!');

        // Save pool to database
        await insertPool({
            poolAddress,
            token0,
            token1,
            fee
        });

        // Start monitoring the new pool
        await monitorPool(poolAddress);
    });

    console.log('Started monitoring Uniswap V3 swap events...');
}

// Error handling
main().catch((error) => {
    console.error('Error in main process:', error);
    process.exit(1);
});

// Handle process termination
process.on('SIGINT', async () => {
    console.log('Received SIGINT. Cleaning up...');
    await pgPool.end();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    console.log('Received SIGTERM. Cleaning up...');
    await pgPool.end();
    process.exit(0);
});