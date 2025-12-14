// src/components/home/TopOffers.jsx
import products from "../../data/products";
import OfferProductCard from "./OfferProductCard";

export default function TopOffers() {
  // sort products by discount (highest first)
  const topDiscounted = [...products]
    .sort((a, b) => b.discountPercent - a.discountPercent)
    .slice(0, 12); // take top 12

  if (topDiscounted.length === 0) return null;

  return (
    <section className="my-12 px-4">
      <h2 className="text-2xl font-bold mb-6">🔥 Top Offers</h2>

      {/* Grid: 1 per row on mobile, 4 per row on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topDiscounted.map((product) => (
          <OfferProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
