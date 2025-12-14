import { useState } from "react";
import { X, ShoppingCart, Heart, Trash2, Minus, Plus } from "lucide-react";
import { useCart } from "../../context/CartContext";
import products from "../../data/products";
import { useNavigate } from "react-router-dom";
import AuthModal from "../account/AuthModal";

export default function CartWishlistDrawer({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("cart");
  const [previewImage, setPreviewImage] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const {
    cartItems,
    wishlistItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    removeFromWishlist,
    addToCart,
  } = useCart();

  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("user"); // 👈 check login

  // ✅ calculate subtotal with discounted prices
  const subtotal = cartItems.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return sum;
    const discountedPrice =
      product.original_price -
      (product.original_price * product.discountPercent) / 100;
    return sum + discountedPrice * item.qty;
  }, 0);

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white/70 backdrop-blur-lg border border-white/30 shadow-2xl transform transition-transform rounded-l-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Tabs */}
        <div className="p-4 border-b border-white/40">
          <div className="grid grid-cols-2 bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => setActiveTab("cart")}
              className={`flex items-center justify-center gap-2 py-2 font-medium rounded-xl ${
                activeTab === "cart"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                  : "text-gray-700 hover:bg-white/90"
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              Cart
            </button>
            <button
              onClick={() => setActiveTab("wishlist")}
              className={`flex items-center justify-center gap-2 py-2 font-medium rounded-xl ${
                activeTab === "wishlist"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                  : "text-gray-700 hover:bg-white/90"
              }`}
            >
              <Heart className="h-5 w-5" />
              Wishlist
            </button>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-gray-500 hover:text-black transition"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Body */}
        <div className="p-4 overflow-y-auto h-[calc(100%-70px)]">
          {activeTab === "cart" ? (
            <div>
              {cartItems.length === 0 && (
                <p className="text-center text-gray-500">
                  Your cart is empty 🛒
                </p>
              )}

              {cartItems.map((item) => {
                const product = products.find((p) => p.id === item.id);
                if (!product) return null;

                const discountedPrice =
                  product.original_price -
                  (product.original_price * product.discountPercent) / 100;

                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 border-b border-white/40 pb-3 mb-3 bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm"
                  >
                    {/* Image */}
                    <img
                      src={product.images[0]}
                      alt={product.short_name}
                      className="h-16 w-16 rounded-lg border border-white/40 object-cover cursor-pointer"
                      onClick={() => setPreviewImage(product.images[0])}
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-800">
                        {product.short_name}
                      </p>
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        <span className="line-through text-gray-400">
                          ₹{product.original_price}
                        </span>
                        <span className="text-orange-600 font-semibold">
                          ₹{discountedPrice.toFixed(0)}
                        </span>
                      </div>

                      {/* Qty controls */}
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="p-1 border border-white/40 rounded-md bg-white/80 hover:bg-gray-100"
                        >
                          <Minus className="h-4 w-4 text-gray-700" />
                        </button>
                        <span className="text-gray-700 font-semibold">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="p-1 border border-white/40 rounded-md bg-white/80 hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4 text-gray-700" />
                        </button>
                      </div>
                    </div>

                    {/* Price + remove */}
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-sm font-semibold text-orange-600">
                        ₹{(discountedPrice * item.qty).toFixed(0)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Summary */}
              {cartItems.length > 0 && (
                <div className="mt-6 border-t border-white/40 pt-4 space-y-2">
                  <p className="flex justify-between font-semibold text-gray-800">
                    <span>Subtotal</span>
                    <span className="text-orange-600 font-bold">
                      ₹{subtotal.toFixed(0)}
                    </span>
                  </p>
                  <button
                    onClick={() => {
                      if (!isLoggedIn) {
                        setShowLogin(true);
                      } else {
                        navigate("/checkout");
                        onClose();
                      }
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2.5 rounded-xl shadow-md hover:from-orange-600 hover:to-amber-600 transition"
                  >
                    Checkout →
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>
              {wishlistItems.length === 0 && (
                <p className="text-center text-gray-500">
                  Your wishlist is empty ❤️
                </p>
              )}
              {wishlistItems.map((item) => {
                const product = products.find((p) => p.id === item.id);
                if (!product) return null;

                const discountedPrice =
                  product.original_price -
                  (product.original_price * product.discountPercent) / 100;

                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 border-b border-white/40 pb-3 mb-3 bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.short_name}
                      className="h-16 w-16 rounded-lg border border-white/40 object-cover cursor-pointer"
                      onClick={() => setPreviewImage(product.images[0])}
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-800">
                        {product.short_name}
                      </p>
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        <span className="line-through text-gray-400">
                          ₹{product.original_price}
                        </span>
                        <span className="text-orange-600 font-semibold">
                          ₹{discountedPrice.toFixed(0)}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => {
                          addToCart(product, item.qty || 1);
                          removeFromWishlist(item.id);
                        }}
                        className="px-3 py-1 text-xs border border-white/40 rounded-lg bg-white/80 text-orange-600 hover:bg-gray-100"
                      >
                        Move to Cart
                      </button>
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative">
            <img
              src={previewImage}
              alt="Preview"
              className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-2 right-2 bg-white/80 rounded-full p-1 shadow hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray-800" />
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <AuthModal
          onClose={() => setShowLogin(false)}
          defaultTab="login"
          onLoginSuccess={() => {
            localStorage.setItem(
              "user",
              JSON.stringify({ email: "demo@user.com" })
            );
            setShowLogin(false);
            navigate("/checkout");
            onClose();
          }}
        />
      )}
    </div>
  );
}
