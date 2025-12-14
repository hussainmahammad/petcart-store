import { useState } from "react";
import ProductCard from "./ProductCard";
import LoadMoreButton from "./LoadMoreButton";

export default function ProductGrid({ products }) {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8); // show 8 more each time
  };

  return (
    <div className="space-y-6">
      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More button */}
      {visibleCount < products.length && (
        <div className="flex justify-center">
          <LoadMoreButton onClick={handleLoadMore} />
        </div>
      )}
    </div>
  );
}
