import HeroSection from "../components/home/HeroSection.jsx"
import CategoryGrid from "../components/home/CategoryGrid.jsx"
import SignupPromo from "../components/home/SignupPromo.jsx"
import TopOffers from "../components/home/TopOffers.jsx"
import BlogPreview from "../components/home/BlogPreview.jsx"

export default function HomePage(){
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <SignupPromo />
      <TopOffers />
      <BlogPreview />
    </>
  )
}
