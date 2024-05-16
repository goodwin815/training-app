import React from 'react';
import SelectIcon from '../icons/select';
import clsx from 'clsx';

interface SelectInputProps {
  options: { value: string; label: string }[];
  small?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({ options, small }) => {
  return (
    <div className="relative">
      <select
        className={clsx(
          'block',
          'appearance-none',
          'rounded-full',
          'border',
          'border-gray-300',
          'bg-white',
          'px-4',
          'py-2',
          'pr-8',
          'focus:outline-none',
          { 'h-14 w-36': small },
        )}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <SelectIcon />
      </div>
    </div>
  );
};

export default SelectInput;
