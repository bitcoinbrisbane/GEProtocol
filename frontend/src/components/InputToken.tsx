// components/InputToken.tsx

import React from "react";
import { Item } from "@/static/interface";
import Image from "next/image";
import Coin from "./Coin";

interface InputTokenProps {
  selectedItem: Item;
  inputValue: string;
  onInputChange: (value: string) => void;
}

const InputToken: React.FC<InputTokenProps> = ({
  selectedItem,
  inputValue,
  onInputChange,
}) => {
  return (
    <div className="py-[3px] px-1 h-[48px] md:p-1.5 md:h-[54px] border-[1px] border-primary-light-500/20 focus-within:border-primary-gold-500 relative rounded-md flex flex-col space-y-3 group  focus-within:shadow-swap-input-dark hover:bg-secondary-dark-500-dark bg-primary-dark-500">
      <div className="flex">
        <div className="flex justify-between items-center">
          <div className="p-1 h-8 md:py-2 md:px-1 md:h-10 rounded-md flex space-x-1 items-center border-transparent  dark:group-hover/select:border-primary-gold-500/50 dark:group-hover/select:bg-[rgba(252,244,132,0.2)] dark:group-hover/select:shadow-swap-input-dark">
            <div className="rounded-full">
              <span className="relative">
                <Coin name={selectedItem.name} />
              </span>
            </div>
            <div className="font-semibold text-sm" translate="no">
              {selectedItem.name}
            </div>
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

export default InputToken;
