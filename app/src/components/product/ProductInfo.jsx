import { useState } from "react";
import { useCart } from "../../context/CartContext";
import AddressSelector from "./AddressSelector.jsx";

// Helper function to render star ratings
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // SVG for a full star
  const fullStarSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-orange-400 inline"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.44-.914 2.004-.914 2.444 0l2.625 5.463 6.096.886c1.004.146 1.402 1.45.155 1.5l-4.417 4.298 1.043 6.071c.175 1.018-.842 1.782-1.748 1.282l-5.46-2.875-5.46 2.875c-.906.5-2.614-.264-1.748-1.282l1.043-6.071-4.417-4.298c-.753-.732-.355-2.004 1.5-1.5l6.096-.886L10.788 3.21z"
        clipRule="evenodd"
      />
    </svg>
  );

  // SVG for a half star (using a clip-path)
  const halfStarSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-4 h-4 text-orange-400 inline"
    >
      <defs>
        <clipPath id="half-star-clip">
          <rect x="0" y="0" width="12" height="24" />
        </clipPath>
      </defs>
      <path
        fill="currentColor"
        clipPath="url(#half-star-clip)"
        d="M10.788 3.21c.44-.914 2.004-.914 2.444 0l2.625 5.463 6.096.886c1.004.146 1.402 1.45.155 1.5l-4.417 4.298 1.043 6.071c.175 1.018-.842 1.782-1.748 1.282l-5.46-2.875-5.46 2.875c-.906.5-2.614-.264-1.748-1.282l1.043-6.071-4.417-4.298c-.753-.732-.355-2.004 1.5-1.5l6.096-.886L10.788 3.21z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.123 5.166 5.45.755a.562.562 0 01.328.981l-4.107 3.738 1.153 5.132a.562.562 0 01-.84.6l-4.63-2.585-4.63 2.585a.562.562 0 01-.84-.6l1.153-5.132-4.107-3.738a.562.562 0 01.328-.981l5.46-.755 2.124-5.166z"
      />
    </svg>
  );

  // SVG for an empty star
  const emptyStarSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 text-gray-300 inline"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.123 5.166 5.45.755a.562.562 0 01.328.981l-4.107 3.738 1.153 5.132a.562.562 0 01-.84.6l-4.63-2.585-4.63 2.585a.562.562 0 01-.84-.6l1.153-5.132-4.107-3.738a.562.562 0 01.328-.981l5.46-.755 2.124-5.166z"
      />
    </svg>
  );

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(fullStarSVG);
  }

  // Add half star if applicable
  if (hasHalfStar) {
    stars.push(halfStarSVG);
  }

  // Add empty stars to fill the rest
  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(emptyStarSVG);
  }

  return stars;
};

export default function ProductInfo({ product, section = "all" }) {
  const {
    cartItems,
    wishlistItems,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
  } = useCart();

  const discountedPrice = Math.round(
    product.original_price * (1 - product.discountPercent / 100)
  );
  const inCart = cartItems.some((item) => item.id === product.id);
  const inWishlist = wishlistItems.some((item) => item.id === product.id);

  const [qty, setQty] = useState(1);

  return (
    <div className="space-y-3">
      {/* 🔹 BASIC INFO (Right Column) */}
      {(section === "basic" || section === "all") && (
        <>
          {/* Title + Metadata */}
          <div>
            <h1 className="text-xl font-semibold leading-tight">
              {product.short_name}
            </h1>
            <p className="text-sm text-gray-500 flex items-center gap-2 flex-wrap">
              <span>{product.brand}</span>
              <span className="text-xs text-gray-400">•</span>
              <span>{product.pet_type}</span>
              <span className="text-xs text-gray-400">•</span>
              <span>{product.category}</span>
            </p>
          </div>

          {/* Ratings + Reviews */}
          <div className="flex items-center gap-2 text-sm">
            {renderStars(product.rating)}
            <span className="text-gray-500">({product.reviews} reviews)</span>
          </div>

          {/* Short description */}
          {product.short_description && (
            <p className="text-sm text-gray-600 leading-snug">
              {product.short_description}
            </p>
          )}

          {/* Quick Specs */}
          <ul className="text-xs text-gray-700 space-y-0.5">
            {product.weight && (
              <li>
                <strong>Weight:</strong> {product.weight.value}{" "}
                {product.weight.unit}
              </li>
            )}
            {product.package_dimensions && (
              <li>
                <strong>Dimensions:</strong> {product.package_dimensions.length}{" "}
                × {product.package_dimensions.width} ×{" "}
                {product.package_dimensions.height}{" "}
                {product.package_dimensions.unit}
              </li>
            )}
            {product.stock !== undefined && (
              <li
                className={`font-medium ${
                  product.stock > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : "Out of stock"}
              </li>
            )}
          </ul>

          {/* Delivery Section */}
          <div className="pt-2 border-t">
            <AddressSelector />
          </div>
        </>
      )}

      {/* 🔹 BUY BOX (Left Column under Gallery) */}
      {(section === "buy" || section === "all") && (
        <>
          {/* Price Block (reordered as per your idea) */}
          <div className="text-base">
            <span className="line-through text-gray-400 mr-2">
              ₹{product.original_price}
            </span>
            <span className="text-green-600 font-medium text-sm">
              {product.discountPercent}% OFF
            </span>
            <div className="text-xl font-bold text-orange-600">
              ₹{discountedPrice}
            </div>
          </div>

          {/* Quantity selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Qty:</span>
            <div className="flex items-center border rounded-lg text-sm">
              <button
                className="px-2 py-1"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="px-3">{qty}</span>
              <button
                className="px-2 py-1"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            {/* Cart button */}
            <button
              className={`flex-1 py-2 rounded-md text-sm font-medium transition ${
                inCart
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
              onClick={() =>
                inCart
                  ? removeFromCart(product.id)
                  : addToCart({ ...product, qty })
              }
            >
              {inCart ? "Added to Cart" : "Add to Cart"}
            </button>

            {/* Wishlist button */}
            <button
              className={`flex-1 py-2 rounded-md border text-sm font-medium transition ${
                inWishlist
                  ? "text-gray-800 border border-[#d9cfec] bg-[#d9cfec] hover:bg-[#cbbdea]"
                  : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
              }`}
              onClick={() =>
                inWishlist
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
            >
              {inWishlist ? "Wishlisted" : "Wishlist"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}