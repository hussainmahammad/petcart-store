import React, { useState } from "react";
import { X, Search } from "lucide-react";
import jsPDF from "jspdf";

export default function OrdersPage({ onClose }) {
  const [orders, setOrders] = useState([
    {
      id: "ORD12345",
      date: "2025-08-20",
      status: "Delivered",
      items: [
        {
          name: "Dog Food 5kg",
          qty: 1,
          price: 1200,
          image: "https://via.placeholder.com/50x50?text=Dog+Food",
        },
        {
          name: "Chew Toy",
          qty: 2,
          price: 400,
          image: "https://via.placeholder.com/50x50?text=Toy",
        },
      ],
      total: 2000,
      payment: "Paid",
      trackingId: "TRK001234",
    },
    {
      id: "ORD12346",
      date: "2025-08-25",
      status: "Pending",
      items: [
        {
          name: "Cat Litter 10kg",
          qty: 1,
          price: 600,
          image: "https://via.placeholder.com/50x50?text=Litter",
        },
        {
          name: "Cat Toy",
          qty: 1,
          price: 250,
          image: "https://via.placeholder.com/50x50?text=Cat+Toy",
        },
      ],
      total: 850,
      payment: "Pending",
      trackingId: null,
    },
    {
      id: "ORD12347",
      date: "2025-08-28",
      status: "Cancelled",
      items: [
        {
          name: "Bird Cage",
          qty: 1,
          price: 1500,
          image: "https://via.placeholder.com/50x50?text=Cage",
        },
      ],
      total: 1500,
      payment: "Refunded",
      trackingId: null,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      setOrders((prev) =>
        prev.map((o) => (o.id === id ? { ...o, status: "Cancelled" } : o))
      );
      if (selectedOrder?.id === id) {
        setSelectedOrder({ ...selectedOrder, status: "Cancelled" });
      }
    }
  };

  const handleReturn = (id) => {
    if (window.confirm("Request return for this order?")) {
      setOrders((prev) =>
        prev.map((o) =>
          o.id === id ? { ...o, status: "Return Requested" } : o
        )
      );
      if (selectedOrder?.id === id) {
        setSelectedOrder({ ...selectedOrder, status: "Return Requested" });
      }
    }
  };

  const handleDownloadInvoice = (order) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Invoice - ${order.id}`, 20, 20);
    doc.setFontSize(12);
    doc.text(`Date: ${order.date}`, 20, 30);
    doc.text(`Status: ${order.status}`, 20, 40);

    let y = 60;
    doc.text("Items:", 20, y);
    y += 10;
    order.items.forEach((item) => {
      doc.text(
        `${item.name} (x${item.qty}) - ₹${item.price * item.qty}`,
        25,
        y
      );
      y += 10;
    });

    y += 10;
    doc.text(`Total: ₹${order.total}`, 20, y);

    doc.save(`${order.id}_invoice.pdf`);
  };

  const filteredOrders = orders.filter((o) => {
    const query = search.toLowerCase();
    const matchesSearch =
      o.id.toLowerCase().includes(query) ||
      o.status.toLowerCase().includes(query) ||
      o.items.some((item) => item.name.toLowerCase().includes(query));
    const matchesFilter = filter === "All" ? true : o.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      {/* Orders Modal */}
      <div className="bg-white/80 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col relative">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/30">
          <h2 className="text-lg font-semibold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">My Orders</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/40 transition"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Search + Filter */}
        <div className="flex items-center gap-3 p-4 border-b border-white/30 bg-white/50">
          <div className="flex items-center border border-gray-300 rounded-xl px-2 w-2/3 bg-white">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search by product, order ID, or status"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none p-2 bg-transparent text-gray-700 placeholder-gray-400"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-xl p-2 w-1/3 bg-white text-gray-700"
          >
            <option>All</option>
            <option>Delivered</option>
            <option>Pending</option>
            <option>Cancelled</option>
            <option>Return Requested</option>
          </select>
        </div>

        {/* Orders List */}
        <div className="p-4 space-y-4 overflow-y-auto flex-1">
          {filteredOrders.length === 0 ? (
            <p className="text-center text-gray-500">No orders found</p>
          ) : (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                onClick={() => setSelectedOrder(order)}
                className="cursor-pointer border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md bg-white transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="font-semibold text-gray-800">{order.id}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  {order.items.length} items —{" "}
                  <span className="font-semibold text-orange-600">
                    ₹{order.total}
                  </span>
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Order Detail Popup */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/90 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl w-full max-w-lg p-6 relative">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/40 transition"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Order {selectedOrder.id}
            </h3>
            <p className="text-xs text-gray-500 mb-4">{selectedOrder.date}</p>

            {/* Items */}
            <div className="space-y-3 mb-3">
              {selectedOrder.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover border"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-gray-600">
                      Qty: {item.qty} —{" "}
                      <span className="font-semibold text-orange-600">
                        ₹{item.price * item.qty}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-semibold mb-3 text-gray-800">
              Total:{" "}
              <span className="text-orange-600">₹{selectedOrder.total}</span>
            </p>

            <span
              className={`inline-block mb-3 px-3 py-1 text-sm rounded-full ${
                selectedOrder.status === "Delivered"
                  ? "bg-green-100 text-green-700"
                  : selectedOrder.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : selectedOrder.status === "Cancelled"
                  ? "bg-red-100 text-red-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {selectedOrder.status}
            </span>

            {/* Actions */}
            <div className="flex flex-wrap gap-2">
              {selectedOrder.trackingId && (
                <a
                  href={`https://tracking.example.com/${selectedOrder.trackingId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Track Order
                </a>
              )}
              {selectedOrder.status === "Pending" && (
                <button
                  onClick={() => handleCancel(selectedOrder.id)}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Cancel Order
                </button>
              )}
              {selectedOrder.status === "Delivered" && (
                <button
                  onClick={() => handleReturn(selectedOrder.id)}
                  className="px-3 py-1 text-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Return Request
                </button>
              )}
              <button
                onClick={() => handleDownloadInvoice(selectedOrder)}
                className="px-3 py-1 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Download Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
