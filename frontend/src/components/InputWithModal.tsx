// components/InputWithModal.tsx

"use client";
import React, { useState } from "react";
// import ModalSearch from "./ModalSearch";
import { FaCaretDown } from "react-icons/fa6";
import { Item } from "@/static/interface";
import dynamic from "next/dynamic";
import Coin from "./Coin";

const ModalSearch = dynamic(() => import("@/components/ModalSearch"));

interface InputWithModalSearchProps {
  items: Item[];
  selectedItem: Item;
  inputValue: string;
  onSelectItem: (item: Item) => void;
  onInputChange: (value: string) => void;
}

const InputWithModal: React.FC<InputWithModalSearchProps> = ({
  items,
  selectedItem,
  inputValue,
  onSelectItem,
  onInputChange,
}) => {
  const [isModalSearchOpen, setIsModalSearchOpen] = useState(false);

  return (
    <div className="py-[3px] px-1 h-[48px] md:p-1.5 md:h-[54px] border-[1px] border-primary-light-500/20 focus-within:border-primary-gold-500 relative rounded-md flex flex-col space-y-3 group  focus-within:shadow-swap-input-dark hover:bg-secondary-dark-500-dark bg-primary-dark-500">
      <div className="flex ">
        <div className="flex justify-between items-center group/select ">
          <button
            type="button"
            onClick={() => setIsModalSearchOpen(true)}
            className=" justify-between w-[110px] p-1 h-[38px] md:py-2 md:px-1 md:h-10 rounded-md flex space-x-1 items-center border-transparent bg-white dark:bg-highlight-dark-500 border dark:group-hover/select:border-primary-gold-500/50 dark:group-hover/select:bg-[rgba(252,244,132,0.2)] dark:group-hover/select:shadow-swap-input-dark"
          >
            <div className="rounded-full overflow-hidden">
              <span className="relative">
                <Coin name={selectedItem.name} />
              </span>
            </div>
            <div className="font-semibold text-sm" translate="no">
              {selectedItem.name}
            </div>
            <div className="text-black/25 dark:text-white/75 dark:group-hover/select:text-primary-gold-500 fill-current">
              <FaCaretDown className="text-[20px]" />
            </div>
          </button>
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

      <ModalSearch
        isOpen={isModalSearchOpen}
        onClose={() => setIsModalSearchOpen(false)}
        items={items}
        onSelectItem={onSelectItem}
      />
    </div>
  );
};

export default InputWithModal;
