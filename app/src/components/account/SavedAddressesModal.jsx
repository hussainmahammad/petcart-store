import React, { useState } from "react";
import { X, Pencil, Trash2, Plus } from "lucide-react";

// FloatingInput for consistent design
const FloatingInput = ({ label, type, name, value, onChange }) => {
  const inputId = `input-${name}`;
  return (
    <div className="relative">
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer w-full border border-white/40 rounded-xl p-3 bg-white/50 
                   shadow-sm focus:outline-none"
      />
      <label
        htmlFor={inputId}
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 
          text-gray-500 transition-all peer-focus:text-xs peer-focus:top-2 
          ${value ? "text-xs top-2 text-orange-600" : "text-sm"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default function SavedAddressesModal({ onClose }) {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: "Home",
      name: "Hussain Mahammad",
      phone: "+91 9876543210",
      address: "123 Main Street",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500001",
    },
    {
      id: 2,
      label: "Office",
      name: "Hussain Mahammad",
      phone: "+91 9876543210",
      address: "456 Corporate Park",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500002",
    },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({});
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (
      !formData.label ||
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.pincode
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      setAddresses((prev) =>
        prev.map((a) => (a.id === editId ? { ...formData, id: editId } : a))
      );
    } else {
      setAddresses((prev) => [...prev, { ...formData, id: Date.now() }]);
    }

    setFormData({});
    setEditId(null);
    setIsAdding(false);
  };

  const handleEdit = (addr) => {
    setFormData(addr);
    setEditId(addr.id);
    setIsAdding(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      setAddresses((prev) => prev.filter((a) => a.id !== id));
    }
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

        <h2 className="text-lg font-semibold mb-4">Saved Addresses</h2>

        {/* Address List */}
        {!isAdding && (
          <div className="space-y-4">
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className="p-4 border border-gray-200 rounded-xl bg-white/60 shadow-sm flex justify-between items-start hover:shadow-md transition"
              >
                <div>
                  <p className="font-semibold text-orange-600">{addr.label}</p>
                  <p className="text-sm text-gray-700">{addr.name}</p>
                  <p className="text-sm text-gray-700">{addr.phone}</p>
                  <p className="text-sm text-gray-600">
                    {addr.address}, {addr.city}, {addr.state} - {addr.pincode}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(addr)}
                    className="p-2 rounded-full hover:bg-orange-100 transition"
                  >
                    <Pencil className="w-4 h-4 text-orange-600" />
                  </button>
                  <button
                    onClick={() => handleDelete(addr.id)}
                    className="p-2 rounded-full hover:bg-red-100 transition"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
            ))}

            {/* Add Button */}
            <button
              onClick={() => setIsAdding(true)}
              className="flex items-center justify-center w-full border-2 border-dashed border-gray-400 py-3 rounded-lg text-gray-600 hover:bg-gray-50"
            >
              <Plus className="w-5 h-5 mr-2" /> Add New Address
            </button>
          </div>
        )}

        {/* Add/Edit Form */}
        {isAdding && (
          <div className="space-y-3">
            <FloatingInput
              label="Label (Home, Office)"
              type="text"
              name="label"
              value={formData.label || ""}
              onChange={handleChange}
            />
            <FloatingInput
              label="Full Name"
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
            />
            <FloatingInput
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
            />
            <FloatingInput
              label="Address Line"
              type="text"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
            />
            <FloatingInput
              label="City"
              type="text"
              name="city"
              value={formData.city || ""}
              onChange={handleChange}
            />
            <FloatingInput
              label="State"
              type="text"
              name="state"
              value={formData.state || ""}
              onChange={handleChange}
            />
            <FloatingInput
              label="Pincode"
              type="text"
              name="pincode"
              value={formData.pincode || ""}
              onChange={handleChange}
            />

            <div className="flex justify-between space-x-2 mt-3">
              <button
                onClick={() => {
                  setIsAdding(false);
                  setFormData({});
                  setEditId(null);
                }}
                className="w-1/2 border border-gray-400 py-2 rounded-xl hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="w-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 rounded-xl shadow-md hover:from-orange-600 hover:to-orange-700 transition"
              >
                {editId ? "Update" : "Save"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
