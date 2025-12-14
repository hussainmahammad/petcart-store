// src/components/product/ProductDetailsTabs.jsx
import { useState } from "react";

export default function ProductDetailsTabs({ product }) {
  // We'll separate the description from the rest of the tabs
  const description = product?.detailed_description;

  // Filter out the description so it's not part of the tabbed section
  const tabs = [
    { key: "usage", label: "Usage", content: product?.usage },
    { key: "care", label: "Care Tips", content: product?.care },
    { key: "storage", label: "Storage", content: product?.storage },
  ].filter((t) => t.content && t.content.trim() !== "");

  const [active, setActive] = useState(tabs[0]?.key);

  if (!description && !tabs.length) {
    return (
      <div className="p-4 text-sm text-gray-600 bg-white/70 rounded-xl shadow-sm">
        No additional details available for this product.
      </div>
    );
  }

  return (
    <div className="mt-6 bg-white/70 rounded-xl shadow-sm">
      {/* Detailed Information Section - Styled as a heading */}
      {description && (
        <>
          <h3 className="text-lg font-semibold text-gray-800 p-4">Detailed Information</h3>
          <div className="p-4 pt-0">
            <div
              className="text-gray-700 leading-relaxed font-serif text-base text-left prose prose-sm"
              dangerouslySetInnerHTML={{ __html: description.trim() }}
            />
          </div>
        </>
      )}

      {/* Other tabs section */}
      {tabs.length > 0 && (
        <>
          {/* Tabs Header */}
          <div className="flex border-b border-gray-300 mt-4">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`flex-1 p-3 text-sm font-medium transition ${
                  active === tab.key
                    ? "border-b-2 border-gray-700 text-gray-800"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Tab Content */}
          <div className="p-4">
            <div
              className="text-gray-700 leading-relaxed font-serif text-base text-left prose prose-sm"
              dangerouslySetInnerHTML={{
                __html: tabs.find((t) => t.key === active)?.content.trim() || "",
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
