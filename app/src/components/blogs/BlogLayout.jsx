import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import blogs from "./blogData.js";

export default function BlogLayout({ title, image, children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to top when blog loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Share URLs
  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(title);
  const shareLinks = [
    { platform: "X", url: `https://x.com/intent/post?url=${shareUrl}&text=${shareTitle}`, icon: FaXTwitter },
    { platform: "Instagram", url: `https://www.instagram.com/`, icon: FaInstagram },
    { platform: "Facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, icon: FaFacebookF },
    { platform: "WhatsApp", url: `https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`, icon: FaWhatsapp },
  ];

  // Footer links
  const socialLinks = [
    { platform: "Facebook", url: "https://www.facebook.com/AkhilAkkineni", icon: FaFacebookF },
    { platform: "Instagram", url: "https://www.instagram.com/akkineniakhil?igsh=MW5leG92cmFhOHRzYQ==", icon: FaInstagram },
    { platform: "X", url: "https://x.com/akhilakkineni8?lang=en", icon: FaXTwitter },
    { platform: "WhatsApp", url: "https://whatsapp.com/channel/0029Va5nZToFSAt56yKM0C1f", icon: FaWhatsapp },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img
              src="/site/logo/bloglogo.png"
              alt="PetCart Logo"
              className="h-[40px] w-auto -ml-4"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <a href="/shop" className="text-gray-700 hover:text-blue-600">Products</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">PetCart Blogs</a>
            <a href="/" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/support" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-3">
            <a href="/shop" className="block text-gray-700 hover:text-blue-600">Products</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">PetCart Blogs</a>
            <a href="/" className="block text-gray-700 hover:text-blue-600">About</a>
            <a href="/support" className="block text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        {/* Breadcrumb */}
        <nav className="text-sm text-orange-400 font-bold mb-6 flex flex-wrap gap-1">
          <a href="/" className="hover:text-orange-600">Home</a> &gt;
          <a href="#" className="hover:text-orange-600">PetCart Blogs</a> &gt;
          <span>{title}</span>
        </nav>

        {/* Title + Share */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-blue-600 text-sm font-medium">Share this Blog on</span>
            {shareLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition"
                onClick={
                  link.platform === "Instagram"
                    ? (e) => {
                        e.preventDefault();
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied! Paste it in Instagram to share.");
                      }
                    : undefined
                }
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full sm:-mx-6 lg:-mx-8">
          <img
            src={image}
            alt={title}
            className="
              w-full
              object-contain 
              rounded-lg 
              shadow-md
              mx-auto
            "
          />
        </div>

        {/* Content + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Main */}
          <article className="lg:w-2/3">
            <div className="text-gray-800 leading-relaxed space-y-6">
              {children}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Related Content</h2>
              {blogs.slice(0, 4).map((blog) => (
                <div key={blog.id} className="mb-6 flex gap-4">
                  <img src={blog.image} alt={blog.title} className="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-lg font-semibold text-blue-600 hover:text-blue-800"
                    >
                      {blog.title}
                    </Link>
                    <p className="text-gray-600 text-sm mt-2">{blog.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: stacked | Desktop: flex left-center-right */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start text-center md:text-left gap-8">
            
            {/* PetCart.shop (Left on desktop) */}
            <div className="md:flex-1 md:text-left">
              <h3 className="text-lg font-bold mb-4">PetCart.shop</h3>
              <p className="text-sm leading-relaxed">Your one-stop shop for pet care essentials.</p>
            </div>

            {/* Connect with us (Center on desktop) */}
            <div className="md:flex-1 md:text-center">
              <h3 className="text-lg font-bold mb-4">Connect with us</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((link) => (
                  <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition">
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Us (Right on desktop) */}
            <div className="md:flex-1 md:text-right">
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <span>Email: </span>
                  <a href="mailto:support@petcart.shop" className="hover:text-blue-300">support@petcart.shop</a>
                </li>
                <li>
                  <span>Mobile: </span>
                  <a href="tel:+1234567890" className="hover:text-blue-300">1234567890</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
