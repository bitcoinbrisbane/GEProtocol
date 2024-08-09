// components/CreateLiquidityV2.tsx

"use client";
import React, { useContext, useState } from "react";
import InputWithModal from "../../InputWithModal";
import PlusButton from "../../PlusButton";
import { FiInfo, FiSettings } from "react-icons/fi";
import { Item } from "@/static/interface";
import InputPair from "../../InputPair";
import { StoreContext } from "@/stores/storePovider";
import { observer } from "mobx-react-lite";

const CreateLiquidityV2: React.FC = () => {

  const { priceStore } = useContext(StoreContext);
  const items = priceStore.getItems();


  const [firstSelectedItem, setFirstSelectedItem] = useState(items[0]);
  const [secondSelectedItem, setSecondSelectedItem] = useState(items[1]);
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");
  const [customTime, setCustomTime] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toISOString().slice(0, 16));
  const [feeTier, setfeeTier] = useState(1);

  const selectedItems = [firstSelectedItem, secondSelectedItem];

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

  const handleFeeTierClick = (percent: number) => {
    setfeeTier(percent);
    // Additional logic if needed
  };

  const handleStartNowClick = () => {
    setCustomTime(false);
    setCurrentDateTime(new Date().toISOString().slice(0, 16));
  };

  const handleCustomTimeClick = () => {
    setCustomTime(true);
  };

  return (
    <div className="shadow-md rounded-lg md:rounded-xl w-full max-w-lg">
      <div className="bg-white dark:bg-secondary-dark-500 shadow-md rounded-lg md:rounded-xl py-4 px-6 md:p-10 md:pt-6 ">
        <div className="flex-col relative">
          <div className="flex mb-4">
            <div className="flex flex-1">Initialize Liquidity</div>
            <div className="flex flex-1 justify-end items-center">
              <div className="py-1 px-2 mr-2 text-[10px] rounded-full bg-primary-gold-500/20 text-primary-gold-500 uppercase font-bold">
                <span>0.1% SLIPPAGE</span>
              </div>
              <FiSettings className="text-lg" />
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
          <InputWithModal
            items={items}
            selectedItem={secondSelectedItem}
            inputValue={secondInputValue}
            onSelectItem={setSecondSelectedItem}
            onInputChange={setSecondInputValue}
          />
        </div>
        {/* FEE TIER */}
        <div className="flex justify-between items-center mt-2 pt-2">
          {/* Left column for selected percentage text */}
          <div className="flex items-center text-left text-white">
            <div className="text-[10px] mr-2">Fee Tier :</div>
            <div className="font-bold">{feeTier}%</div>
          </div>
          {/* Right column for 5 buttons */}
          <div className="flex space-x-2">
            {[0.1, 0.3, 0.5, 0.8, 1].map((value) => (
              <button
                key={value}
                className="px-1 py-1 text-[10px] bg-highlight-dark-500 text-white rounded hover:bg-highlight-dark-500/80"
                onClick={() => handleFeeTierClick(value)}
              >
                {value}%
              </button>
            ))}
          </div>
        </div>

        {/* CUSTOM TIME */}
        <div className="flex justify-between my-4 text-sm">
          <button
            className={`px-3 py-1 md:py-2 text-xs md:text-base w-full rounded-l-sm md:rounded-l-lg ${
              !customTime
                ? "bg-highlight-dark-500 text-white"
                : "bg-highlight-dark-500/50"
            }`}
            onClick={handleStartNowClick}
          >
            START NOW
          </button>
          <button
            className={`px-3 py-1 md:py-2 text-xs md:text-base w-full rounded-r-sm md:rounded-r-lg ${
              customTime
                ? "bg-highlight-dark-500 text-white"
                : "bg-highlight-dark-500/50"
            }`}
            onClick={handleCustomTimeClick}
          >
            CUSTOM TIME
          </button>
        </div>
        {customTime && (
          <div className="flex items-center space-x-2">
            <input
              type="datetime-local"
              className="py-0 px-1 h-[42px] md:p-1.5 md:h-[54px] border-[1px] border-primary-light-500/20 focus-within:border-primary-gold-500  bg-primary-dark-500 rounded w-full text-white"
              value={currentDateTime}
              onChange={(e) => setCurrentDateTime(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-secondary-dark-500 shadow-md rounded-lg md:rounded-xl py-4 px-6 mt-4 md:p-10 md:mt-6 ">
        <div className="flex mb-2">
          <div className="flex-1">Initial Price</div>
          <div className="flex flex-1 justify-end">
            <span className="text-[12px]  bg-highlight-dark-500/50 rounded-full p-2">
              <FiInfo className="text-white" />
            </span>
          </div>
        </div>

        <InputPair
          items={items}
          selectedItems={selectedItems}
          inputValue={poolValue}
          onSelectItem={handleSelectToken}
          onInputChange={handlePoolValueChange}
        />
        <span className="flex my-5 text-[10px] md:text-xs bg-primary-gold-500/20 text-primary-gold-500 p-2 md:p-4 rounded-full">
          Note: A creation fee of ~0.2 MON is required for new pools.
        </span>

        <div className="!bg-transparent mt-5">
          <button className="h-full w-full rounded-md text-white group bg-none bg-primary-gold-500 dark:bg-primary-gold-500 hover:bg-gradient-to-r from-[rgba(199,242,132,1))] to-[rgba(255,171,0,1)] border border-transparent dark:hover:border dark:hover:border-primary-gold-500 disabled:cursor-not-allowed ">
            <div className="py-3 md:py-5 text-md md:text-xl rounded-md bg-primary-gold-500 bg-clip-text uppercase group-disabled:bg-none group-disabled:text-opacity-25 group-disabled:text-[#CFF3FF] font-bold leading-none">
              <span>INITIALIZE LIQUIDITY POOL</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default observer(CreateLiquidityV2);
