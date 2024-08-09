// components/DepositV2.tsx
"use client";
import React, { useContext, useState } from "react";
import InputWithModal from "@/components/InputWithModal";
import PlusButton from "@/components/PlusButton";
import { FaWallet } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import SelectPair from "@/components/SelectPair";
import InputPair from "@/components/InputPair";
import { Item } from "@/static/interface";
import { StoreContext } from "@/stores/storePovider";
import { observer } from "mobx-react-lite";

type Tab = "Tab1" | "Tab2";



const DepositV2: React.FC = () => {
  const { priceStore } = useContext(StoreContext);
  const items = priceStore.getItems();

  const [activeTab, setActiveTab] = useState<Tab>("Tab1");
  const [firstSelectedItem, setFirstSelectedItem] = useState(items[0]);
  const [secondSelectedItem, setSecondSelectedItem] = useState(items[1]);
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");

  const [percentage, setPercentage] = useState(0);

  const handleButtonClick = (value: number) => {
    setPercentage(value);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPercentage(Number(event.target.value));
  };

  // POOL
  const [selectedPair, setSelectedPair] = useState<Item[]>([]);
  const [poolValue, setPoolValue] = useState<string>("");

  const handleSelectToken = (token: Item, index: number) => {
    const newSelectedPair = [...selectedPair];
    newSelectedPair[index] = token;
    setSelectedPair(newSelectedPair);
  };

  const handlePoolValueChange = (value: string) => {
    setPoolValue(value);
  };

  const handleSwap = () => {
    setFirstSelectedItem(secondSelectedItem);
    setSecondSelectedItem(firstSelectedItem);
    setFirstInputValue(secondInputValue);
    setSecondInputValue(firstInputValue);
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="shadow-md rounded-lg md:rounded-xl w-full max-w-lg">
      <div className="flex w-full text-md md:text-lg">
        <button
          className={`w-full py-3 px-4 rounded-tl-lg md:rounded-tl-xl focus:outline-none ${
            activeTab === "Tab1"
              ? "bg-secondary-dark-500 text-white"
              : "bg-secondary-dark-200 dark:bg-highlight-dark-500 text-secondary-dark-700 dark:text-gray-300"
          }`}
          onClick={() => handleTabChange("Tab1")}
        >
          Add Liquidity
        </button>
        <button
          className={`w-full py-3 px-4 rounded-tr-lg md:rounded-tr-xl focus:outline-none ${
            activeTab === "Tab2"
              ? "bg-secondary-dark-500 text-white"
              : "bg-secondary-dark-200 dark:bg-highlight-dark-500 text-secondary-dark-700 dark:text-gray-300"
          }`}
          onClick={() => handleTabChange("Tab2")}
        >
          Stake Liquidity
        </button>
      </div>
      <div className="bg-white dark:bg-secondary-dark-500 shadow-md rounded-b-lg py-4 px-6 md:p-10 md:pt-6 ">
        {activeTab === "Tab1" && (
          <div className="flex-col relative">
            <div className="flex mb-4">
              <div className="flex flex-1"></div>
              <div className="flex flex-1 justify-end items-center">
                <div className="py-1 px-2 mr-2 text-[12px] rounded-full bg-primary-gold-500/20 text-primary-gold-500 uppercase font-bold">
                  <span>0.1% SLIPPAGE</span>
                </div>
                <FiSettings className="text-lg" />
              </div>
            </div>
            <span className="flex my-5 text-[10px] md:text-xs bg-primary-gold-500/20 text-primary-gold-500 p-4 rounded-lg">
              Tip: When you add liquidity, you will receive pool tokens
              representing your position. These tokens automatically earn fees
              proportional to your share of the pool, and can be redeemed at any
              time.
            </span>

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
            <InputWithModal
              items={items}
              selectedItem={firstSelectedItem}
              inputValue={firstInputValue}
              onSelectItem={setFirstSelectedItem}
              onInputChange={setFirstInputValue}
            />
            <PlusButton onSwap={handleSwap} />

            <div className="flex justify-end items-center text-[10px] mb-1 -mt-4">
              <div className="flex space-x-1">
                <button className=" text-white py-0.5 px-1 rounded font-bold flex items-center">
                  <FaWallet className="mr-1" /> 812.22 {firstSelectedItem.name}
                </button>
              </div>
            </div>
            <InputWithModal
              items={items}
              selectedItem={secondSelectedItem}
              inputValue={secondInputValue}
              onSelectItem={setSecondSelectedItem}
              onInputChange={setSecondInputValue}
            />

            <span className="flex my-5 bg-highlight-dark-500 text-white p-4 rounded-lg">
              <div className="flex flex-1 items-center justify-center text-sm">
                <div className="flex-col text-center">
                  1.523
                  <div className="text-[10px]">USDC Per MON</div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="flex-col text-center">
                  0.422
                  <div className="text-[10px]">MON Per USDC</div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="flex-col text-center ">
                  0.34%
                  <div className="text-[10px]">Share Of Pool</div>
                </div>
              </div>
            </span>

            <div className="!bg-transparent mt-5">
              <button className="h-full w-full rounded-md text-white group bg-none bg-primary-gold-500 dark:bg-primary-gold-500 hover:bg-gradient-to-r from-[rgba(199,242,132,1))] to-[rgba(255,171,0,1)] border border-transparent dark:hover:border dark:hover:border-primary-gold-500 disabled:cursor-not-allowed ">
                <div className="py-3 md:py-5 text-md md:text-xl rounded-md bg-primary-gold-500 bg-clip-text uppercase group-disabled:bg-none group-disabled:text-opacity-25 group-disabled:text-[#CFF3FF] font-bold leading-none">
                  <span>+ ADD LIQUIDITY</span>
                </div>
              </button>
            </div>
          </div>
        )}
        {activeTab === "Tab2" && (
          <div className="flex-col relative">
            <div className="flex mb-4">
              <div className="flex flex-1"></div>
              <div className="flex flex-1 justify-end items-center">
                <div className="py-1 px-2 mr-2 text-[12px] rounded-full bg-primary-gold-500/20 text-primary-gold-500 uppercase font-bold">
                  <span>0.1% SLIPPAGE</span>
                </div>
                <FiSettings className="text-lg" />
              </div>
            </div>
            <span className="flex my-5 text-[10px] md:text-xs bg-primary-gold-500/20 text-primary-gold-500 p-4 rounded-lg">
              Tip: When you add liquidity, you will receive pool tokens
              representing your position. These tokens automatically earn fees
              proportional to your share of the pool, and can be redeemed at any
              time.
            </span>

            <SelectPair
              items={items}
              selectedItems={selectedPair}
              onSelectItem={handleSelectToken}
            />
            <PlusButton onSwap={handleSwap} />

            <InputPair
              items={items}
              selectedItems={selectedPair}
              inputValue={poolValue}
              onSelectItem={handleSelectToken}
              onInputChange={handlePoolValueChange}
            />

            <div className="flex justify-between items-center mb-4 mt-6">
              <div className=" text-xs">
                Amount <span className="font-semibold text-base">
                  {percentage}%
                  </span>
              </div>
              <div className="flex space-x-2">
                {[25, 50, 75, 100].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleButtonClick(value)}
                    className="px-2 py-1 text-xs font-semibold rounded-md bg-gray-200 dark:bg-highlight-dark-500 hover:bg-gray-300 dark:hover:bg-highlight-dark-500/80"
                  >
                    {value}%
                  </button>
                ))}
              </div>
            </div>
            <div>
              <input
                type="range"
                min="0"
                max="100"
                value={percentage}
                onChange={handleSliderChange}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-primary-gold-700 accent-primary-gold-500"
                style={{ accentColor: '#FFAB00' }} // Replace with your desired color
              />
            </div>

            <div className="!bg-transparent mt-5">
              <button className="h-full w-full rounded-md text-white group bg-none bg-primary-gold-500 dark:bg-primary-gold-500 hover:bg-gradient-to-r from-[rgba(199,242,132,1))] to-[rgba(255,171,0,1)] border border-transparent dark:hover:border dark:hover:border-primary-gold-500 disabled:cursor-not-allowed ">
                <div className="py-3 md:py-5 text-md md:text-xl rounded-md bg-primary-gold-500 bg-clip-text uppercase group-disabled:bg-none group-disabled:text-opacity-25 group-disabled:text-[#CFF3FF] font-bold leading-none">
                  <span>+ STAKE LIQUIDITY</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default observer(DepositV2);;
