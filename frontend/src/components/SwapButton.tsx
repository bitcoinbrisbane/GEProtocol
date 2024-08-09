// components/SwapButton.tsx
import React from "react";
import { AiOutlineSwap } from "react-icons/ai";

interface SwapButtonProps {
  onSwap: () => void;
}

const SwapButton: React.FC<SwapButtonProps> = ({ onSwap }) => {
  return (
    <div className="relative flex justify-center my-5">
      <div className="inline-block z-10">
        <button
          type="button"
          onClick={onSwap}
          className="group/flip bg-[#EBEFF1] dark:bg-primary-gold-500 w-8 h-8 rounded-full cursor-pointer flex flex-col justify-center border-[3px] dark:border-[rgba(25,35,45,0.75)] dark:text-white-25 dark:hover:border-primary-gold-500 dark:hover:shadow-swap-input-dark"
        >
          <span className="w-full text-white/50 fill-current flex justify-center transition-none group-hover/flip:text-primary-gold-500/50 dark:group-hover/flip:text-primary-gold-500 rotate-90">
          <AiOutlineSwap className="text-white "/>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SwapButton;
