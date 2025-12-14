import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Link
      to={`/blog/${blog.id}`}
      className="card p-4 transition block bg-white rounded-xl overflow-hidden 
      md:hover:shadow-lg md:transition-transform md:duration-300 md:hover:scale-105"
    >
      {/* Image container */}
      <div className="w-full mb-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 md:h-56 object-cover rounded-xl"
        />
      </div>

      {/* Blog Title */}
      <div className="font-semibold text-lg mb-1">{blog.title}</div>
      <span className="link text-sm mt-2 inline-block font-medium text-brand">
        Read More →
      </span>
    </Link>
  );
}