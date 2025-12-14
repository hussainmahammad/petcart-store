import { useState } from "react";
import siteConfig from "../../config/siteConfig.json";
import {
  Home,
  UserCircle,
  ShoppingBag,
  Headset,
  ShoppingCart,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import AccountSidebar from "./AccountSidebar";
import CartWishlistDrawer from "../cart/CartWishlistDrawer";

export default function Header() {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();

  // ✅ calculate total cart items
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const desktopMenuItems = [
    { name: "Home", href: "/", icon: Home },
    {
      name: "My Account",
      href: "#",
      icon: UserCircle,
      onClick: () => setIsAccountOpen(true),
    },
    { name: "Shop", href: "/shop", icon: ShoppingBag },
    { name: "Support", href: "/support", icon: Headset },
    {
      name: "Cart",
      href: "#",
      icon: ShoppingCart,
      onClick: () => setIsCartOpen(true),
    },
  ];

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-3 bg-white bg-opacity-90 shadow-md h-[55px]">
      {/* ===== Desktop Header ===== */}
      <a href="/" className="logo hidden md:flex">
        <img
          src={siteConfig.logo}
          alt={`${siteConfig.siteName} Logo`}
          className="h-[50px] w-auto"
        />
      </a>

      <nav className="hidden md:flex">
        <ul className="flex gap-6 font-sans font-bold text-[16px] tracking-wide items-center">
          {desktopMenuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={
                  item.onClick
                    ? (e) => {
                        e.preventDefault();
                        item.onClick();
                      }
                    : undefined
                }
                className="flex items-center gap-1 text-[#2C2C2C] transition-all duration-300 hover:text-brand relative"
              >
                {/* Cart with badge */}
                <item.icon className="h-5 w-5" />
                {item.name === "Cart" && cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
                <span className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300 hover:after:w-full">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ===== Mobile Header ===== */}
      <div className="flex md:hidden w-full items-center justify-between">
        <a href="/" className="flex items-center mr-4">
          <img
            src={siteConfig.logo}
            alt={`${siteConfig.siteName} Logo`}
            className="h-[40px] w-auto"
          />
        </a>

        <div className="flex items-center gap-5 pr-3">
          <a href="/" className="text-gray-600 hover:text-brand transition">
            <Home className="h-7 w-7" />
          </a>
          <button
            onClick={() => setIsAccountOpen(true)}
            className="text-gray-600 hover:text-brand transition"
          >
            <UserCircle className="h-7 w-7" />
          </button>
          <a href="/shop" className="text-gray-600 hover:text-brand transition">
            <ShoppingBag className="h-7 w-7" />
          </a>
          <a
            href="/support"
            className="text-gray-600 hover:text-brand transition"
          >
            <Headset className="h-7 w-7" />
          </a>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-gray-600 hover:text-brand transition"
          >
            <ShoppingCart className="h-7 w-7" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ===== Account Sidebar Integration ===== */}
      <AccountSidebar
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      {/* ===== Cart & Wishlist Drawer Integration ===== */}
      <CartWishlistDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </header>
  );
}
