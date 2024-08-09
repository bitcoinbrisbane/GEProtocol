// components/InputWithModalPair.tsx

import React, { useState } from "react";
import ModalSearch from "./ModalSearch";
import ModalSearchPair from "./ModalSearchPair";
import { FaCaretDown } from "react-icons/fa6";
import { Item } from "@/static/interface";
import Coin from "./Coin";

interface InputWithModalPairProps {
  items: Item[];
  selectedItems: Item[];
  inputValue: string;
  onSelectItem: (item: Item, index: number) => void;
  onInputChange: (value: string) => void;
}

const InputWithModalPair: React.FC<InputWithModalPairProps> = ({
  items,
  selectedItems,
  inputValue,
  onSelectItem,
  onInputChange,
}) => {
  const [isModalSearchOpen, setIsModalSearchOpen] = useState(false);
  const [isModalSearchPairOpen, setIsModalSearchPairOpen] = useState(false);

  const handleSelectFirstItem = (item: Item) => {
    onSelectItem(item, 0);
    setIsModalSearchOpen(false);
    setIsModalSearchPairOpen(true);
  };

  const handleSelectSecondItem = (item: Item) => {
    onSelectItem(item, 1);
    setIsModalSearchPairOpen(false);
  };

  return (
    <div className="py-[3px] px-1 h-[48px] md:p-1.5 md:h-[54px] border-[1px] border-primary-light-500/20 focus-within:border-primary-gold-500  relative rounded-md flex flex-col space-y-3 group  focus-within:shadow-swap-input-dark hover:bg-secondary-dark-500-dark ">
      <div className="flex">
        <div className="flex justify-between items-center group/select">
          <button
            type="button"
            onClick={() => setIsModalSearchOpen(true)}
            className="p-1 h-[38px] md:py-2 md:px-1 md:h-10 rounded-md flex space-x-1 items-center border-transparent bg-white dark:bg-highlight-dark-500 border dark:group-hover/select:border-primary-gold-500/50 dark:group-hover/select:bg-[rgba(252,244,132,0.2)] dark:group-hover/select:shadow-swap-input-dark"
          >
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
        onSelectItem={handleSelectFirstItem}
      />
      <ModalSearchPair
        isOpen={isModalSearchPairOpen}
        onClose={() => setIsModalSearchPairOpen(false)}
        items={items}
        onSelectItem={handleSelectSecondItem}
        selectedItem={selectedItems[0]}
      />
    </div>
  );
};

export default InputWithModalPair;
