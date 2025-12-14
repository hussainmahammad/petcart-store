// src/components/product/SimilarProducts.jsx
import React from "react";
import products from "../../data/products";
import ProductCard from "../shop/ProductCard";

export default function SimilarProducts({ product, current }) {
  // ProductPage passes `current={product}` — accept both prop names
  const prod = product || current;
  if (!prod) return null;

  const normalize = (v) =>
    (Array.isArray(v) ? v[0] : v || "")
      .toString()
      .trim()
      .toLowerCase();

  // Get pet type and category for matching
  const petType = prod.pet_type;
  const prodCategory = normalize(prod.category) || normalize(prod.product_tags);

  // First try matching by pet type AND category (case-insensitive)
  let similar = products
    .filter((p) => {
      if (!p) return false;
      if (String(p.id) === String(prod.id)) return false; // exclude self
      const pCategory = normalize(p.category) || normalize(p.product_tags);
      // ✅ Now filtering by both pet_type and category
      return p.pet_type === petType && prodCategory && pCategory === prodCategory;
    })
    .slice(0, 9);

  // Fallback: if none found, try tag intersection
  if (similar.length === 0 && Array.isArray(prod.product_tags)) {
    const prodTags = prod.product_tags.map((t) =>
      t.toString().trim().toLowerCase()
    );
    similar = products
      .filter((p) => {
        if (!p) return false;
        if (String(p.id) === String(prod.id)) return false;
        if (!Array.isArray(p.product_tags)) return false;
        const pTags = p.product_tags.map((t) =>
          t.toString().trim().toLowerCase()
        );
        // ✅ Now filtering by pet_type for the fallback as well
        return p.pet_type === petType && pTags.some((t) => prodTags.includes(t));
      })
      .slice(0, 9);
  }

  // If still nothing, show a small message
  if (!similar || similar.length === 0) {
    return (
      <div>
        <h3 className="text-lg font-semibold mb-3">Similar Products</h3>
        <p className="text-sm text-gray-500">No similar products found.</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Similar Products</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {similar.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}