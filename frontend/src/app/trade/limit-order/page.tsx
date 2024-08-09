"use client";
import Dropdown from "@/components/Dropdown";
import InputNumber from "@/components/InputNumber";
import InputWithModal from "@/components/InputWithModal";
import SwapButton from "@/components/SwapButton";
import TradingViewWidget from "@/components/trade/limit-order/TradingViewWidget";
import { StoreContext } from "@/stores/storePovider";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";

const LimitOrder: React.FC = observer(() => {
  const { priceStore } = useContext(StoreContext);
  const items = priceStore.items;

  const [firstSelectedItem, setFirstSelectedItem] = useState(items[0]);
  const [secondSelectedItem, setSecondSelectedItem] = useState(items[1]);
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");
  const [isFirstInputChanging, setIsFirstInputChanging] = useState(false);
  const [isSecondInputChanging, setIsSecondInputChanging] = useState(false);

  const [dropdownInputValue, setDropdownInputValue] = useState("");
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
  }, [
    firstInputValue,
    firstSelectedItem,
    secondSelectedItem,
    isFirstInputChanging,
  ]);

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
  }, [
    secondInputValue,
    firstSelectedItem,
    secondSelectedItem,
    isSecondInputChanging,
  ]);

  const handleFirstInputChange = (value: string) => {
    setIsFirstInputChanging(true);
    setFirstInputValue(value);
  };

  const handleSecondInputChange = (value: string) => {
    setIsSecondInputChanging(true);
    setSecondInputValue(value);
  };

  const handleDropdownInputChange = (value: string) => {
    setDropdownInputValue(value);
  };

  // Update the handlers to swap items if they are the same
  const handleSelectFirstItem = (item: (typeof items)[0]) => {
    if (item.name === secondSelectedItem.name) {
      setSecondSelectedItem(firstSelectedItem);
    }
    setFirstSelectedItem(item);
  };

  const handleSelectSecondItem = (item: (typeof items)[0]) => {
    if (item.name === firstSelectedItem.name) {
      setFirstSelectedItem(secondSelectedItem);
    }
    setSecondSelectedItem(item);
  };

  const handleSwap = () => {
    setFirstSelectedItem(secondSelectedItem);
    setSecondSelectedItem(firstSelectedItem);
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

  return (
    <div className="container mx-auto md:mt-10">
      {/* <h1 className="text-3xl font-bold text-center my-8">TradingView Chart</h1> */}
      <div className="rounded-xl bg-[#131722] shadow-lg flex flex-col lg:flex-row">
        <TradingViewWidget />

        <div className="bg-secondary-dark-500 flex flex-col justify-center w-full lg:max-w-lg h-auto p-4 dark:bg-v2-background border border-white/5 rounded-t-none md:rounded-t-2xl rounded-2xl shadow-l shadow-xl -mr-[1px]">
          <div className="flex flex-col px-4">
            <div className="flex justify-between items-center text-[10px] mb-1">
              <button className="text-white p-0.5 rounded text-xs font-semibold">
                Sell
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

            <div className="my-2"></div>

            <div className="flex gap-4">
              <div className="flex-1">
                <div className="flex justify-between items-center text-[10px] mb-1">
                  <button className="text-white p-0.5 rounded md:text-xs font-semibold">
                    Buy Mon At
                  </button>
                  <div className="flex space-x-1">
                    <button
                      type="button"
                      className="bg-highlight-dark-500 text-white py-0.5 px-2 rounded"
                    >
                      MARKET PRICE
                    </button>
                    <button
                      type="button"
                      className="bg-highlight-dark-500 text-white py-0.5 px-2 rounded"
                    >
                      + 1%
                    </button>
                    <button
                      type="button"
                      className="bg-highlight-dark-500 text-white py-0.5 px-2 rounded"
                    >
                      + 5%
                    </button>
                    <button
                      type="button"
                      className="bg-highlight-dark-500 text-white py-0.5 px-2 rounded"
                    >
                      + 10%
                    </button>
                  </div>
                </div>
                <InputNumber
                  inputValue={dropdownInputValue}
                  onInputChange={handleDropdownInputChange}
                />
              </div>
              
            </div>

            <SwapButton onSwap={handleSwap} />
            <div className="flex justify-between items-center text-[10px] mb-1 -mt-4">
              <button className="text-white p-0.5 rounded text-xs font-semibold">
                Buy
              </button>
              <div className="flex space-x-1">
                <div className=" text-white py-0.5 px-1 rounded font-semibold flex items-center">
                  <FaWallet className="mr-1" />{" "}
                  {(walletInDollars / secondSelectedItem.currentPrice).toFixed(
                    2
                  )}{" "}
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

            <div className="flex justify-between items-center text-[10px] mb-1 mt-4">
              <button className="text-white p-0.5 rounded text-xs font-semibold">
                Platform Fee :
              </button>
              <div className="flex space-x-1 text-xs">0.1 %</div>
            </div>

            <div className="flex p-4 text-xs bg-primary-gold-500/20 rounded-lg text-primary-gold-500 mt-4">
              You will receive exactly what you have specified, minus platform
              fees.
            </div>

            <div className="!bg-transparent mt-5 ">
              <button className="h-full w-full rounded-md text-white group bg-none bg-primary-gold-500 dark:bg-primary-gold-500 hover:bg-gradient-to-r from-[rgba(199,242,132,1))] to-[rgba(255,171,0,1)] border border-transparent dark:hover:border dark:hover:border-primary-gold-500 disabled:cursor-not-allowed ">
                <div className="py-3 md:py-5 text-md md:text-xl rounded-md bg-primary-gold-500 bg-clip-text uppercase group-disabled:bg-none group-disabled:text-opacity-25 group-disabled:text-[#CFF3FF] font-bold leading-none">
                  <span>Connect Wallet</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LimitOrder;
