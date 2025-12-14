import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // ✅ Add to Cart (respects product.qty if provided)
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + (product.qty || 1) }
            : item
        );
      }
      return [...prev, { ...product, qty: product.qty || 1 }];
    });
  };

  // ✅ Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Increase qty by 1
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ✅ Decrease qty (min 1)
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // ✅ Clear Cart (new)
  const clearCart = () => {
    setCartItems([]);
  };

  // ✅ Add to Wishlist
  const addToWishlist = (product) => {
    setWishlistItems((prev) =>
      prev.find((item) => item.id === product.id) ? prev : [...prev, product]
    );
  };

  // ✅ Remove from Wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart, // ✅ now available everywhere
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
