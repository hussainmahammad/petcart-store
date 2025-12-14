import siteConfig from "../../config/siteConfig.json"

export default function HeroSection() {
  const hero = siteConfig.banners.hero
  const rawHeading = hero?.heading || "Welcome to PetCart.Shop"

  // Split "Welcome to PetCart.Shop" -> "Welcome to" + "PetCart.Shop" (mobile only)
  const lower = rawHeading.toLowerCase()
  const startsWithWelcome = lower.startsWith("welcome to")
  const firstLine = startsWithWelcome ? "Welcome to" : rawHeading
  const secondLine = startsWithWelcome ? rawHeading.slice("Welcome to".length).trim() : ""

  // Mobile subheading: break before "& finned pets"
  const subHeading = hero?.subHeading || "All in one place for your furry, feathered & finned pets."
  const [subFirst, subSecond] = subHeading.split("& finned")

  return (
    <section className="relative my-6 max-w-7xl mx-auto">
      {/* ===== Mobile View ===== */}
      <div className="relative md:hidden">
        <img
          src={hero?.image || siteConfig.defaults.noBanner}
          alt="Hero Banner"
          className="w-full h-auto rounded-2xl object-contain"
        />
        {/* Overlay Text (left-aligned, reduced left gap, split subheading) */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-2 text-left text-white">
          <h1
            className="text-xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] leading-snug"
            aria-label={rawHeading}
          >
            {secondLine ? (
              <>
                <span className="block">{firstLine}</span>
                <span className="block">{secondLine}</span>
              </>
            ) : (
              rawHeading
            )}
          </h1>
          <p className="mt-2 text-xs font-medium leading-snug max-w-[85%] drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
            {subFirst?.trim()}
            <br />
            & finned{` ${subSecond?.trim()}`}
          </p>
          <a
            href="/shop"
            className="mt-4 inline-block px-5 py-2 bg-[#E67E22] hover:bg-[#cf6b1a] text-white text-sm font-medium rounded-lg transition"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* ===== Desktop View (unchanged except shadow) ===== */}
      <div
        className="hidden md:block h-[470px] w-full bg-cover bg-center rounded-2xl relative"
        style={{ backgroundImage: `url(${hero?.image || siteConfig.defaults.noBanner})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 rounded-2xl 
                        bg-gradient-to-r from-[#CBBBAE]/80 via-[#D9CBBF]/0 to-transparent" />

        {/* Text */}
        <div className="relative h-full w-full flex items-center">
          <div className="px-12 max-w-2xl text-white">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              {hero?.heading}
            </h1>
            <p className="mt-3 text-[22px] font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              {hero?.subHeading}
            </p>
            <a
              href="/shop"
              className="mt-6 inline-block px-6 py-3 bg-[#E67E22] hover:bg-[#cf6b1a] text-white text-lg font-medium rounded-lg transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
