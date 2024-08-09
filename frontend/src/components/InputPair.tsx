import React from "react";
import { Item } from "@/static/interface";
import Image from "next/image";
import Coin from "./Coin";

interface InputPairProps {
  items: Item[];
  selectedItems: Item[];
  inputValue: string;
  onSelectItem: (item: Item, index: number) => void;
  onInputChange: (value: string) => void;
}

const InputPair: React.FC<InputPairProps> = ({
  items,
  selectedItems,
  inputValue,
  onSelectItem,
  onInputChange,
}) => {
  return (
    <div className="py-0 px-1 h-[42px] md:p-1.5 md:h-[54px] border-[1px] border-primary-light-500/20 focus-within:border-primary-gold-500  relative rounded-md flex flex-col space-y-3 group  focus-within:shadow-swap-input-dark hover:bg-secondary-dark-500-dark bg-primary-dark-500">
      <div className="flex">
        <div className="flex justify-between items-center group/select">
          <div className="p-1 h-8 md:py-2 md:px-1 md:h-10 rounded-md flex space-x-1 items-center border-transparent border dark:group-hover/select:shadow-swap-input-dark">
            {selectedItems.length > 0 ? (
              <div className="flex items-center">
                <div className="flex -space-x-1 mr-1">
                  <Coin name={selectedItems[0].name} />
                  {selectedItems.length > 1 && (
                    <Coin name={selectedItems[1].name} />
                  )}
                </div>
                <div className="font-semibold text-sm" translate="no">
                  {selectedItems[0].name}{" "}
                  {selectedItems.length > 1 && `/ ${selectedItems[1].name}`}
                </div>
              </div>
            ) : (
              <div className="font-semibold text-sm" translate="no">
                SELECT TOKEN PAIR
              </div>
            )}
          </div>
        </div>
        <span className="flex-1 text-right h-10">
          <div className="flex flex-col text-right h-full">
            <input
              inputMode="decimal"
              autoComplete="off"
              name="fromValue"
              data-lpignore="true"
              placeholder="0.00"
              className="h-full w-full bg-transparent disabled:cursor-not-allowed disabled:opacity-100 disabled:text-black dark:text-white text-right font-semibold dark:placeholder:text-white/25 text-base md:text-xl outline-none"
              type="text"
              value={inputValue}
              onChange={(e) => onInputChange(e.target.value)}
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default InputPair;
