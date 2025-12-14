import React from 'react';

export default function SearchBar({ onSearch, onToggleFilters }) {
  return (
    // Added 'flex-wrap' and adjusted gap for better mobile spacing
    <div className="mx-auto max-w-7xl px-4 py-4 flex flex-wrap gap-2 md:gap-3 items-center">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        className="flex-1 min-w-[150px] rounded-2xl px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        onChange={(e) => onSearch?.(e.target.value)}
      />

      {/* Realistic Filter Button (with correct icon symbol) */}
      <button
        onClick={onToggleFilters}
        className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-gray-50 text-gray-700 border border-gray-300 hover:bg-gray-100 transition"
      >
        {/* Exact working realistic filter symbol */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4a1 1 0 011-1h16a1 1 0
              011 1v2a1 1 0 01-.293.707L15
              12.414V19a1 1 0
              01-1.447.894l-4-2A1 1 0
              019 17v-4.586L3.293
              6.707A1 1 0 013 6V4z"
          />
        </svg>
        Filter
      </button>
    </div>
  );
}