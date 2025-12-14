import { useState } from "react";
import { useSupport } from "../context/SupportContext";
import { Headset, FileQuestion, Mail, Phone, List } from "lucide-react";
import TicketFormModal from "../components/support/TicketFormModal";

export default function SupportPage() {
  const { tickets } = useSupport();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 max-sm:p-4 space-y-10 max-sm:space-y-6 max-w-5xl mx-auto">
      {/* Page Title */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl max-sm:text-2xl font-extrabold text-orange-600 max-sm:text-orange-700 flex items-center justify-center gap-2">
          <Headset className="h-9 w-9 max-sm:h-7 max-sm:w-7 text-orange-600 max-sm:text-orange-700" />
          Support Center
        </h1>
        <p className="text-gray-600 max-sm:text-gray-700 max-sm:text-sm">How can we help you today?</p>
      </header>

      {/* Raise Ticket */}
      <section className="bg-white rounded-2xl shadow-md p-6 max-sm:p-4 border border-gray-200">
        <div className="flex items-center max-sm:flex-col max-sm:gap-4 justify-between mb-4">
          <h2 className="text-2xl max-sm:text-xl font-semibold flex items-center gap-2">
            <FileQuestion className="h-6 w-6 max-sm:h-5 max-sm:w-5 text-orange-500" />
            Raise a Ticket
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 max-sm:px-4 max-sm:w-full py-2 rounded-xl shadow hover:from-orange-600 hover:to-amber-600 transition"
          >
            Raise Ticket
          </button>
        </div>
        <p className="text-gray-600 max-sm:text-gray-700 max-sm:text-sm">
          Facing an issue? Quickly raise a support ticket and track its progress.
        </p>
      </section>

      {/* View Tickets */}
      <section className="bg-white rounded-2xl shadow-md p-6 max-sm:p-4 border border-gray-200">
        <h2 className="text-2xl max-sm:text-xl font-semibold flex items-center gap-2 mb-4">
          <List className="h-6 w-6 max-sm:h-5 max-sm:w-5 text-orange-500" />
          Your Tickets
        </h2>
        {tickets.length === 0 ? (
          <p className="text-gray-500 max-sm:text-gray-600 italic max-sm:text-sm">No tickets found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-orange-50 text-gray-700 max-sm:text-gray-800">
                <tr>
                  <th className="p-3 max-sm:p-2 text-left max-sm:text-xs">Ticket ID</th>
                  <th className="p-3 max-sm:p-2 text-left max-sm:text-xs">Category</th>
                  <th className="p-3 max-sm:p-2 text-left max-sm:text-xs">Date</th>
                  <th className="p-3 max-sm:p-2 text-left max-sm:text-xs">Status</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((t, idx) => (
                  <tr
                    key={t.id}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-orange-50 max-sm:hover:bg-orange-100 transition`}
                  >
                    <td className="p-3 max-sm:p-2 font-medium max-sm:text-xs">{t.id}</td>
                    <td className="p-3 max-sm:p-2 max-sm:text-xs">{t.category}</td>
                    <td className="p-3 max-sm:p-2 text-sm max-sm:text-xs text-gray-600 max-sm:text-gray-700">{t.date}</td>
                    <td className="p-3 max-sm:p-2">
                      <span
                        className={`px-3 max-sm:px-2 py-1 rounded-full text-sm max-sm:text-xs font-medium ${
                          t.status === "Open"
                            ? "bg-red-100 text-red-600 max-sm:bg-red-200 max-sm:text-red-800"
                            : t.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-600 max-sm:bg-yellow-200 max-sm:text-yellow-800"
                            : "bg-green-100 text-green-600 max-sm:bg-green-200 max-sm:text-green-800"
                        }`}
                      >
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Contact Options */}
      <section className="bg-white rounded-2xl shadow-md p-6 max-sm:p-4 border border-gray-200">
        <h2 className="text-2xl max-sm:text-xl font-semibold flex items-center gap-2 mb-4">
          <Phone className="h-6 w-6 max-sm:h-5 max-sm:w-5 text-orange-500" />
          Contact Support
        </h2>
        <div className="flex flex-col md:flex-row gap-6 max-sm:flex-col max-sm:gap-4 max-sm:items-start">
          <a
            href="mailto:support@petcart.shop"
            className="flex-1 flex items-center justify-start gap-3 p-5 max-sm:p-4 border rounded-xl hover:bg-orange-50 max-sm:hover:bg-orange-100 transition max-sm:w-full"
          >
            <Mail className="h-6 w-6 max-sm:h-5 max-sm:w-5 text-orange-600" />
            <div>
              <p className="font-semibold max-sm:text-sm">Email Us</p>
              <p className="text-gray-600 max-sm:text-gray-700 max-sm:text-xs">support@petcart.shop</p>
            </div>
          </a>
          <a
            href="tel:9999999999"
            className="flex-1 flex items-center justify-start gap-3 p-5 max-sm:p-4 border rounded-xl hover:bg-orange-50 max-sm:hover:bg-orange-100 transition max-sm:w-full"
          >
            <Phone className="h-6 w-6 max-sm:h-5 max-sm:w-5 text-orange-600" />
            <div>
              <p className="font-semibold max-sm:text-sm">Call Us</p>
              <p className="text-gray-600 max-sm:text-gray-700 max-sm:text-xs">9999999999</p>
            </div>
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="text-center">
        <h2 className="text-2xl max-sm:text-xl font-semibold mb-4">Need Quick Help?</h2>
        <a
          href="/faq"
          className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 max-sm:px-4 py-3 max-sm:py-2 rounded-xl shadow-md hover:from-orange-600 hover:to-amber-600 transition"
        >
          Visit FAQs
        </a>
      </section>

      {/* Ticket Modal */}
      <TicketFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}