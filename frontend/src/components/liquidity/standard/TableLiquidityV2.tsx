"use client";
import React, { useState, useEffect } from "react";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import Link from "next/link";
import Card from "@/components/Card";
import { FiEye } from "react-icons/fi";
import Image from "next/image";
import CreateModalPoolFarm from "@/components/liquidity/farm/CreateModalFarm";
import DrawerLiquidityV2 from "./DrawerLiquidityV2";
import InfoCard from "../InfoCard";

type Coin = {
  name: string;
  image: string;
};

type Balance = {
  name: string;
  value: number;
};

type LiquidityData = {
  pool: string;
  coins: Coin[];
  apr: string;
  volume: string;
  fees: string;
  balance: Balance[];
};

const TableLiquidityV2: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState<LiquidityData | null>(null);

  const itemsPerPage = 2;
  const [data, setData] = useState<LiquidityData[]>([]);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = () => {
      setData([
        {
          pool: "MON - USDC",
          coins: [
            { name: "MON", image: "/coin/MON.svg" },
            { name: "USDC", image: "/coin/USDC.svg" },
          ],
          apr: "10%",
          volume: "$1000",
          fees: "$50",
          balance: [
            { name: "MON", value: 12331.4 },
            { name: "USDC", value: 2012131.2 },
          ],
        },
        {
          pool: "USDC - BTC",
          coins: [
            { name: "USDC", image: "/coin/USDC.svg" },
            { name: "BTC", image: "/coin/BTC.svg" },
          ],
          apr: "15%",
          volume: "$2000",
          fees: "$100",
          balance: [
            { name: "USDC", value: 15000.0 },
            { name: "BTC", value: 500.5 },
          ],
        },
        {
          pool: "BTC - MON",
          coins: [
            { name: "BTC", image: "/coin/BTC.svg" },
            { name: "MON", image: "/coin/MON.svg" },
          ],
          apr: "8%",
          volume: "$1500",
          fees: "$75",
          balance: [
            { name: "BTC", value: 1000.0 },
            { name: "MON", value: 2500.0 },
          ],
        },
      ]);
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.pool.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Calculate total values for InfoCard
  const totalTVL = data.reduce(
    (acc, item) => acc + item.balance.reduce((sum, bal) => sum + bal.value, 0),
    0
  );
  const totalVolume = data.reduce(
    (acc, item) => acc + parseFloat(item.volume.replace('$', '').replace(',', '')),
    0
  );
  const totalFees = data.reduce(
    (acc, item) => acc + parseFloat(item.fees.replace('$', '').replace(',', '')),
    0
  );
  const totalDeposits = totalVolume * 0.02; // Example calculation for deposits

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        <InfoCard title={`$${totalTVL.toLocaleString()}`} description="TVL" />
        <InfoCard title={`$${totalVolume.toLocaleString()}`} description="Volume" />
        <InfoCard title={`$${totalFees.toLocaleString()}`} description="Fees" />
        <InfoCard title={`$${totalDeposits.toFixed(2)}`} description="Deposits" />
      </div>

      <div className="flex flex-wrap">
        <Card className="w-full mt-2 md:mt-4">
          <div className="dark:text-white p-1">
            <div className="flex flex-col justify-between md:flex-row mb-4">
              <div className="flex mb-2 md:mb-0"></div>
              <div className="flex flex-col md:flex-row">
                <div>
                  <FloatingLabelInput
                    id="search"
                    label="Search Pool..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <CreateModalPoolFarm />
              </div>
            </div>
            <table className="min-w-full border-collapse dark:text-white/80">
              <thead>
                <tr className="border-y dark:border-highlight-dark-500 text-[12px] md:text-md lg:text-lg">
                  <th className="py-4 px-2 text-start">Pool</th>
                  <th className="py-4 px-2 text-center">APR</th>
                  <th className="py-4 px-2 text-center">Volume</th>
                  <th className="py-4 px-2 text-center hidden md:table-cell">
                    Fees
                  </th>
                  <th className="py-4 px-2 text-center hidden md:table-cell">
                    Pool Balance
                  </th>
                  <th className="py-4 px-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item, index) => (
                  <tr key={index} className="text-[12px] md:text-md lg:text-lg">
                    <td className="py-4 px-2 flex items-center text-center">
                      <div className="flex items-center mr-1">
                        <Image
                          width={32}
                          height={32}
                          src={item.coins[0].image}
                          alt={item.coins[0].name}
                          className="w-6 h-6 -mr-[3px] md:w-8 md:h-8 md:-mr-[4px]"
                        />
                        <Image
                          width={32}
                          height={32}
                          src={item.coins[1].image}
                          alt={item.coins[1].name}
                          className="w-6 h-6 -ml-[3px] md:w-8 md:h-8 md:-ml-[4px]"
                        />
                      </div>
                      <span className="text-nowrap">
                        {item.pool}
                        <span className="hidden md:inline text-[6px] md:text-[8px] px-2 py-1 ml-2 bg-highlight-dark-500 rounded-full">
                          0,01%
                        </span>
                      </span>
                    </td>
                    <td className="py-4 px-2 text-center">{item.apr}</td>
                    <td className="py-4 px-2 text-center">{item.volume}</td>
                    <td className="py-4 px-2 text-center hidden md:table-cell">
                      {item.fees}
                    </td>
                    <td className="py-4 px-2 text-center hidden md:table-cell">
                      {item.balance.map((bal, idx) => (
                        <div
                          key={idx}
                          className="flex flex-wrap -space-x-12 items-center"
                        >
                          <span className="text-right flex-1 ">
                            ${bal.value.toLocaleString()}
                          </span>
                          <span className="text-right flex-1 font-semibold">
                            {bal.name}
                          </span>
                        </div>
                      ))}
                    </td>
                    <td className="py-4 px-2 text-center">
                      <Link
                        href={`/liquidity/standard-pools/deposit?coin=${item.balance[0].name}-${item.balance[1].name}`}
                        className="hidden md:inline bg-primary-gold-500/20 text-primary-gold-500 px-4 py-1 md:px-12 md:py-2 rounded text-xs font-semibold"
                      >
                        <span>DEPOSIT</span>
                      </Link>
                      <span className="inline md:hidden">
                        <button
                          className="bg-primary-gold-500/20 text-primary-gold-500 p-2 px-4 rounded"
                          onClick={() => setSelectedRow(item)}
                        >
                          <FiEye />
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between md:justify-center items-center mt-4">
              <button
                onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
                disabled={currentPage === 1}
                className="bg-gray-200 text-gray-800 dark:bg-highlight-dark-500/50 dark:text-white text-xs md:text-sm w-[60px] md:w-[120px] text-center py-2 md:py-2 md:px-4 rounded"
              >
                Previous
              </button>
              <span className="text-[12px] md:text-md lg:text-lg p-2">
                {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-gray-200 text-gray-800 dark:bg-highlight-dark-500/50 dark:text-white text-xs md:text-sm w-[60px] md:w-[120px] text-center py-2 md:py-2 md:px-4 rounded"
              >
                Next
              </button>
            </div>
          </div>
        </Card>
      </div>

      {selectedRow && (
        <DrawerLiquidityV2
          data={selectedRow}
          onClose={() => setSelectedRow(null)}
        />
      )}
    </>
  );
};

export default TableLiquidityV2;
