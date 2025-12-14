import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import SupportPage from "./pages/SupportPage.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import CartWishlistDrawer from "./components/layout/CartWishlistDrawer.jsx";
import AccountSidebar from "./components/layout/AccountSidebar.jsx";
import BlogRoutes from "./BlogRoutes.jsx";   // 👈 add this

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-80 text-center">
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base text-charcoal">
      <Header />
      <CartWishlistDrawer />
      <AccountSidebar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/faq" element={<FAQPage />} />

          {/* ✅ Blog routes go here */}
          <Route path="/blog/*" element={<BlogRoutes />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
