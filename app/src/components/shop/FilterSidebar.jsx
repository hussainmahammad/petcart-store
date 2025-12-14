import React, { useState, useEffect } from "react";
import products from "../../data/products";

// A single filter group component to avoid repetition
const FilterGroup = ({ title, options, selected, onSelect }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="max-h-48 overflow-y-auto">
        {options.map((option) => {
          const value = option.value || option;
          const label = option.label || option;

          return (
            <li
              key={value}
              className="flex items-center mb-1 cursor-pointer"
              onClick={() => onSelect(option)}
            >
              <input
                type="checkbox"
                checked={selected.includes(value)}
                onChange={() => {}}
                className="mr-2 text-orange-500 rounded focus:ring-orange-500"
              />
              <span>{label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default function FilterSidebar({ isOpen, onClose, onFilterChange }) {
  const [filters, setFilters] = useState({
    petTypes: [],
    categories: [],
    brands: [],
    discounts: [],
    priceRanges: [],
    ratings: [],
    sortBy: "",
  });

  const [availableOptions, setAvailableOptions] = useState({ brands: [] });

  useEffect(() => {
    const uniqueBrands = [...new Set(products.map((p) => p.brand).filter(Boolean))];
    setAvailableOptions({
      brands: uniqueBrands.sort(),
    });
  }, []);

  const handleCheckboxSelect = (filterType, option) => {
    const value = option.value || option;
    setFilters((prev) => {
      const currentList = prev[filterType];
      let updatedList;
      if (currentList.includes(value)) {
        updatedList = currentList.filter((item) => item !== value);
      } else {
        updatedList = [...currentList, value];
      }
      const newFilters = { ...prev, [filterType]: updatedList };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setFilters((prev) => {
      const newFilters = { ...prev, sortBy: sortValue };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const clearAllFilters = () => {
    const emptyFilters = {
      petTypes: [],
      categories: [],
      brands: [],
      discounts: [],
      priceRanges: [],
      ratings: [],
      sortBy: "",
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  const petTypeOptions = ["Dogs", "Cats", "Birds", "Fishes"];
  const categoryOptions = ["Food", "Toys & Entertainment", "Homes & Beds", "Health & Medicine", "Accessories", "Grooming"];
  const discountOptions = ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"];
  const priceRangeOptions = [
      { label: "Under ₹500", value: "0-500" },
      { label: "₹1000 – ₹1500", value: "1000-1500" },
      { label: "₹1500 – ₹2000", value: "1500-2000" },
      { label: "₹2000 – ₹2500", value: "2000-2500" },
      { label: "₹2500 – ₹3000", value: "2500-3000" },
      { label: "₹3000 – ₹5000", value: "3000-5000" },
      { label: "₹5000 – ₹10000", value: "5000-10000" },
      { label: "₹10000 – ₹15000", value: "10000-15000" },
      { label: "₹15000 and more", value: "15000-999999" },
    ];
  const ratingOptions = [
    { label: "⭐⭐⭐⭐ & above", value: "4" },
    { label: "⭐⭐⭐ & above", value: "3" },
    { label: "⭐⭐ & above", value: "2" },
    { label: "⭐ & above", value: "1" },
  ];

  const sidebarClasses = `fixed top-0 right-0 z-50 w-full md:w-80 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      <div className={sidebarClasses}>
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold">Filters</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <button
            onClick={clearAllFilters}
            className="w-full text-center text-orange-500 font-semibold mb-4 hover:underline"
          >
            Clear All Filters
          </button>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Sort by Price</h3>
            <select
              value={filters.sortBy}
              onChange={handleSortChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select an option</option>
              <option value="low-to-high">Low → High</option>
              <option value="high-to-low">High → Low</option>
            </select>
          </div>

          <hr className="mb-6" />

          <FilterGroup
            title="Pet Type"
            options={petTypeOptions}
            selected={filters.petTypes}
            onSelect={(option) => handleCheckboxSelect("petTypes", option)}
          />
          <FilterGroup
            title="Category"
            options={categoryOptions}
            selected={filters.categories}
            onSelect={(option) => handleCheckboxSelect("categories", option)}
          />
          <FilterGroup
            title="Brand"
            options={availableOptions.brands}
            selected={filters.brands}
            onSelect={(option) => handleCheckboxSelect("brands", option)}
          />
          <FilterGroup
            title="Discounts"
            options={discountOptions.map((d) => ({ label: `${d}% Off`, value: d }))}
            selected={filters.discounts}
            onSelect={(option) => handleCheckboxSelect("discounts", option)}
          />
          <FilterGroup
            title="Price Range"
            options={priceRangeOptions}
            selected={filters.priceRanges}
            onSelect={(option) => handleCheckboxSelect("priceRanges", option)}
          />
          <FilterGroup
            title="Ratings"
            options={ratingOptions}
            selected={filters.ratings}
            onSelect={(option) => handleCheckboxSelect("ratings", option)}
          />
        </div>
      </div>
    </>
  );
}
