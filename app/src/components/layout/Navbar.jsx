import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex items-center gap-4 text-sm font-medium">
      <Link to="/" className="hover:underline">Home</Link>
      <button id="my-account-trigger" className="hover:underline">My Account</button>
      <Link to="/shop" className="hover:underline">Shop</Link>
      <Link to="/offers" className="hover:underline">Offers</Link>
      <Link to="/support" className="hover:underline">Support</Link>
      <button id="cart-trigger" className="btn">Cart & Wishlist</button>
    </nav>
  )
}
