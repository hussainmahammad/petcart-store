import React, { useState } from "react";
import { X, Tag } from "lucide-react";

export default function CouponsModal({ onClose }) {
  const [coupons] = useState([
    {
      id: 1,
      code: "WELCOME20",
      discount: "20% OFF",
      minOrder: "₹2500",
      expiry: "2026-12-15",
    },
    {
      id: 2,
      code: "LOYAL15",
      discount: "15% OFF",
      minOrder: "₹5000",
      expiry: "2025-09-10",
    },
    {
      id: 3,
      code: "FESTIVE30",
      discount: "30% OFF",
      minOrder: "₹10000",
      expiry: "2026-11-20",
    },
  ]);

  const grabOffer = (coupon) => {
    alert(`Offer ${coupon.code} is ready to use! You can apply it at checkout if your cart is above ${coupon.minOrder}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl w-full max-w-lg p-6 relative max-h-[80vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/30 transition"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <h2 className="text-lg font-semibold mb-4">Available Coupons</h2>

        {/* Coupons Grid */}
        {coupons.length === 0 ? (
          <p className="text-center text-gray-500">No active coupons</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coupons.map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-xl border border-white/40 bg-white/50 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center mb-2">
                    <Tag className="w-4 h-4 text-orange-600 mr-2" />
                    <span className="font-semibold text-gray-800">{c.code}</span>
                  </div>
                  <p className="text-lg font-bold text-orange-600">{c.discount}</p>
                  <p className="text-sm text-gray-600">Min Order: {c.minOrder}</p>
                  <p className="text-sm text-gray-500">Expires on: {c.expiry}</p>
                </div>
                <button
                  onClick={() => grabOffer(c)}
                  className="mt-4 w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2.5 rounded-lg shadow-md hover:from-orange-600 hover:to-amber-600 transition"
                >
                  Grab This Offer
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
