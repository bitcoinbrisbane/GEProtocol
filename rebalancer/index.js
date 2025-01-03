const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const port = process.env.API_PORT || 8080;

// Create PostgreSQL connection pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
});

// GET /events - Retrieve last 50 swap events
app.get("/events", async (req, res) => {
    try {
        const query = `
            SELECT 
                s.tx_hash,
                s.block_number,
                s.pool_address,
                p.token0_address,
                p.token1_address,
                s.sender,
                s.recipient,
                s.amount0,
                s.amount1,
                s.price,
                s.tick,
                s.timestamp
            FROM swaps s
            JOIN pools p ON s.pool_address = p.address
            ORDER BY s.timestamp DESC
            LIMIT 50
        `;
        
        const result = await pool.query(query);
        res.json({
            success: true,
            count: result.rows.length,
            events: result.rows
        });
    } catch (err) {
        console.error("Error fetching events:", err);
        res.status(500).json({
            success: false,
            error: "Internal Server Error",
            message: err.message
        });
    }
});

// GET /events/:poolAddress - Retrieve last 50 swap events for a specific pool
app.get("/events/:poolAddress", async (req, res) => {
    try {
        const { poolAddress } = req.params;
        
        const query = `
            SELECT 
                s.tx_hash,
                s.block_number,
                s.pool_address,
                p.token0_address,
                p.token1_address,
                s.sender,
                s.recipient,
                s.amount0,
                s.amount1,
                s.price,
                s.tick,
                s.timestamp
            FROM swaps s
            JOIN pools p ON s.pool_address = p.address
            WHERE s.pool_address = $1
            ORDER BY s.timestamp DESC
            LIMIT 50
        `;
        
        const result = await pool.query(query, [poolAddress]);
        res.json({
            success: true,
            count: result.rows.length,
            events: result.rows
        });
    } catch (err) {
        console.error("Error fetching events for pool:", err);
        res.status(500).json({
            success: false,
            error: "Internal Server Error",
            message: err.message
        });
    }
});

// GET /pools - Retrieve all monitored pools
app.get("/pools", async (req, res) => {
    try {
        const query = `
            SELECT 
                p.*,
                COUNT(s.tx_hash) as swap_count
            FROM pools p
            LEFT JOIN swaps s ON p.address = s.pool_address
            GROUP BY p.address, p.token0_address, p.token1_address, p.fee, p.created_at
            ORDER BY p.created_at DESC
        `;
        
        const result = await pool.query(query);
        res.json({
            success: true,
            count: result.rows.length,
            pools: result.rows
        });
    } catch (err) {
        console.error("Error fetching pools:", err);
        res.status(500).json({
            success: false,
            error: "Internal Server Error",
            message: err.message
        });
    }
});

// Start server
app.listen(port, () => {
    console.log(`API server running on port ${port}`);
});

// Handle cleanup on shutdown
process.on("SIGINT", async () => {
    await pool.end();
    process.exit(0);
});

process.on("SIGTERM", async () => {
    await pool.end();
    process.exit(0);
});