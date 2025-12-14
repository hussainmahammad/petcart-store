import { Routes, Route, useParams, Link } from "react-router-dom";
import blogs from "./components/blogs/blogData.js";

function BlogWrapper() {
  const { id } = useParams();
  const blog = blogs.find((b) => String(b.id) === id);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto py-16 text-center">
        <h1 className="text-2xl font-bold">Blog Not Found</h1>
        <p className="mt-4">
          <Link to="/blog" className="text-blue-600 underline">
            Back to Blogs
          </Link>
        </p>
      </div>
    );
  }

  const BlogComponent = blog.component;
  return <BlogComponent />;
}

function BlogList() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((b) => (
          <Link
            key={b.id}
            to={`/blog/${b.id}`}
            className="block border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={b.image}
              alt={b.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{b.title}</h2>
              <span className="text-blue-600 text-sm">Read More →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function BlogRoutes() {
  return (
    <Routes>
      {/* /blog → list */}
      <Route path="/" element={<BlogList />} />

      {/* /blog/:id → article */}
      <Route path=":id" element={<BlogWrapper />} />

      {/* fallback */}
      <Route
        path="*"
        element={
          <div className="max-w-3xl mx-auto py-16 text-center">
            <h1 className="text-2xl font-bold">Blog Not Found</h1>
          </div>
        }
      />
    </Routes>
  );
}
