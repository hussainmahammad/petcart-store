import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

// Helper function to render star ratings
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // SVG for a full star
  const fullStarSVG = (
    <svg
      key="full"
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
      key="half"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-4 h-4 text-orange-400 inline"
    >
      <defs>
        <clipPath id="half-star-clip-offer">
          <rect x="0" y="0" width="12" height="24" />
        </clipPath>
      </defs>
      <path
        fill="currentColor"
        clipPath="url(#half-star-clip-offer)"
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
      key="empty"
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

export default function OfferProductCard({ product }) {
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
  const discountText = product.discountPercent + "%";

  // Check if product is already in cart/wishlist
  const inCart = cartItems.some((item) => item.id === product.id);
  const inWishlist = wishlistItems.some((item) => item.id === product.id);

  const productImage = product.image || product.images?.[0];

  return (
    <div className="card p-3 hover:shadow-lg transition flex flex-col">
      {/* 🔹 Image Section */}
      <Link to={`/product/${product.id}`}>
        <div className="h-36 md:h-48 bg-white/60 rounded-xl mb-3 relative overflow-hidden flex items-center justify-center">
          {productImage ? (
            <img
              src={productImage}
              alt={product.short_name}
              className="max-h-full max-w-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-xs text-dim">
              No Image
            </div>
          )}
        </div>
      </Link>

      {/* 🔹 Product Info */}
      <div className="flex-1 flex flex-col">
        <Link to={`/product/${product.id}`}>
          <div className="text-sm font-semibold">{product.short_name}</div>
        </Link>
        <div className="text-xs text-dim">{product.brand ?? "Brand"}</div>

        <div className="mt-1 text-sm">
          <span className="font-bold">₹{discountedPrice}</span>
          <span className="line-through text-dim ml-2">₹{product.original_price}</span>
          <span className="ml-2 text-green-600 text-xs font-medium">{discountText} OFF</span>
        </div>

        <div className="mt-2 text-xs">
          {renderStars(product.rating ?? 4.0)}
        </div>

        {/* 🔹 Action Buttons */}
        <div className="mt-3 flex gap-2">
          {/* Cart button toggle */}
          <button
            className={`flex-1 px-3 py-2 rounded-lg transition ${
              inCart
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
            onClick={() => (inCart ? removeFromCart(product.id) : addToCart(product))}
          >
            {inCart ? "Added to Cart" : "Add to Cart"}
          </button>

          {/* Wishlist button toggle */}
          <button
            className={`flex-1 px-3 py-2 rounded-lg border transition ${
              inWishlist
                ? "text-gray-800 border border-[#d9cfec] bg-[#d9cfec] hover:bg-[#cbbdea]"
                : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
            }`}
            onClick={() =>
              inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)
            }
          >
            {inWishlist ? "Wishlisted" : "Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}