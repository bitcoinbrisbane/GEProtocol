"use client";
import FloatingLabelSelect from "@/components/FloatingSelectInput";
import { useState } from "react";

const Bridge = () => {
  // return <>Bridge</>;
  const [selectedOption, setSelectedOption] = useState<string>("option1");
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="bg-secondary-dark-500 p-8 rounded-lg shadow-lg max-w-sm w-full">
          <div className="p-4 max-w-md">
            <FloatingLabelSelect
              id="selectOption"
              label="Select an option..."
              value={selectedOption}
              options={options}
              onChange={handleSelectChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bridge;
