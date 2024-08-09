"use client";
import InputToken from "@/components/InputToken";
import { StoreContext } from "@/stores/storePovider";
import { observer } from "mobx-react-lite";
import React, { useState, useEffect, useContext } from "react";
import { FaWallet } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

const DepositV3: React.FC = () => {
  // State untuk data yang akan di-fetch
  const { priceStore } = useContext(StoreContext);
  const items = priceStore.getItems();

  const [firstSelectedItem, setFirstSelectedItem] = useState(items[0]);
  const [secondSelectedItem, setSecondSelectedItem] = useState(items[1]);
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");

  const [data, setData] = useState<any>({
    currentPrice: 0,
    priceRange: { min: 0, max: 0 },
    estimatedApr: { fees: 0, rewards: 0, total: 0 },
    liquidity: 0,
    volume24: 0,
    fees: 0,
  });

  // Simulasi fetch data
  useEffect(() => {
    // Mengambil data dummy setelah komponen dimount
    const fetchData = () => {
      // Data dummy
      setData({
        currentPrice: 233.5,
        priceRange: { min: 233.1, max: 234.2 },
        estimatedApr: { fees: 4, rewards: 1, total: 5 },
        liquidity: 123,
        volume24: 456,
        fees: 789,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto px-2 md:px-4">
      <div className="mt-8 md:mt-16 w-full z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Kolom 1 */}
          <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
            <div className="bg-secondary-dark-500 shadow-md rounded-lg p-2 md:p-6 flex flex-col">
              <div className="flex w-full justify-between">
                <div className="text-sm">Set Price Range</div>
                <div className="text-sm cursor-pointer flex gap-2 items-center">
                  <div className="flex-1">Reset</div>
                  <div className="flex">
                    <div className="flex-1 bg-highlight-dark-500/50 px-3 py-1 text-xs rounded-l">0.1</div>
                    <div className="flex-1 bg-highlight-dark-500 px-3 py-1 text-xs">0.3</div>
                    <div className="flex-1 bg-highlight-dark-500/50 px-3 py-1 text-xs">0.5</div>
                    <div className="flex-1 bg-highlight-dark-500/50 px-3 py-1 text-xs">0.8</div>
                    <div className="flex-1 bg-highlight-dark-500/50 px-3 py-1 text-xs rounded-r">1</div>
                  </div>
                </div>
              </div>
              <p className="flex bg-highlight-dark-500 rounded my-4 flex-1 min-h-[300px] justify-center items-center">
                Graph
              </p>
              <div className="flex w-full justify-between">
                <div className="text-sm">
                  Current Price = ${data.currentPrice.toFixed(2)}
                </div>
                <div className="text-sm">
                  24H Price = ${data.priceRange.min.toFixed(2)} ~ $
                  {data.priceRange.max.toFixed(2)}
                </div>
              </div>
            </div>
            <div className="bg-secondary-dark-500 shadow-md rounded-lg p-2 md:p-6">
              <div className="flex w-full justify-between">
                <div className="text-sm">Estimated APR 7D</div>
                <div className="text-sm"></div>
              </div>
              <div className="flex w-full flex-col gap-4 my-4 flex-1 text-sm">
                <div className="flex">
                  <div className="flex-1">Fees</div>
                  <div className="">{data.estimatedApr.fees}%</div>
                </div>
                <div className="flex">
                  <div className="flex-1">Rewards</div>
                  <div className="">{data.estimatedApr.rewards}%</div>
                </div>
                <div className="flex">
                  <div className="flex-1">Total</div>
                  <div className="">{data.estimatedApr.total}%</div>
                </div>
              </div>
            </div>
          </div>
          {/* Kolom 2 */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
            <div className="bg-secondary-dark-500 shadow-md rounded-lg p-2 md:p-6">
              <div className="flex w-full justify-between">
                <div className="flex-1">USDC/BTC</div>
                <div className="text-[10px] rounded-full bg-primary-gold-500/20 text-primary-gold-500 px-3 py-1 font-semibold">
                  0.01 Fee Tier
                </div>
              </div>
              <div className="flex flex-col gap-4 text-sm my-4 min-h-[100px] p-4 bg-primary-dark-500 rounded">
                <div className="flex justify-between">
                  <div className="flex-1">Liquidity</div>
                  <div className="">${data.liquidity}</div>
                </div>
                <div className="flex justify-between">
                  <div className="flex-1">Volume 24</div>
                  <div className="">${data.volume24}</div>
                </div>
                <div className="flex justify-between">
                  <div className="flex-1">Fees</div>
                  <div className="">${data.fees}</div>
                </div>
              </div>
            </div>
            <div className="bg-secondary-dark-500 shadow-md rounded-lg p-2 md:p-6 flex flex-col">
              <div className="flex w-full justify-between mb-4">
                <div className="text-sm">Deposit Amount</div>
                <div className="text-xs cursor-pointer text-primary-gold-500">
                  <FiRefreshCw />
                </div>
              </div>
              <div className="flex justify-end items-center text-[10px] mb-1">
                <div className="flex space-x-1">
                  <button className=" text-white py-0.5 px-1 rounded font-bold flex items-center">
                    <FaWallet className="mr-1" /> 812.22{" "}
                    {firstSelectedItem.name}
                  </button>
                  <button className="bg-highlight-dark-500 text-white py-0.5 px-2 rounded">
                    HALF
                  </button>
                  <button className="bg-highlight-dark-500 text-white py-0.5 px-2 rounded">
                    MAX
                  </button>
                </div>
              </div>
              <InputToken
                selectedItem={firstSelectedItem}
                inputValue={firstInputValue}
                onInputChange={setFirstInputValue}
              />
              <div className="my-2"></div>
              <InputToken
                selectedItem={secondSelectedItem}
                inputValue={secondInputValue}
                onInputChange={setSecondInputValue}
              />

              <div className="flex justify-around space-x-2  mb-1 p-4 mt-4 bg-highlight-dark-500 rounded-lg md:rounded-xl">
                <div className="flex flex-col items-center text-sm ">
                  <div className="flex space-x-1">
                    <div className="font-bold flex items-center">0</div>
                  </div>
                  <div className="text-xs text-white p-0.5 rounded">
                    Total Deposit
                  </div>
                </div>
                <div className="flex flex-col items-center text-sm ">
                  <div className="flex space-x-1">
                    <div className="font-bold flex items-center">0</div>
                  </div>
                  <div className="text-xs text-white p-0.5 rounded">USDC</div>
                </div>
                <div className="flex flex-col items-center text-sm ">
                  <div className="flex space-x-1">
                    <div className="font-bold flex items-center">0</div>
                  </div>
                  <div className="text-xs text-white p-0.5 rounded">BTC</div>
                </div>
              </div>

              <div className="!bg-transparent mt-5">
                <button className="h-full w-full rounded-md text-white group bg-none bg-primary-gold-500 dark:bg-primary-gold-500 hover:bg-gradient-to-r from-[rgba(199,242,132,1))] to-[rgba(255,171,0,1)] border border-transparent dark:hover:border dark:hover:border-primary-gold-500 disabled:cursor-not-allowed ">
                  <div className="py-1 md:py-3 text-base md:text-base rounded-md bg-primary-gold-500 bg-clip-text uppercase group-disabled:bg-none group-disabled:text-opacity-25 group-disabled:text-[#CFF3FF] font-bold leading-none">
                    Create Position
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(DepositV3);
