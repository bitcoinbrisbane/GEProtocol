// components/FloatingSelectInput.tsx
import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface FloatingLabelSelectProps {
  id: string;
  label: string;
  value: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FloatingLabelSelect: React.FC<FloatingLabelSelectProps> = ({ id, label, value, options, onChange }) => {
  return (
    <div className="relative mb-2 md:mb-0 md:mr-2">
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="block px-2 py-1 pr-8 w-full border-2 rounded-lg dark:bg-secondary-dark-500 dark:border-highlight-dark-500 dark:text-white focus:outline-none focus:ring-0 peer"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className="absolute left-2 -top-2.5 text-gray-500 dark:text-white transition-all transform -translate-y-4 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelSelect;
