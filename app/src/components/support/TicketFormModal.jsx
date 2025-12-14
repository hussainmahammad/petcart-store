import { useState } from "react";
import { useSupport } from "../../context/SupportContext";
import { X } from "lucide-react";

export default function TicketFormModal({ isOpen, onClose }) {
  const { raiseTicket } = useSupport();
  const [category, setCategory] = useState("Order Issue");
  const [orderId, setOrderId] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [confirmation, setConfirmation] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = raiseTicket({
      category,
      orderId,
      description,
      attachment: file ? file.name : null,
    });
    setConfirmation(newTicket);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        {!confirmation ? (
          <>
            <h2 className="text-xl font-bold mb-4">Raise a Ticket</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border rounded p-2"
                >
                  <option>Order Issue</option>
                  <option>Payment</option>
                  <option>Refund</option>
                  <option>Delivery</option>
                  <option>Product Quality</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">Order ID (Optional)</label>
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block font-medium">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border rounded p-2"
                  rows={4}
                />
              </div>
              <div>
                <label className="block font-medium">Attachment (Optional)</label>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-600">
              Ticket Submitted!
            </h2>
            <p className="mt-2">
              Your Ticket ID is <b>{confirmation.id}</b>
            </p>
            <p>Status: {confirmation.status}</p>
            <button
              onClick={onClose}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
