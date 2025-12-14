import { useState } from "react";
import siteConfig from "../../config/siteConfig.json";
import AuthModal from "../account/AuthModal"; // ✅ import AuthModal

export default function SignupPromo() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [defaultTab, setDefaultTab] = useState("login");

  return (
    <section className="mx-auto max-w-7xl px-4 my-4 sm:my-6">
      <div
        className="
          relative w-full rounded-2xl shadow-lg overflow-hidden
          md:aspect-[2.58/1]   /* ✅ ~3:1 ratio on desktop */
        "
      >
        <img
          src={siteConfig.banners.signupOffer.image}
          alt="Signup Offer"
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* ===== Overlay Text ===== */}
        <div className="absolute inset-0 flex items-center px-3 md:px-12">
          <div className="flex flex-col items-start text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] max-w-lg">
            {/* Heading split for mobile */}
            <h2 className="font-extrabold leading-snug">
              <span className="block text-base sm:text-xl md:text-5xl leading-tight">
                Signup &amp; Get 30%
              </span>
              <span className="block text-base sm:text-xl md:text-5xl leading-tight">
                Off Coupon
              </span>
            </h2>

            {/* Subheading */}
            <p className="mt-0.5 sm:mt-1 md:mt-2 text-[10px] sm:text-sm md:text-2xl font-semibold md:font-extrabold leading-tight">
              On First Orders Above ₹2500
            </p>

            {/* Button */}
            <button
              onClick={() => {
                setDefaultTab("signup");
                setIsAuthOpen(true);
              }}
              className="
                mt-3 sm:mt-4 inline-block 
                px-3 py-1.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3
                bg-[#E67E22] hover:bg-[#cf6b1a]
                text-sm sm:text-base md:text-lg
                text-white font-medium rounded-lg transition
              "
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Auth Modal */}
      {isAuthOpen && (
        <AuthModal
          onClose={() => setIsAuthOpen(false)}
          defaultTab={defaultTab}
          onLoginSuccess={() => {
            setIsAuthOpen(false);
          }}
        />
      )}
    </section>
  );
}
