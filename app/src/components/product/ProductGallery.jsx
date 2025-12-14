import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ProductGallery({ images = [], name = "" }) {
  const [idx, setIdx] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  if (!images || images.length === 0) {
    images = ["/images/placeholder.png"];
  }

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div>
      {/* 🔹 Main image */}
      <div
        className="relative bg-white/60 rounded-xl h-96 flex items-center justify-center overflow-hidden cursor-zoom-in"
        onClick={() => setZoomed(true)}
      >
        <img
          src={images[idx]}
          alt={`${name} ${idx + 1}`}
          className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-[1.08]"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white shadow hover:shadow-md"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white shadow hover:shadow-md"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* 🔹 Thumbnails */}
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {images.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setIdx(i)}
              className={`rounded-lg bg-white/60 border overflow-hidden h-16 flex items-center justify-center transition ${
                i === idx ? "ring-2 ring-purple-500" : "hover:shadow"
              }`}
            >
              <img
                src={src}
                alt={`${name} ${i + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </button>
          ))}
        </div>
      )}

      {/* 🔹 Zoom Modal */}
      {zoomed && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white shadow hover:bg-gray-200"
            onClick={() => setZoomed(false)}
          >
            <X size={24} />
          </button>

          <img
            src={images[idx]}
            alt={`${name} zoom`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full p-3 bg-white/80 hover:bg-white"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={next}
                className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full p-3 bg-white/80 hover:bg-white"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
