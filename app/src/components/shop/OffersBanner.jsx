import { useEffect, useState } from "react";
import siteConfig from "../../config/siteConfig.json";

export default function OffersBanner() {
  const images = siteConfig.banners?.offerBanners || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [areControlsVisible, setAreControlsVisible] = useState(false);

  useEffect(() => {
    if (images.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000); // 7 sec rotation

    return () => clearInterval(interval);
  }, [images, isPaused]);

  const goToBanner = (index) => {
    setCurrentIndex(index);
    setIsPaused(false);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  if (images.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 my-4">
        <div className="flex items-center justify-center bg-gray-100 text-gray-500 rounded-2xl">
          No offers available
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-4 my-4">
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-lg cursor-pointer"
        onClick={() => setAreControlsVisible(!areControlsVisible)}
      >
        <img
          src={images[currentIndex]}
          alt={`offer-${currentIndex}`}
          className="w-full h-auto max-h-[648px] sm:max-h-[480px] lg:max-h-[600px] object-contain transition-opacity duration-700"
        />

        {/* Unified Controls in a Circle */}
        <div
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 p-2 rounded-full bg-black/30 transition-opacity duration-500 ${
            areControlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Pause/Resume button */}
          <button
            onClick={togglePause}
            className="flex items-center justify-center h-6 w-6 text-white rounded-full transition-colors duration-200 hover:bg-black/50"
            aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
          >
            {isPaused ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M6.3 2.841A1.5 1.5 0 0 0 4 4.116v11.768a1.5 1.5 0 0 0 2.3 1.275l9.345-5.854a1.5 1.5 0 0 0 0-2.55L6.3 2.84Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8 5.75A.75.75 0 0 0 7.25 6.5v7a.75.75 0 0 0 1.5 0v-7A.75.75 0 0 0 8 5.75ZM11.75 6.5a.75.75 0 0 0-1.5 0v7a.75.75 0 0 0 1.5 0v-7Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* Banner navigation dots */}
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToBanner(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white w-6" : "bg-white/50"
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
