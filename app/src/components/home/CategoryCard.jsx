import React from "react";
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig.json";

export default function CategoryCard({ label, image }) {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(label)}`}
      className="bg-[#F1ECE6] rounded-lg overflow-hidden text-center cursor-pointer 
                 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      aria-label={`Category ${label}`}
    >
      {/* Image */}
      <div className="w-full aspect-[2/1] md:h-44 md:aspect-auto">
        <img
          src={image || siteConfig.defaults?.noCategory}
          alt={label}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Label */}
      <h3 className="my-1 md:my-3 text-xs md:text-lg font-bold text-gray-800">
        {label}
      </h3>
    </Link>
  );
}
