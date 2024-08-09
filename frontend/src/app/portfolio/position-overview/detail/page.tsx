"use client";
import React, { useContext, useState } from "react";
import InfoCard from "@/components/liquidity/InfoCard";
import TableCardLiquidity from "@/components/liquidity/standard/TableLiquidityV2";
import InfoCardPortfolio from "@/components/portfolio/position-overview/InfoCardPortfolio";
import { FaWallet } from "react-icons/fa";
import InputWithModal from "@/components/InputWithModal";
import InputToken from "@/components/InputToken";
import { StoreContext } from "@/stores/storePovider";
import { observer } from "mobx-react-lite";

const PositionDetailV2: React.FC = () => {
  const { priceStore } = useContext(StoreContext);
  const items = priceStore.getItems();

  const [firstSelectedItem, setFirstSelectedItem] = useState(items[0]);
  const [secondSelectedItem, setSecondSelectedItem] = useState(items[1]);
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 bg-secondary-dark-500 p-2 md:p-6 rounded-lg md:rounded-xl">
        <InfoCardPortfolio
          title="$477.53"
          description="Network Value"
          coinValue="3423 MONAD"
        />
        <InfoCardPortfolio
          title="$217.01"
          description="Fees & Interest"
          coinValue="+1523 MONAD"
        />
        <InfoCardPortfolio
          title="0.12%"
          description="APY"
          coinValue="123 MONAD"
        />
        <InfoCardPortfolio
          title="57.2% / 32.8%"
          description="My Asset Ratio"
          coinValue="123 MONAD"
        />
      </div>

      <div className="grid grid-cols-12  gap-2 md:gap-4 rounded-lg md:rounded-xl mt-2 md:mt-4">
        <div className="col-span-12 md:col-span-8 p-4 md:p-6 rounded-lg md:rounded-xl bg-secondary-dark-500">
          Performance
        </div>
        <div className="col-span-12 md:col-span-4 p-4 md:p-6 rounded-lg md:rounded-xl bg-secondary-dark-500">
          <div className="text-sm">Manage Your Position</div>
          <div className="flex justify-end items-center text-[10px] mb-1">
            <div className="flex space-x-1">
              <button className=" text-white py-0.5 px-1 rounded font-bold flex items-center">
                <FaWallet className="mr-1" /> 812.22 {firstSelectedItem.name}
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

          <div className="!bg-transparent mt-5">
            <button className="h-full w-full rounded-md text-white group bg-none bg-primary-gold-500 dark:bg-primary-gold-500 hover:bg-gradient-to-r from-[rgba(199,242,132,1))] to-[rgba(255,171,0,1)] border border-transparent dark:hover:border dark:hover:border-primary-gold-500 disabled:cursor-not-allowed ">
              <div className="py-3 md:py-3 text-md md:text-xl rounded-md bg-primary-gold-500 bg-clip-text uppercase group-disabled:bg-none group-disabled:text-opacity-25 group-disabled:text-[#CFF3FF] font-bold leading-none">
                DEPOSIT
              </div>
            </button>
          </div>

          <div className="flex flex-col space-y-2  mb-1 p-4 mt-4 bg-primary-dark-500 rounded-lg md:rounded-xl">
            <div className="flex justify-between items-center text-sm ">
              <div className="text-white p-0.5 rounded">
                Transaction Setting
              </div>
              <div className="flex space-x-1">
                <div className="font-bold flex items-center">0</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm ">
              <div className="text-white p-0.5 rounded">
                MNDE to be Deposited
              </div>
              <div className="flex space-x-1">
                <div className="font-bold flex items-center">0</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm ">
              <div className="text-white p-0.5 rounded">
                mSOL to be Deposited
              </div>
              <div className="flex space-x-1">
                <div className="font-bold flex items-center">0</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm ">
              <div className="text-white p-0.5 rounded">Deposit Value</div>
              <div className="flex space-x-1">
                <div className="font-bold flex items-center">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(PositionDetailV2);
