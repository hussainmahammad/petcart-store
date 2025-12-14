import React, { useState } from 'react';
import products from '../../data/products';
import FilterSidebar from '../FilterSidebar';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [filters, setFilters] = useState({
    petTypes: [],
    categories: [],
    brands: [],
    discounts: [],
    priceRanges: [],
    ratings: [],
    sortBy: "",
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const applyFilters = () => {
    let filteredProducts = [...products];

    // Pet Type Filter
    if (filters.petTypes.length > 0) {
      filteredProducts = filteredProducts.filter(p => filters.petTypes.includes(p.pet_type));
    }

    // Category Filter
    if (filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter(p => filters.categories.includes(p.category));
    }

    // Brand Filter
    if (filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter(p => filters.brands.includes(p.brand));
    }

    // Discounts Filter
    if (filters.discounts.length > 0) {
      filteredProducts = filteredProducts.filter(p => {
        const productDiscount = p.discountPercent;
        return filters.discounts.some(d => parseInt(productDiscount) >= parseInt(d));
      });
    }

    // Price Range Filter
    if (filters.priceRanges.length > 0) {
      filteredProducts = filteredProducts.filter(p => {
        const productPrice = p.original_price;
        return filters.priceRanges.some(range => {
          const [min, max] = range.split('-').map(Number);
          return productPrice >= min && productPrice <= max;
        });
      });
    }

    // Ratings Filter
    if (filters.ratings.length > 0) {
      filteredProducts = filteredProducts.filter(p => {
        const productRating = p.rating;
        return filters.ratings.some(minRating => productRating >= parseFloat(minRating));
      });
    }

    // Sorting Logic is applied last, to the fully filtered list
    if (filters.sortBy === 'low-to-high') {
      filteredProducts.sort((a, b) => a.original_price - b.original_price);
    } else if (filters.sortBy === 'high-to-low') {
      filteredProducts.sort((a, b) => b.original_price - a.original_price);
    }

    return filteredProducts;
  };

  const filteredProducts = applyFilters();

  return (
    <div className="flex">
      <FilterSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onFilterChange={setFilters}
      />
      <div className="flex-1 p-8">
        <button onClick={() => setIsSidebarOpen(true)} className="px-4 py-2 bg-orange-500 text-white rounded mb-4">
          Open Filters
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
