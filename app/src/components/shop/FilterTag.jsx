import React from 'react';

export default function FilterTag({ label, onRemove }) {
  return (
    <div className="flex items-center bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full space-x-2">
      <span>{label}</span>
      <button
        onClick={onRemove}
        className="text-gray-500 hover:text-gray-900 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}