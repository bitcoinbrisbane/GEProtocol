// components/portfolio/DrawerPortfolio.tsx

import React from "react";
import Drawer from "@/components/Drawer";
import Link from "next/link";
import Image from "next/image";

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

const DrawerPortfolio: React.FC<{
  data: PositionData | null;
  onClose: () => void;
}> = ({ data, onClose }) => {
  return (
    <Drawer
      isOpen={Boolean(data)}
      title="Position Details"
      onClose={onClose}
      position="bottom"
    >
      {data ? (
        <div>
          <div className="flex flex-col bg-primary-dark-500 p-4 rounded-lg ">
            <p className="flex justify-between">
              <strong>Position:</strong>
              <div className="flex items-center ">
                <Image
                  width={32}
                  height={32}
                  src={data.assets[0].image}
                  alt={data.assets[0].name}
                  className="w-4 h-4 mr-1"
                />
                {data.assets[0].name}
                <Image
                  width={32}
                  height={32}
                  src={data.assets[1].image}
                  alt={data.assets[1].name}
                  className="w-4 h-4 mx-1"
                />
                {data.assets[1].name}
              </div>
            </p>
          </div>
          <div className="flex flex-col space-y-2 bg-primary-dark-500 p-4 rounded-lg mt-4">
            <p className="flex justify-between">
              Total Value: <div> {data.totalValue}</div>
            </p>
            <p className="flex justify-between">
              Fees APY: <div> {data.feesAPY}</div>
            </p>
            <p className="flex justify-between">
              Total Fees: <div> {data.totalFees}</div>
            </p>
            <p className="flex justify-between">
              PnL: <div> {data.pnl}</div>
            </p>
          </div>
          <div className="flex flex-col space-y-2 bg-primary-dark-500 p-4 rounded-lg mt-4">
            <strong>Assets:</strong>
            <ul className="">
              {data.assets.map((asset, index) => (
                <li key={index} className="flex items-center">
                  <Image
                    width={32}
                    height={32}
                    src={asset.image}
                    alt={asset.name}
                    className="w-4 h-4 mr-2"
                  />
                  {asset.name} : {asset.amount}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={"/portfolio/position-overview/detail"}
            className="flex w-full justify-center mt-4 bg-primary-gold-500/20 text-primary-gold-500 px-12 py-2 rounded text-xs font-semibold"
          >
            DETAIL
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Drawer>
  );
};

export default DrawerPortfolio;
