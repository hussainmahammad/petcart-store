import { FileDown, Package, CreditCard, Truck, User, HardDrive, MoreHorizontal } from "lucide-react";

const faqCategories = [
  {
    title: "Orders, Refunds & Returns",
    icon: Package,
    desc: "Help with orders, cancellations, and returns.",
    file: "/faqs/orders.pdf",
  },
  {
    title: "Payments & Billing",
    icon: CreditCard,
    desc: "Payment methods, billing issues, refunds.",
    file: "/faqs/payments.pdf",
  },
  {
    title: "Delivery & Shipping",
    icon: Truck,
    desc: "Delivery timelines, shipping charges, tracking.",
    file: "/faqs/delivery.pdf",
  },
  {
    title: "Account & Login",
    icon: User,
    desc: "Login issues, password reset, profile help.",
    file: "/faqs/account.pdf",
  },
  {
    title: "Products & Specifications",
    icon: HardDrive,
    desc: "Info about product details & quality.",
    file: "/faqs/products.pdf",
  },
  {
    title: "Others / Miscellaneous",
    icon: MoreHorizontal,
    desc: "General queries and other issues.",
    file: "/faqs/other.pdf",
  },
];

export default function FAQ() {
  const handleDownload = (file, title) => {
    // Fallback for development if PDF is not found
    const link = document.createElement("a");
    link.href = file;
    link.download = title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-") + ".pdf";
    link.target = "_blank"; // Ensure it doesn't trigger React Router
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {faqCategories.map((cat) => (
          <div
            key={cat.title}
            onClick={() => handleDownload(cat.file, cat.title)}
            className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col md:block items-center md:items-start text-center md:text-left"
          >
            <cat.icon className="h-8 w-8 text-orange-500 mb-3" />
            <h3 className="font-bold text-lg">{cat.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{cat.desc}</p>
            <div className="flex items-center gap-2 text-blue-600 font-semibold">
              <FileDown className="h-4 w-4" />
              Download PDF
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}