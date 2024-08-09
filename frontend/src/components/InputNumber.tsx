"use client";
import React from "react";

interface InputNumberProps {
  inputValue: string;
  onInputChange: (value: string) => void;
}

const InputNumber: React.FC<InputNumberProps> = ({
  inputValue,
  onInputChange,
}) => {
  return (
    <div className="py-[3px] px-1 h-[48px] md:p-1.5 md:h-[54px] border-[1px] border-primary-light-500/20 focus-within:border-primary-gold-500 relative rounded-md flex items-center group focus-within:shadow-swap-input-dark hover:bg-secondary-dark-500-dark bg-primary-dark-500">
      {/* Input */}
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
  );
};

export default InputNumber;
