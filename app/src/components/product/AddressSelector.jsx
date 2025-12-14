import { useState } from "react";
import { Plus, MapPin } from "lucide-react";
import DeliveryEstimate from "./DeliveryEstimate";

export default function AddressSelector() {
  // 🔹 Demo saved addresses (later load from backend)
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: "Home",
      name: "Hussain Mahammad",
      mobile: "09505452307",
      address: "12/3 Vivekananda nagar, Proddatur",
      landmark: "Hotel street backside of dargah street",
      state: "ANDHRA PRADESH",
      pincode: "516360",
      isDefault: true,
    },
    {
      id: 2,
      label: "Office",
      name: "Hussain",
      mobile: "9876543210",
      address: "456 Residency Road",
      landmark: "Near City Mall",
      state: "Karnataka",
      pincode: "560034",
      isDefault: false,
    },
  ]);

  const defaultAddress = addresses.find((a) => a.isDefault) || addresses[0];
  const [selected, setSelected] = useState(defaultAddress?.id || null);

  // 🔹 Add new address
  const [showForm, setShowForm] = useState(false);
  const [newAddr, setNewAddr] = useState({
    label: "",
    name: "",
    mobile: "",
    address: "",
    landmark: "",
    state: "",
    pincode: "",
  });

  const handleAddAddress = () => {
    if (!newAddr.label || !newAddr.pincode)
      return alert("Please fill label and pincode");
    const id = addresses.length + 1;
    setAddresses([...addresses, { id, ...newAddr, isDefault: false }]);
    setSelected(id);
    setNewAddr({
      label: "",
      name: "",
      mobile: "",
      address: "",
      landmark: "",
      state: "",
      pincode: "",
    });
    setShowForm(false);
  };

  const selectedAddress = addresses.find((a) => a.id === selected);

  // 🔹 Check Delivery by Pincode
  const [checkPin, setCheckPin] = useState("");
  const [manualPin, setManualPin] = useState(null);

  return (
    <div className="p-4 border rounded-xl bg-white/70">
      <h3 className="text-sm font-semibold mb-2">Deliver to</h3>

      {/* ====================== Saved Addresses ====================== */}
      <select
        value={selected || ""}
        onChange={(e) => {
          setSelected(Number(e.target.value));
          setManualPin(null); // reset manual check if switching
        }}
        className="w-full border rounded-lg px-3 py-2 text-sm"
      >
        {addresses.map((addr) => (
          <option key={addr.id} value={addr.id}>
            {addr.label} – {addr.pincode}
          </option>
        ))}
      </select>

      {selectedAddress && !manualPin && (
        <div className="mt-3 text-sm text-gray-700 space-y-1">
          <p>
            <strong>Address:</strong> {selectedAddress.label}
          </p>
          <p>{selectedAddress.name}</p>
          <p>{selectedAddress.address}</p>
          {selectedAddress.landmark && <p>{selectedAddress.landmark}</p>}
          <p>
            {selectedAddress.state} – {selectedAddress.pincode}
          </p>
          <p>
            {selectedAddress.mobile} <span className="ml-1">📞</span>
          </p>
        </div>
      )}

      {/* ====================== Add New Address ====================== */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="flex items-center gap-2 text-sm text-blue-600 mt-3 hover:underline"
      >
        <Plus size={16} /> Add New Address
      </button>

      {showForm && (
        <div className="mt-3 space-y-2 border-t pt-3">
          <input
            type="text"
            placeholder="Label (Home / Office)"
            value={newAddr.label}
            onChange={(e) => setNewAddr({ ...newAddr, label: e.target.value })}
            className="w-full border rounded px-2 py-1 text-sm"
          />
          <input
            type="text"
            placeholder="Full Name"
            value={newAddr.name}
            onChange={(e) => setNewAddr({ ...newAddr, name: e.target.value })}
            className="w-full border rounded px-2 py-1 text-sm"
          />
          <input
            type="text"
            placeholder="Mobile"
            value={newAddr.mobile}
            onChange={(e) => setNewAddr({ ...newAddr, mobile: e.target.value })}
            className="w-full border rounded px-2 py-1 text-sm"
          />
          <textarea
            placeholder="Address"
            value={newAddr.address}
            onChange={(e) => setNewAddr({ ...newAddr, address: e.target.value })}
            className="w-full border rounded px-2 py-1 text-sm"
            rows={2}
          />
          <input
            type="text"
            placeholder="Landmark"
            value={newAddr.landmark}
            onChange={(e) => setNewAddr({ ...newAddr, landmark: e.target.value })}
            className="w-full border rounded px-2 py-1 text-sm"
          />
          <input
            type="text"
            placeholder="State"
            value={newAddr.state}
            onChange={(e) => setNewAddr({ ...newAddr, state: e.target.value })}
            className="w-full border rounded px-2 py-1 text-sm"
          />
          <input
            type="text"
            placeholder="Pincode"
            value={newAddr.pincode}
            onChange={(e) =>
              setNewAddr({ ...newAddr, pincode: e.target.value })
            }
            className="w-full border rounded px-2 py-1 text-sm"
          />
          <button
            onClick={handleAddAddress}
            className="w-full bg-green-600 text-white py-1.5 rounded text-sm hover:bg-green-700"
          >
            Save Address
          </button>
        </div>
      )}

      {/* ====================== Check Delivery by Pincode ====================== */}
      <div className="mt-4 border-t pt-3">
        <h4 className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
          <MapPin size={14} /> Check delivery to your pincode
        </h4>
        <div className="flex gap-2">
          <input
            type="text"
            value={checkPin}
            onChange={(e) => setCheckPin(e.target.value)}
            placeholder="Enter Pincode"
            className="flex-1 border rounded px-2 py-1 text-sm"
          />
          <button
            onClick={() => {
              if (!checkPin) return alert("Enter a pincode first");
              setManualPin(checkPin);
              setSelected(null); // clear saved address selection
            }}
            className="px-3 bg-orange-500 text-white rounded text-sm hover:bg-orange-600"
          >
            Check
          </button>
        </div>
      </div>

      {/* ====================== Delivery Estimate ====================== */}
      <div className="mt-4">
        {manualPin ? (
          <DeliveryEstimate pincode={manualPin} />
        ) : selectedAddress ? (
          <DeliveryEstimate pincode={selectedAddress.pincode} />
        ) : (
          <p className="text-sm text-gray-500">
            Select an address or enter pincode to check delivery
          </p>
        )}
      </div>
    </div>
  );
}
