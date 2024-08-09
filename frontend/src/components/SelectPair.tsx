import React, { useState } from "react";
import ModalSearch from "./ModalSearch";
import ModalSearchPair from "./ModalSearchPair";
import { FaCaretDown } from "react-icons/fa6";
import { Item } from "@/static/interface";
import Image from "next/image";
import Coin from "./Coin";

interface SelectPairProps {
  items: Item[];
  selectedItems: Item[];
  onSelectItem: (item: Item, index: number) => void;
}

const SelectPair: React.FC<SelectPairProps> = ({
  items,
  selectedItems,
  onSelectItem,
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
    <div className="py-[3px] px-1 h-[48px] md:p-1.5 md:h-[54px] border-[1px] border-primary-light-500/20 focus-within:border-primary-gold-500 relative rounded-md flex flex-col space-y-3 group  focus-within:shadow-swap-input-dark hover:bg-secondary-dark-500-dark bg-primary-dark-500">
      <div className="flex">
        <div className="flex justify-between items-center w-full group/select">
          <button
            type="button"
            onClick={() => setIsModalSearchOpen(true)}
            className="p-1 h-[38px] md:py-2 md:px-1 md:h-10 w-full rounded-md flex space-x-1 items-center border-transparent bg-white dark:bg-highlight-dark-500 border dark:group-hover/select:border-primary-gold-500/50 dark:group-hover/select:bg-[rgba(252,244,132,0.2)] dark:group-hover/select:shadow-swap-input-dark"
          >
            {selectedItems.length > 0 ? (
              <div className="flex items-center w-full justify-between">
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
                <div className="text-black/25 dark:text-white/75 dark:group-hover/select:text-primary-gold-500 fill-current">
                  <FaCaretDown className="text-[20px]" />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <div className="font-semibold text-sm" translate="no">
                  SELECT TOKEN PAIR
                </div>
                <div className="text-black/25 dark:text-white/75 dark:group-hover/select:text-primary-gold-500 fill-current">
                  <FaCaretDown className="text-[20px]" />
                </div>
              </div>
            )}
          </button>
        </div>
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

export default SelectPair;
