import BlogCard from "./BlogCard.jsx";
import blogs from "../blogs/blogData.js";

export default function BlogPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 my-10">
      <h2 className="text-2xl font-bold">Latest PetCart Blogs</h2>
      <p className="text-dim mb-4">
        Stay updated with the latest tips, care guides, and news.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
      </div>
    </section>
  );
}
