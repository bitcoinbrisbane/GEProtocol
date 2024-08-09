"use client";
import React, { useState } from "react";
import Link from "next/link";
import Card from "../../Card";
import { FiEdit } from "react-icons/fi";
import Drawer from "../../Drawer";
import DrawerPortfolio from "./DrawerPortfolio";
import Image from "next/image";

interface Asset {
  name: string;
  image: string;
  amount: number;
}

interface FarmData {
  pairsToken: Asset[];
  tvl: string;
  apr: string;
  weeklyRewards: string;
  period: string;
  unemittedRewards: string;
  action: string;
}

const TableCreatedFarm: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState<FarmData | null>(null);

  const data: FarmData[] = [
    {
      pairsToken: [
        { name: "MON", image: "/coin/MON.svg", amount: 2200 },
        { name: "USDC", image: "/coin/USDC.svg", amount: 1230 },
      ],
      tvl: "$5000",
      apr: "10%",
      weeklyRewards: "$50",
      period: "30 days",
      unemittedRewards: "$25",
      action: "/liquidity/standard-pools/deposit",
    },
    {
      pairsToken: [
        { name: "USDC", image: "/coin/USDC.svg", amount: 1800 },
        { name: "MON", image: "/coin/MON.svg", amount: 980 },
      ],
      tvl: "$10000",
      apr: "15%",
      weeklyRewards: "$100",
      period: "30 days",
      unemittedRewards: "$50",
      action: "/liquidity/standard-pools/deposit",
    },
    {
      pairsToken: [
        { name: "BTC", image: "/coin/BTC.svg", amount: 1500 },
        { name: "ETH", image: "/coin/ETH.svg", amount: 750 },
      ],
      tvl: "$7500",
      apr: "8%",
      weeklyRewards: "$75",
      period: "30 days",
      unemittedRewards: "$30",
      action: "/liquidity/standard-pools/deposit",
    },
  ];

  return (
    <Card className="w-full mt-2 md:mt-4">
      <div className="dark:text-white p-1">
        <table className="min-w-full border-collapse dark:text-white/80">
          <thead>
            <tr className="border-y dark:border-highlight-dark-500 text-[12px] md:text-md lg:text-lg">
              <th className="py-4 px-2 text-start">Pairs Token</th>
              <th className="py-4 px-2 text-center">TVL</th>
              <th className="py-4 px-2 text-center">APR</th>
              <th className="py-4 px-2 text-center hidden md:table-cell">
                Weekly Rewards
              </th>
              <th className="py-4 px-2 text-center hidden md:table-cell">
                Period
              </th>
              <th className="py-4 px-2 text-center hidden md:table-cell">
                Unemitted Rewards
              </th>
              <th className="py-4 px-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="text-[12px] md:text-md lg:text-lg">
                <td className="py-4 px-2 flex items-center text-center">
                  <div className="flex items-center mr-1">
                    <Image
                      width={32}
                      height={32}
                      src={item.pairsToken[0].image}
                      alt={item.pairsToken[0].name}
                      className="w-6 h-6 -mr-[3px] md:w-8 md:h-8 md:-mr-[4px]"
                    />
                    <Image
                      width={32}
                      height={32}
                      src={item.pairsToken[1].image}
                      alt={item.pairsToken[1].name}
                      className="w-6 h-6 -ml-[3px] md:w-8 md:h-8 md:-ml-[4px]"
                    />
                    {item.pairsToken[0].name} - {item.pairsToken[1].name}
                  </div>
                </td>
                <td className="py-4 px-2 text-center">{item.tvl}</td>
                <td className="py-4 px-2 text-center">{item.apr}</td>
                <td className="py-4 px-2 text-center hidden md:table-cell">
                  {item.weeklyRewards}
                </td>
                <td className="py-4 px-2 text-center hidden md:table-cell">
                  {item.period}
                </td>
                <td className="py-4 px-2 text-center hidden md:table-cell">
                  {item.unemittedRewards}
                </td>
                <td className="py-4 px-2 text-center">
                  <button
                    onClick={() => setSelectedRow(item)}
                    className="inline md:hidden bg-primary-gold-500/20 text-primary-gold-500 px-4 py-2 rounded text-xs font-semibold"
                  >
                    <FiEdit />
                  </button>
                  <Link
                    href={item.action}
                    className="hidden md:inline bg-primary-gold-500/20 text-primary-gold-500 px-12 py-2 rounded text-xs font-semibold"
                  >
                    Edit Farms
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <DrawerPortfolio
        data={selectedRow}
        onClose={() => setSelectedRow(null)}
      /> */}
    </Card>
  );
};

export default TableCreatedFarm;
