// components/trade/CardSwapGraph.tsx

import React, { useState, useEffect } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Item } from "@/static/interface";
import Image from "next/image";
import SimpleChart from "./swap/SimpleChart";
import Coin from "../Coin";

interface CardSwapGraphProps {
  firstSelectedItem: Item;
  secondSelectedItem: Item;
}

const CardSwapGraph: React.FC<CardSwapGraphProps> = ({
  firstSelectedItem,
  secondSelectedItem,
}) => {
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [isSwapped, setIsSwapped] = useState(false);
  const [showPriceInfo, setShowPriceInfo] = useState(false);

  // Menghitung exchange rate berdasarkan currentPrice
  useEffect(() => {
    calculateExchangeRate();
  }, [firstSelectedItem, secondSelectedItem, isSwapped]);

  const calculateExchangeRate = () => {
    if (
      firstSelectedItem.currentPrice !== 0 &&
      secondSelectedItem.currentPrice !== 0
    ) {
      if (isSwapped) {
        setExchangeRate(
          secondSelectedItem.currentPrice / firstSelectedItem.currentPrice
        );
      } else {
        setExchangeRate(
          firstSelectedItem.currentPrice / secondSelectedItem.currentPrice
        );
      }
    }
  };

  const handleSwap = () => {
    setIsSwapped(!isSwapped); // Mengubah nilai isSwapped terlebih dahulu
  };

  const togglePriceInfo = () => {
    setShowPriceInfo(!showPriceInfo);
  };

  return (
    <>
      <div className="bg-white dark:bg-secondary-dark-500 shadow-md rounded-lg md:rounded-[30px] px-4 py-2 md:p-8 md:space-y-4 md:mt-8">
        {/* Baris Pertama: Exchange Rate */}
        <div className="w-full hidden md:flex justify-center text-[10px] md:text-xs">
          1 {isSwapped ? secondSelectedItem.name : firstSelectedItem.name} ={" "}
          {exchangeRate.toFixed(6)}{" "}
          {isSwapped ? firstSelectedItem.name : secondSelectedItem.name}{" "}
          <span className="cursor-pointer ml-2" onClick={handleSwap}>
            <AiOutlineSwap className="text-white text-sm md:text-lg" />
          </span>
        </div>

        {/* Baris Kedua: Informasi dan Grafik Token 1 */}
        <div className="flex flex-row items-center mb-2 md:space-x-4">
          <div className="flex items-center flex-1 space-x-2">
            <Coin name={firstSelectedItem.name} />
            <div>
              <div className="text-sm md:text-md font-semibold">
                {firstSelectedItem.name}
              </div>
              <div className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">
                Current Price: ${firstSelectedItem.currentPrice.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Grafik Token 1 */}
          <div className="flex-1 mt-0 relative h-16">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Grafik logika atau komponen disini */}
              <SimpleChart generic_symbol={firstSelectedItem.name} />{" "}
              {/* Include SimpleChart */}
            </div>
          </div>
        </div>

        {/* Baris Ketiga: Informasi dan Grafik Token 2 */}
        <div className="flex flex-row items-center space-y-0 md:space-x-4">
          <div className="flex items-center flex-1 space-x-2">
            <Coin name={secondSelectedItem.name}  />
            <div>
              <div className="text-sm md:text-md font-semibold">
                {secondSelectedItem.name}
              </div>
              <div className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">
                Current Price: ${secondSelectedItem.currentPrice.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Grafik Token 2 */}
          <div className="flex-1 mt-0 relative h-16">
            <div className="absolute top-0 left-0 w-full h-full">
              <SimpleChart generic_symbol={secondSelectedItem.name} />
            </div>
          </div>
        </div>

        {/* Baris Keempat: Informasi Harga (Ditampilkan jika showPriceInfo true) */}
        {showPriceInfo && (
          <div className="text-[10px] md:text-xs grid grid-cols-2 gap-2 ">
            <div>Price Impact</div>{" "}
            <div className="text-end text-green-500">{"< 0.1% "}</div>
            <div>Minimum Received</div>{" "}
            <div className="text-end">1.017824 {secondSelectedItem.name}</div>
            <div>Max Transaction Fee</div>{" "}
            <div className="text-end">0.000505 {secondSelectedItem.name}</div>
            <div>Deposit</div>{" "}
            <div className="text-end">
              0.00203928 {secondSelectedItem.name} for 1{" "}
              {firstSelectedItem.name} account
            </div>
          </div>
        )}
      </div>

      {/* Tombol untuk menampilkan/menyembunyikan Baris Keempat */}
      <div className="text-[10px] md:text-xs w-full mt-2 mb-14 md:mb-0">
        <button
          className="text-primary-gold-500 hover:underline flex w-full justify-center items-center"
          onClick={togglePriceInfo}
        >
          {/* {showPriceInfo ? "Hide Price Info" : "Show Price Info"}
           */}

          {showPriceInfo ? (
            <>
              <span>Hide Price Info</span>
              <FiChevronUp className="ml-1 text-[20px] " />
            </>
          ) : (
            <>
              <span>Show Price Info</span>
              <FiChevronDown className="ml-1 text-[20px]" />
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default CardSwapGraph;
