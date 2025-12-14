import React, { useState } from "react";
import { X } from "lucide-react";

export default function NotificationsModal({ onClose }) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Order Update",
      message: "Your order #12345 has been shipped.",
      details:
        "Your order #12345 has been shipped and is expected to arrive within 3-5 business days. Track it in the Orders section.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Delivery Success",
      message: "Order #12346 delivered successfully!",
      details:
        "Your order #12346 has been delivered. We hope you enjoy your purchase. Please rate your experience.",
      time: "1 day ago",
      read: false,
    },
    {
      id: 3,
      title: "Return Request",
      message: "Your return request #12347 is being processed.",
      details:
        "Your return request for order #12347 is under review. You will be notified once approved.",
      time: "3 days ago",
      read: true,
    },
    {
      id: 4,
      title: "Coupon Alert",
      message: "Get 20% off on your next order!",
      details:
        "Use coupon code SAVE20 at checkout. Valid until the end of this week.",
      time: "5 days ago",
      read: false,
    },
    {
      id: 5,
      title: "Profile Reminder",
      message: "Complete your profile to get personalized offers.",
      details:
        "Update your address and preferences in your profile to receive tailored deals and faster deliveries.",
      time: "1 week ago",
      read: true,
    },
  ]);

  const [selectedNotification, setSelectedNotification] = useState(null);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
    setSelectedNotification(null);
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/30 transition"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Title + Actions */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <div className="space-x-3">
            <button
              onClick={markAllRead}
              className="text-sm font-semibold text-red-600 hover:underline"
            >
              Mark all as read
            </button>
            <button
              onClick={clearAll}
              className="text-sm font-semibold text-red-600 hover:underline"
            >
              Clear all
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="max-h-72 overflow-y-auto space-y-3">
          {notifications.length === 0 ? (
            <p className="text-gray-500 text-center">No notifications yet</p>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                onClick={() => {
                  setSelectedNotification(n);
                  markAsRead(n.id);
                }}
                className={`cursor-pointer p-3 rounded-lg border transition hover:shadow-md ${
                  n.read
                    ? "bg-gray-50 text-gray-600"
                    : "bg-orange-50 text-gray-800"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{n.title}</span>
                  <span className="text-xs text-gray-500">{n.time}</span>
                </div>
                <p className="text-sm">{n.message}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Detail Popup */}
      {selectedNotification && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/80 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl w-full max-w-sm p-6 relative">
            <button
              onClick={() => setSelectedNotification(null)}
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/30 transition"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <h3 className="text-lg font-semibold mb-2">
              {selectedNotification.title}
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              {selectedNotification.time}
            </p>
            <p className="text-gray-700">{selectedNotification.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}
