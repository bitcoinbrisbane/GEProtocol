// components/FloatingLabelInput.tsx

import React from 'react';

interface FloatingLabelInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ id, label, value, onChange }) => {
  return (
    <div className="relative mb-2 md:mb-0 md:mr-2">
      <input
        type="text"
        id={id}
        placeholder=" "
        value={value}
        onChange={onChange}
        className="block px-2 py-1 pr-8 w-full border-2 rounded-lg dark:bg-secondary-dark-500 dark:border-highlight-dark-500 dark:text-white focus:outline-none focus:ring-0 peer"
      />
      <label
        htmlFor={id}
        className="absolute left-2 top-1.5 text-gray-500 dark:text-white/30 transition-all transform -translate-y-4 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4  peer-focus:text-white  bg-secondary-dark-500 px-1.5"
      >
        {label}
      </label>
      {value && (
        <button
          type="button"
          onClick={() => onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>)}
          className="absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default FloatingLabelInput;
