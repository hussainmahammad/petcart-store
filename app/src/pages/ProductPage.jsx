import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductGallery from "../components/product/ProductGallery.jsx";
import ProductInfo from "../components/product/ProductInfo.jsx";
import ProductDetailsTabs from "../components/product/ProductDetailsTabs.jsx";
import ReviewsSection from "../components/product/ReviewsSection.jsx";
import SimilarProducts from "../components/product/SimilarProducts.jsx";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 my-6">
        <div className="card p-6 text-center">
          <h2 className="text-lg font-semibold">Product not found</h2>
          <p className="text-dim mt-2">Please go back to the shop.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8ff]">
      <div className="mx-auto max-w-7xl px-4 py-6">
        {/* 🔹 Gallery + Info side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column: Gallery + Buy Box under it */}
          <div className="flex flex-col gap-6">
            <div className="card p-4">
              <ProductGallery images={product.images} name={product.short_name} />
            </div>
            <div className="card p-4">
              <ProductInfo product={product} section="buy" />
            </div>
          </div>

          {/* Right column: Basic Info + Delivery */}
          <div className="card p-4">
            <ProductInfo product={product} section="basic" />
          </div>
        </div>

        {/* 🔹 Tabs Section (More Info / Description) */}
        <div className="mt-6 card p-4">
          <ProductDetailsTabs product={product} />
        </div>

        {/* 🔹 Reviews */}
        <div className="mt-6 card p-4">
          <ReviewsSection product={product} hasPurchased={true} />
        </div>

        {/* 🔹 Similar Products */}
        <div className="mt-6 card p-4">
          <SimilarProducts current={product} />
        </div>
      </div>
    </div>
  );
}