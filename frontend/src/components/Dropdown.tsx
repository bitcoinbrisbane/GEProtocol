"use client";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";

const Dropdown: React.FC = () => {
  const [expiry, setExpiry] = useState<string>("10 Minutes");
  const expiryOptions = [
    "10 Minutes",
    "1 Hour",
    "1 Day",
    "3 Day",
    "7 Day",
    "30 Day",
    "3 Month",
    "1 Year",
  ];

  return (
    <div className="w-[110px] py-[3px] px-1 h-[48px] md:p-1.5 md:h-[54px]  rounded-md flex space-x-1 items-center border-transparent bg-white dark:bg-highlight-dark-500 border dark:group-hover/select:border-primary-gold-500/50 dark:group-hover/select:bg-[rgba(252,244,132,0.2)] dark:group-hover/select:shadow-swap-input-dark relative">
      <select
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        className="w-full h-full bg-transparent text-sm font-semibold dark:text-white text-black outline-none cursor-pointer"
      >
        {expiryOptions.map((option) => (
          <option className="bg-primary-dark-500" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 text-black/25 dark:text-white/75 dark:group-hover/select:text-primary-gold-500">
        <FaCaretDown className="text-[20px]" />
      </div>
    </div>
  );
};

export default Dropdown;
