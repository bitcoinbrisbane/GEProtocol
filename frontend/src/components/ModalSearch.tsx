// components/ModalSearch.tsx

import React, { useState, useMemo, useEffect, useRef } from "react";
import { BsXLg } from "react-icons/bs";
import { Item } from "@/static/interface";
import Coin from "./Coin";
import { FixedSizeList as List } from 'react-window';

interface ModalSearchProps {
  isOpen: boolean;
  onClose: () => void;
  items: Item[];
  onSelectItem: (item: Item) => void;
  title?: string;
}

const ModalSearch: React.FC<ModalSearchProps> = ({
  isOpen,
  onClose,
  items,
  onSelectItem,
  title = "Select The Token",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedItems, setDisplayedItems] = useState<Item[]>([]);

  // Menghitung filteredItems dengan useMemo
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  // Update displayedItems saat modal dibuka
  useEffect(() => {
    if (isOpen) {
      // Jika hasil pencarian kurang dari 10, tampilkan data dari items
      setDisplayedItems(filteredItems.length < 10 ? items : filteredItems);
    }
  }, [isOpen, filteredItems, items]);

  // Update displayedItems saat pencarian berubah
  useEffect(() => {
    // Update displayedItems berdasarkan filteredItems ketika searchTerm berubah
    setDisplayedItems(filteredItems);
  }, [filteredItems]);

  // Render hanya jika modal terbuka
  if (!isOpen) return null;

  // Row renderer untuk react-window
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const item = displayedItems[index];
    return (
      <div style={style} className="flex w-full space-x-2 items-center mb-[17px] text-sm">
        <Coin name={item.name} size={32} />
        <button
          onClick={() => {
            onSelectItem(item);
            onClose();
          }}
          className="flex-1"
        >
          <div className="flex flex-col -space-y-1 w-full">
            <div className="flex justify-between">
              <div>{item.name}</div>
              <div className="bg-primary-dark-500 text-[9px] max-w-[100px] px-2 mr-2 overflow-hidden rounded items-center flex">
                {item.data.id.length > 8
                  ? `${item.data.id.slice(0, 4)}...${item.data.id.slice(-4)}`
                  : item.data.id}
              </div>
            </div>
            <div className="text-start text-white/50 text-[10px]">
              {item.data.attributes.description
                .replace(/\/ US DOLLAR/g, "")
                .trim()}
            </div>
          </div>
        </button>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 m-4">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="w-full max-w-lg bg-white rounded-lg md:rounded-xl px-6 py-6 z-10 dark:bg-secondary-dark-500 relative">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 p-4 bg-secondary-dark-500 rounded-lg md:rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.95)]"
        >
          <BsXLg />
        </button>
        <div>
          <span className="flex pb-2">{title}</span>
          <div className="relative mb-4 -py-2">
            <input
              type="text"
              className="w-full p-2 pl-10 rounded-[10px] dark:bg-[#3D4153] dark:text-white"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12.5 6.5a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" />
            </svg>
          </div>
          <div className="max-h-[32rem] overflow-y-auto w-full">
            <List
              height={500}
              itemCount={displayedItems.length}
              itemSize={70} // Sesuaikan dengan tinggi item
              width="100%"
            >
              {Row}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSearch;
