"use client";
import React, { useState, useEffect } from "react";
import TableStandardPools from "./TableStandardPools";
import TableConcentratedPools from "./TableConcentratedPools";

interface Asset {
  name: string;
  image: string;
  amount: number;
}

interface PositionData {
  position: string;
  assets: Asset[];
  totalValue: string;
  feesAPY: string;
  totalFees: string;
  pnl: string;
  action: string;
  category: string;
}

const TableCardPortfolio: React.FC = () => {
  const [data, setData] = useState<PositionData[]>([]);
  const [selectedRow, setSelectedRow] = useState<PositionData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("standard-pools");

  useEffect(() => {
    // Simulate data fetching
    const fetchData = () => {
      setData([
        {
          position: "1",
          assets: [
            { name: "MON", image: "/coin/MON.svg", amount: 2200 },
            { name: "USDC", image: "/coin/USDC.svg", amount: 1230 },
          ],
          totalValue: "$5000",
          feesAPY: "10%",
          totalFees: "$50",
          pnl: "0.01%",
          action: "/liquidity/standard-pools/deposit",
          category: "standard-pools",
        },
        {
          position: "2",
          assets: [
            { name: "USDC", image: "/coin/USDC.svg", amount: 1800 },
            { name: "MON", image: "/coin/MON.svg", amount: 980 },
          ],
          totalValue: "$10000",
          feesAPY: "15%",
          totalFees: "$100",
          pnl: "0.01%",
          action: "/liquidity/standard-pools/deposit",
          category: "concentrated-pools",
        },
        {
          position: "3",
          assets: [
            { name: "BTC", image: "/coin/BTC.svg", amount: 1500 },
            { name: "ETH", image: "/coin/ETH.svg", amount: 750 },
          ],
          totalValue: "$7500",
          feesAPY: "8%",
          totalFees: "$75",
          pnl: "0.01%",
          action: "/liquidity/standard-pools/deposit",
          category: "standard-pools",
        },
        {
          position: "4",
          assets: [
            { name: "BTC", image: "/coin/BTC.svg", amount: 1500 },
            { name: "ETH", image: "/coin/ETH.svg", amount: 750 },
          ],
          totalValue: "$2500",
          feesAPY: "4%",
          totalFees: "$75",
          pnl: "0.02%",
          action: "/liquidity/standard-pools/deposit",
          category: "concentrated-pools",
        },
      ]);
    };

    fetchData();
  }, []);

  const filteredData = data.filter(item => item.category === selectedCategory);

  // Calculate totals
  const totalPositions = filteredData.reduce((acc, item) => acc + parseFloat(item.totalValue.replace('$', '').replace(',', '')), 0).toFixed(2);
  const pnl = filteredData.reduce((acc, item) => acc + parseFloat(item.pnl.replace('$', '').replace(',', '')), 0).toFixed(2);
  const totalFees = filteredData.reduce((acc, item) => acc + parseFloat(item.totalFees.replace('$', '').replace(',', '')), 0).toFixed(2);

  return (
    <div className="w-full mt-2 md:mt-4">
      <div className="dark:text-white">
        <div className="flex flex-col justify-between md:flex-row mb-4 p-2">
          <div className="flex mb-2 md:mb-0 w-full md:w-auto">
            <button
              className={`px-4 py-2 text-[10px] md:text-sm rounded-l w-full md:w-auto ${
                selectedCategory === "standard-pools"
                  ? "bg-highlight-dark-500 text-white"
                  : "bg-gray-200 text-gray-800 dark:bg-highlight-dark-500/50 dark:text-white"
              }`}
              onClick={() => setSelectedCategory("standard-pools")}
            >
              Standard Pools
            </button>
            <button
              className={`px-4 py-2 text-[10px] md:text-sm w-full md:w-auto ${
                selectedCategory === "concentrated-pools"
                  ? "bg-highlight-dark-500 text-white"
                  : "bg-gray-200 text-gray-800 dark:bg-highlight-dark-500/50 dark:text-white"
              }`}
              onClick={() => setSelectedCategory("concentrated-pools")}
            >
              Concentrated Pools
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center md:ml-auto">
            <div className="text-[10px] md:text-lg text-white">
              Total Positions{" "}
              <span className="font-bold">${totalPositions}</span> | PnL{" "}
              <span className="font-bold">${pnl}</span> | Total Fees{" "}
              <span className="font-bold text-green-500">${totalFees}</span>
            </div>
          </div>
        </div>
        {selectedCategory === "standard-pools" && (
          <TableStandardPools
            data={filteredData}
            setSelectedRow={setSelectedRow}
          />
        )}
        {selectedCategory === "concentrated-pools" && (
          <TableConcentratedPools
            data={filteredData}
            setSelectedRow={setSelectedRow}
          />
        )}
      </div>

      {/* <DrawerPortfolio
        data={selectedRow}
        onClose={() => setSelectedRow(null)}
      /> */}
    </div>
  );
};

export default TableCardPortfolio;
