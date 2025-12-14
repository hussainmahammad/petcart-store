import CategoryCard from "./CategoryCard.jsx"
import siteConfig from "../../config/siteConfig.json"

export default function CategoryGrid() {
  const categories = siteConfig.showcaseCategories || []

  return (
    <section className="mx-auto max-w-7xl px-3 md:px-6 my-6 md:my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {categories.map((c, idx) => (
          <CategoryCard 
            key={idx} 
            label={c.name} 
            image={c.image} 
          />
        ))}
      </div>
    </section>
  )
}
