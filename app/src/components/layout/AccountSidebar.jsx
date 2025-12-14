import React, { useState } from "react";
import { X } from "lucide-react";
import AuthModal from "../account/AuthModal";
import NotificationsModal from "../account/NotificationsModal";
import ProfileModal from "../account/ProfileModal";
import SavedAddressesModal from "../account/SavedAddressesModal";
import CouponsModal from "../account/CouponsModal";
import OrdersPage from "../account/OrdersPage";

export default function AccountSidebar({ isOpen, onClose }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showAddresses, setShowAddresses] = useState(false);
  const [showCoupons, setShowCoupons] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    onClose();
  };

  return (
    <>
      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/70 backdrop-blur-lg shadow-2xl border border-white/30 rounded-l-2xl transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/30">
          <h2 className="text-lg font-semibold text-gray-800 drop-shadow-sm">
            My Account
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/30 transition"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {!isLoggedIn ? (
            // Pre-login state
            <div className="text-center bg-gradient-to-r from-orange-100/70 to-orange-200/50 p-4 rounded-xl shadow-md">
              <p className="mb-4 text-gray-800 font-medium text-xl">
                Welcome to PetCart.Shop
              </p>
              <p className="text-sm text-gray-600 mb-4 font-semibold">
                Sign in to manage your account seamlessly.
              </p>
              <button
                onClick={() => setShowAuthModal(true)}
                className="w-full bg-orange-500 text-white font-semibold py-2 rounded-xl shadow-md hover:bg-orange-600 transition"
              >
                Login / Sign Up
              </button>
            </div>
          ) : (
            // Post-login state
            <ul className="space-y-3">
              {[
                { name: "Notifications", action: () => setShowNotifications(true) },
                { name: "Profile", action: () => setShowProfile(true) },
                { name: "Saved Addresses", action: () => setShowAddresses(true) },
                { name: "Orders", action: () => setShowOrders(true) },
                { name: "Coupons", action: () => setShowCoupons(true) },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={item.action}
                    className="w-full text-left p-3 rounded-xl bg-white/40 hover:bg-orange-100/60 hover:text-orange-700 transition font-medium text-gray-800 shadow-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}

              {/* Logout */}
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold shadow-md transition"
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Modals */}
      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setShowAuthModal(false);
          }}
        />
      )}
      {showNotifications && (
        <NotificationsModal onClose={() => setShowNotifications(false)} />
      )}
      {showProfile && <ProfileModal onClose={() => setShowProfile(false)} />}
      {showAddresses && (
        <SavedAddressesModal onClose={() => setShowAddresses(false)} />
      )}
      {showCoupons && <CouponsModal onClose={() => setShowCoupons(false)} />}
      {showOrders && <OrdersPage onClose={() => setShowOrders(false)} />}
    </>
  );
}
