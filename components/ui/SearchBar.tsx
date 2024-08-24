import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchBar = () => {
  return (
    <div className="relative flex items-center w-full max-w-sm mx-auto mt-[100px] lg:mt-9">
      <MagnifyingGlassIcon className="absolute left-3 w-5 h-5 text-white" />
      <input
        type="text"
        placeholder="Search trip destination"
        className="w-full pl-10 pr-4 py-2 sm:py-1 sm:pr-2 bg-gradient-to-r from-[#ff7b24] to-[#ff7b24] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-orange-100"
      />
    </div>
  );
};

export default SearchBar;
