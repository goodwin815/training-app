import React from 'react';
import SearchIcon from '../icons/search';
import SelectInput from '../Select/select';

const SearchBar = () => {
  return (
    <div className="flex h-20 w-full items-center justify-between rounded-[32px] bg-[#C3DDFD] px-6 py-4">
      <div className="relative w-1/2">
        <input
          type="text"
          placeholder="Search by Name"
          className="w- w-full rounded-full border border-gray-300 bg-white px-4 py-4 pl-10 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon />
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <h3>Sort By Field</h3>
        <SelectInput
          small
          options={[
            { value: 'hello', label: 'Any' },
            { value: 'hello', label: 'Any' },
            { value: 'hello', label: 'Any' },
            { value: 'hello', label: 'Any' },
          ]}
        />
      </div>
    </div>
  );
};

export default SearchBar;
