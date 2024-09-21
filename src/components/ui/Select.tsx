import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  options: Option[];
}

export const Select: React.FC<SelectProps> = ({ value, onValueChange, placeholder, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="w-full p-2 text-left bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || placeholder}
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onValueChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
