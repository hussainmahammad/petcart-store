import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import products from "../data/products";
import SearchBar from "../components/shop/SearchBar";
import FilterSidebar from "../components/shop/FilterSidebar";
import FilterTag from "../components/shop/FilterTag";
import ProductGrid from "../components/shop/ProductGrid";
import OffersBanner from "../components/shop/OffersBanner";

export default function ShopPage() {
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    petTypes: [],
    categories: [],
    brands: [],
    discounts: [],
    priceRanges: [],
    ratings: [],
    sortBy: "",
    searchTerm: "",
  });
  const [filteredProducts, setFilteredProducts] = useState(products);

  // When query string changes (e.g. navigation from home /shop?category=Food),
  // update the category filter. This handles navigation both when the page mounts
  // and when the user clicks another category link while on the app.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    if (cat) {
      setFilters((prev) => {
        // avoid unnecessary updates if already set
        if (prev.categories.length === 1 && prev.categories[0] === cat) return prev;
        return { ...prev, categories: [cat] };
      });
    }
  }, [location.search]);

  // apply filters whenever filters state changes
  const applyFilters = useCallback(() => {
    let newFilteredProducts = [...products];

    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      newFilteredProducts = newFilteredProducts.filter((p) =>
        (p.short_name || "").toLowerCase().includes(term) ||
        (p.category || "").toLowerCase().includes(term) ||
        (p.brand || "").toLowerCase().includes(term)
      );
    }

    if (filters.petTypes.length > 0) {
      newFilteredProducts = newFilteredProducts.filter((p) =>
        filters.petTypes.includes(p.pet_type || p.petType || "")
      );
    }

    if (filters.categories.length > 0) {
      newFilteredProducts = newFilteredProducts.filter((p) =>
        filters.categories.includes(p.category)
      );
    }

    if (filters.brands.length > 0) {
      newFilteredProducts = newFilteredProducts.filter((p) =>
        filters.brands.includes(p.brand)
      );
    }

    if (filters.discounts.length > 0) {
      newFilteredProducts = newFilteredProducts.filter((p) =>
        filters.discounts.includes(String(p.discountPercent ?? p.discount ?? 0))
      );
    }

    if (filters.priceRanges.length > 0) {
      newFilteredProducts = newFilteredProducts.filter((p) => {
        const discountedPrice = Math.round(
          (p.original_price ?? p.price ?? 0) * (1 - (p.discountPercent ?? p.discount ?? 0) / 100)
        );
        return filters.priceRanges.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return discountedPrice >= min && discountedPrice <= max;
        });
      });
    }

    if (filters.ratings.length > 0) {
      newFilteredProducts = newFilteredProducts.filter((p) =>
        filters.ratings.some((rating) => (p.rating ?? 0) >= Number(rating))
      );
    }

    if (filters.sortBy === "low-to-high") {
      newFilteredProducts.sort((a, b) => {
        const aPrice = Math.round((a.original_price ?? a.price ?? 0) * (1 - (a.discountPercent ?? a.discount ?? 0) / 100));
        const bPrice = Math.round((b.original_price ?? b.price ?? 0) * (1 - (b.discountPercent ?? b.discount ?? 0) / 100));
        return aPrice - bPrice;
      });
    } else if (filters.sortBy === "high-to-low") {
      newFilteredProducts.sort((a, b) => {
        const aPrice = Math.round((a.original_price ?? a.price ?? 0) * (1 - (a.discountPercent ?? a.discount ?? 0) / 100));
        const bPrice = Math.round((b.original_price ?? b.price ?? 0) * (1 - (b.discountPercent ?? b.discount ?? 0) / 100));
        return bPrice - aPrice;
      });
    }

    setFilteredProducts(newFilteredProducts);
  }, [filters]);

  useEffect(() => {
    applyFilters();
  }, [filters, applyFilters]);

  const toggleSidebar = () => setIsSidebarOpen((s) => !s);

  const handleFilterChange = (newFilters) => {
    // newFilters is an object with the updated filter group(s);
    // merge into existing filters so other filters remain intact
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleSearchChange = (searchTerm) => {
    setFilters((prev) => ({ ...prev, searchTerm }));
  };

  const handleRemoveTag = (filterType, value) => {
    setFilters((prev) => {
      const newList = (prev[filterType] || []).filter((item) => item !== value);
      return { ...prev, [filterType]: newList };
    });
  };

  const clearAllFilters = () => {
    setFilters({
      petTypes: [],
      categories: [],
      brands: [],
      discounts: [],
      priceRanges: [],
      ratings: [],
      sortBy: "",
      searchTerm: "",
    });
  };

  const activeFilters = [
    ...filters.petTypes.map((v) => ({ type: "petTypes", value: v, label: v })),
    ...filters.categories.map((v) => ({ type: "categories", value: v, label: v })),
    ...filters.brands.map((v) => ({ type: "brands", value: v, label: v })),
    ...filters.discounts.map((v) => ({ type: "discounts", value: v, label: `${v}% Off` })),
    ...filters.priceRanges.map((v) => ({ type: "priceRanges", value: v, label: v })),
    ...filters.ratings.map((v) => ({ type: "ratings", value: v, label: `${v}⭐ & up` })),
  ];
  if (filters.searchTerm) {
    activeFilters.push({
      type: "searchTerm",
      value: filters.searchTerm,
      label: `Search: "${filters.searchTerm}"`,
    });
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <OffersBanner />
      <SearchBar onSearch={handleSearchChange} onToggleFilters={toggleSidebar} />
      <FilterSidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        onFilterChange={handleFilterChange}
        currentFilters={filters} // pass current filters down so the sidebar shows checked states
      />

      <div className="mx-auto max-w-7xl px-4 py-4">
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 items-center">
            <span className="text-gray-600 font-semibold">Active Filters:</span>
            {activeFilters.map((filter, idx) => (
              <FilterTag
                key={idx}
                label={filter.label}
                onRemove={() => handleRemoveTag(filter.type, filter.value)}
              />
            ))}
            <button
              onClick={clearAllFilters}
              className="text-orange-500 hover:underline text-sm ml-2"
            >
              Clear All
            </button>
          </div>
        )}

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-10 text-gray-500 text-lg">
            No products found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
}
