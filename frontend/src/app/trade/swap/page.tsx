"use client";

import SwapButton from "@/components/SwapButton";
import React, { useState, useEffect, useContext } from "react";
import { FaWallet } from "react-icons/fa";
import { FiChevronRight, FiRefreshCw, FiSettings } from "react-icons/fi";
import { observer } from "mobx-react-lite";
import { StoreContext } from "@/stores/storePovider";
import dynamic from "next/dynamic";

const InputWithModal = dynamic(() => import("@/components/InputWithModal"), {
  ssr: true,
  loading: () => <p>Loading...</p>,
});
const CardSwapGraph = dynamic(() => import("@/components/trade/CardSwapGraph"), {
  ssr: true,
  loading: () => <p>Loading...</p>,
});
const Modal = dynamic(() => import("@/components/Modal"));
const SwapRouteFlow = dynamic(() => import("@/components/trade/SwapRouteFlow"));

const Swap: React.FC = () => {
  const { priceStore } = useContext(StoreContext);

  const [firstInputValue, setFirstInputValue] = useState<string>("");
  const [secondInputValue, setSecondInputValue] = useState<string>("");
  const [isFirstInputChanging, setIsFirstInputChanging] = useState<boolean>(false);
  const [isSecondInputChanging, setIsSecondInputChanging] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const items = priceStore.getItems();
  const firstSelectedItem = priceStore.firstSelectedItem || items[0];
  const secondSelectedItem = priceStore.secondSelectedItem || items[1];

  const walletInDollars = 812.22; // Wallet balance in dollars

  useEffect(() => {
    if (isFirstInputChanging) {
      if (firstInputValue) {
        const value =
          parseFloat(firstInputValue) *
          (firstSelectedItem.currentPrice / secondSelectedItem.currentPrice);
        setSecondInputValue(value.toFixed(6).toString());
      } else {
        setSecondInputValue("");
      }
      setIsFirstInputChanging(false);
    }
  }, [firstInputValue, firstSelectedItem, secondSelectedItem, isFirstInputChanging]);

  useEffect(() => {
    if (isSecondInputChanging) {
      if (secondInputValue) {
        const value =
          parseFloat(secondInputValue) *
          (secondSelectedItem.currentPrice / firstSelectedItem.currentPrice);
        setFirstInputValue(value.toFixed(6).toString());
      } else {
        setFirstInputValue("");
      }
      setIsSecondInputChanging(false);
    }
  }, [secondInputValue, firstSelectedItem, secondSelectedItem, isSecondInputChanging]);

  const handleFirstInputChange = (value: string) => {
    setIsFirstInputChanging(true);
    setFirstInputValue(value);
  };

  const handleSecondInputChange = (value: string) => {
    setIsSecondInputChanging(true);
    setSecondInputValue(value);
  };

  const handleSelectFirstItem = async (item: (typeof items)[0]) => {
    if (item.name === secondSelectedItem.name) {
      setSecondInputValue(firstInputValue); // Sync input values
    }
    priceStore.setFirstSelectedItem(item);
    await priceStore.updatePriceById(item.data.id); // Update price when item is selected
  };

  const handleSelectSecondItem = async (item: (typeof items)[0]) => {
    if (item.name === firstSelectedItem.name) {
      setFirstInputValue(secondInputValue); // Sync input values
    }
    priceStore.setSecondSelectedItem(item);
    await priceStore.updatePriceById(item.data.id); // Update price when item is selected
  };

  const handleSwap = () => {
    priceStore.setFirstSelectedItem(secondSelectedItem);
    priceStore.setSecondSelectedItem(firstSelectedItem);
    setFirstInputValue(secondInputValue);
    setSecondInputValue(firstInputValue);
  };

  const handleHalfClick = () => {
    const walletInToken = walletInDollars / firstSelectedItem.currentPrice;
    setFirstInputValue((walletInToken / 2).toString());
    setIsFirstInputChanging(true);
  };

  const handleMaxClick = () => {
    const walletInToken = walletInDollars / firstSelectedItem.currentPrice;
    setFirstInputValue(walletInToken.toString());
    setIsFirstInputChanging(true);
  };

  const isRouteVisible =
    parseFloat(firstInputValue) > 0 ||
    parseFloat(secondInputValue) > 0;

  const handleRouteButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center pb-10">
      <div className="md:mt-20 w-full max-w-lg z-10">
        {/* Right Button */}
        <div className="flex justify-end mb-1 md:mb-2">
          <div className="flex flex-row w-full">
            <div className="ml-auto flex flex-row gap-2 text-white/50">
              <div>
                <button className="h-fit cursor-pointer  rounded-full  fill-white-25 hover:text-primary-gold-500 focus:outline-1 ">
                  <FiRefreshCw size={18} strokeWidth={3}/>
                </button>
              </div>
              <div>
                <button className="h-fit cursor-pointer  rounded-full  fill-white-25 hover:text-primary-gold-500 focus:outline-1 ">
                  <FiSettings size={18} strokeWidth={3}/>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Swap Card */}
        <div className="bg-secondary-dark-500 rounded-lg md:rounded-[30px] px-4 py-9 md:px-10 shadow-lg">
          <form>
            <div className="flex-col ">
              <div className="flex justify-between items-center text-[10px] mb-1">
                <button className="text-white p-0.5 rounded text-xs font-semibold">
                  From
                </button>
                <div className="flex space-x-1">
                  <div className=" text-white py-0.5 px-1 rounded font-semibold flex items-center">
                    <FaWallet className="mr-1" />{" "}
                    {(walletInDollars / firstSelectedItem.currentPrice).toFixed(
                      2
                    )}{" "}
                    {firstSelectedItem.name}
                  </div>
                  <button
                    type="button"
                    className="bg-highlight-dark-500 text-white py-0.5 px-2 rounded"
                    onClick={handleHalfClick}
                  >
                    HALF
                  </button>
                  <button
                    type="button"
                    className="bg-highlight-dark-500 text-white py-0.5 px-2 rounded"
                    onClick={handleMaxClick}
                  >
                    MAX
                  </button>
                </div>
              </div>
              <InputWithModal
                items={items}
                selectedItem={firstSelectedItem}
                inputValue={firstInputValue}
                onSelectItem={handleSelectFirstItem}
                onInputChange={handleFirstInputChange}
              />
              <SwapButton onSwap={handleSwap} />
              <div className="flex justify-between items-center text-[10px] mb-1 -mt-4">
                <button className="text-white p-0.5 rounded text-xs font-semibold">
                  To
                </button>
                <div className="flex space-x-1">
                  <div className=" text-white py-0.5 px-1 rounded font-semibold flex items-center">
                    <FaWallet className="mr-1" />{" "}
                    {(
                      walletInDollars / secondSelectedItem.currentPrice
                    ).toFixed(2)}{" "}
                    {secondSelectedItem.name}
                  </div>
                </div>
              </div>
              <InputWithModal
                items={items}
                selectedItem={secondSelectedItem}
                inputValue={secondInputValue}
                onSelectItem={handleSelectSecondItem}
                onInputChange={handleSecondInputChange}
              />
            </div>
            <div className="mt-8 w-full"></div>
            {/* ROUTE SECTION */}
            {isRouteVisible && (
              <div className="flex gap-x-1">
                <button
                  type="button"
                  className="flex space-x-1 items-center group w-full relative"
                  onClick={handleRouteButtonClick}
                >
                  <div className="rounded-md to-v2-primary/25">
                    <span className="rounded-md flex space-x-1 items-center text-xs bg-[rgba(255,171,0,0.3)] group-hover:bg-[#e5fafc] dark:group-hover:bg-[#FFAB00] dark:group-hover:text-white group-hover:bg-none">
                      <span className="flex items-center px-2 py-0.5 text-primary-gold-500 group-hover:text-white font-semibold whitespace-nowrap ">
                        2 Split + Hops
                      </span>
                    </span>
                  </div>
                  <div className="space-x-2 items-center justify-between w-full flex">
                    <span className="text-black-50 dark:text-white-50 text-xs text-left max-w-[120px] md:max-w-[200px] truncate">
                      via Monad DLMM
                    </span>
                    <FiChevronRight />
                  </div>
                </button>
              </div>
            )}

            {/* CONNECT WALLET */}
            <div className="mt-2 flex gap-x-1 " />
            <div className="!bg-transparent ">
              <button className="h-full w-full rounded-md text-white group bg-none bg-primary-gold-500 dark:bg-primary-gold-500 hover:bg-primary-gold-500/80 hover:text-white transition-all duration-300 font-semibold flex items-center justify-center py-2">
                <span className="flex items-center space-x-2">
                  <span>Connect Wallet</span>
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* GRAPH */}
        <div className="mt-4">
          <CardSwapGraph
            firstSelectedItem={firstSelectedItem}
            secondSelectedItem={secondSelectedItem}
          />
        </div>

        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <span className="flex text-white text-md md:text-lg font-bold mb-4">
            Routing
          </span>
          <div className="w-full h-[400px]">
            <SwapRouteFlow
              firstSelectedItem={firstSelectedItem}
              secondSelectedItem={secondSelectedItem}
              firstInputValue={firstInputValue}
              secondInputValue={secondInputValue}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default observer(Swap);
