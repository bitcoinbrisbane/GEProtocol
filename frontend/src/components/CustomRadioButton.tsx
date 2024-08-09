// components/CustomRadioButton.tsx
import React from "react";

interface CustomRadioButtonProps {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
  description?: string;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  value,
  checked,
  onChange,
  label,
  description,
}) => {
  return (
    <div
      onClick={() => onChange(value)}
      className={`flex items-center cursor-pointer p-4 border-2 ${
        checked ? "border-yellow-500" : "border-transparent"
      } bg-primary-dark-500 rounded-lg transition-colors duration-300 ease-in-out hover:border-yellow-400`}
    >
      <div className="flex">
        <div
          className={`size-4 border-2 ${
            checked ? "bg-yellow-500 border-yellow-500" : "border-yellow-500"
          } rounded-full mr-3`}
        />
      </div>
      <div className="flex flex-wrap">
        <span>{label}</span>
        <span className="text-xs text-white/80">
          {
            description
          }
        </span>
      </div>
    </div>
  );
};

export default CustomRadioButton;
