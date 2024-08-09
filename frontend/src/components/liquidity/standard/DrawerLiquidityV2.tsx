import React from "react";
import Drawer from "@/components/Drawer";
import Link from "next/link";
import Image from "next/image";

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

const DrawerLiquidityV2: React.FC<{
  data: LiquidityData | null;
  onClose: () => void;
}> = ({ data, onClose }) => {
  return (
    <Drawer
      isOpen={Boolean(data)}
      title="Deposit Liquidity"
      onClose={onClose}
      position="bottom"
    >
      {data ? (
        <div>
          <div className="flex items-center justify-center mb-2">
            <Image
              width={32}
              height={32}
              src={data.coins[0].image}
              alt={data.coins[0].name}
              className="w-16 h-16 -mr-2"
            />
            <Image
              width={32}
              height={32}
              src={data.coins[1].image}
              alt={data.coins[1].name}
              className="w-16 h-16"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>{data.pool}</div>
            <div className="bg-highlight-dark-500 rounded-full px-2 text-xs my-2">
              0.1%
            </div>
          </div>
          <div className="flex flex-col space-y-1 p-4 bg-primary-dark-500 mt-4 rounded-lg">
            <div className="flex justify-between">
              <div>APR: </div>
              <div>{data.apr}</div>
            </div>
            <div className="flex justify-between">
              <div>Volume: </div>
              <div>{data.volume}</div>
            </div>
            <div className="flex justify-between">
              <div>Fees: </div>
              <div>{data.fees}</div>
            </div>
            <div className="flex flex-col">
              <div>Balance: </div>
              <div className="flex flex-col space-x-1">
                {data.balance.map((bal, idx) => (
                  <div key={idx} className="flex justify-end gap-2">
                    <div className="text-right">
                      ${bal.value.toLocaleString()}
                    </div>
                    <div className="text-right font-semibold">{bal.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link
            href={`/liquidity/standard-pools/deposit?coin=${data.balance[0].name}-${data.balance[1].name}`}
            className="flex justify-center mt-4 w-full bg-primary-gold-500/20 text-primary-gold-500 px-4 py-2 rounded text-sm text-center font-semibold"
          >
            DEPOSIT
          </Link>
        </div>
      ) : (
        <div>No data available.</div>
      )}
    </Drawer>
  );
};

export default DrawerLiquidityV2;
