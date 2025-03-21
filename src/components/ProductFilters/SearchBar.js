import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="ابحث عن المنتجات..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full bg-gray-800 text-white p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffcf7c]"
      />
      <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchBar;