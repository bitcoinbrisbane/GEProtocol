// components/PlusButton.tsx
import React from "react";

interface PlusButtonProps {
  onSwap: () => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({ onSwap }) => {
  return (
    <div className="relative flex justify-center my-5">
      <div className="inline-block z-10">
        <button
          type="button"
          onClick={onSwap}
          className="group/flip bg-[#EBEFF1] dark:bg-primary-gold-500 w-8 h-8 rounded-full cursor-pointer flex flex-col justify-center border-[3px] dark:border-[rgba(25,35,45,0.75)] dark:text-white-25 "
        >
          <span className="w-full text-white text-lg fill-current flex justify-center transition-none ">
            +
          </span>
        </button>
      </div>
    </div>
  );
};

export default PlusButton;
