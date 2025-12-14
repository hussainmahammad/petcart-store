import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import BlogRoutes from "./BlogRoutes.jsx";
import "./index.css";

import { CartProvider } from "./context/CartContext.jsx";
import { SupportProvider } from "./context/SupportContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <SupportProvider>
          <Routes>
            {/* 🔹 Blog section */}
            <Route path="/blog/*" element={<BlogRoutes />} />

            {/* 🔹 Main site */}
            <Route path="/*" element={<App />} />
          </Routes>
        </SupportProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
