// components/ModalSearchPair.tsx

import React, { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { Item } from "@/static/interface";
import Image from "next/image";
import Coin from "./Coin";

interface ModalSearchPairProps {
  isOpen: boolean;
  onClose: () => void;
  items: Item[];
  onSelectItem: (item: Item) => void;
  selectedItem: Item;
  title?: string; // Tambahkan properti title
}

const ModalSearchPair: React.FC<ModalSearchPairProps> = ({
  isOpen,
  onClose,
  items,
  onSelectItem,
  selectedItem,
  title = "Search The Pair For ", // Atur default value untuk title
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  if (!isOpen) return null;

  const filteredItems = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => item.name !== selectedItem.name); // Exclude the selected item

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 m-4">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="w-full max-w-lg bg-white rounded-lg md:rounded-xl px-6 py-6 z-10 dark:bg-secondary-dark-500 relative ">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 p-4 bg-secondary-dark-500 rounded-lg md:rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.95)]"
        >
          <BsXLg />
        </button>
        <div>
          <span className="flex pb-2">
            {title} {selectedItem.name}
          </span>{" "}
          {/* Gunakan properti title di sini */}
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
          <div className="max-h-[32rem] overflow-y-auto">
            {filteredItems.map((item) => (
              <div key={item.name} className="flex items-center mb-2">
                <div className="flex items-center -space-x-1 mr-2">
                  <Coin name={selectedItem.name} size={32} />
                  <Coin name={item.name} size={32} />
                </div>
                <button
                  onClick={() => {
                    onSelectItem(item);
                    onClose();
                  }}
                >
                  {selectedItem.name}/{item.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSearchPair;
