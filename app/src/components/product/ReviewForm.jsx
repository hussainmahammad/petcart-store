// src/components/product/ReviewForm.jsx
import { useState, useRef } from "react";
import { Star } from "lucide-react";

export default function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [photos, setPhotos] = useState([]);

  // Use a ref to access the hidden file input
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
  };

  const handleButtonClick = () => {
    // Programmatically click the hidden file input
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !comment.trim() || !name.trim()) {
      return alert("Please fill all fields and provide a rating.");
    }

    const newReview = {
      reviewer_name: name,
      rating,
      comment,
      date: new Date().toISOString(),
      // The only change is here: changing 'photos' to 'images' for consistency
      images: photos.map(file => URL.createObjectURL(file)),
    };

    onSubmit(newReview);
    setRating(0);
    setComment("");
    setName("");
    setPhotos([]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 bg-gray-50 p-4 rounded-lg">
      <h4 className="text-sm font-semibold text-gray-800">Write a Review</h4>

      {/* Rating Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={`cursor-pointer ${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => setRating(i + 1)}
          />
        ))}
      </div>

      {/* Name */}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded px-3 py-2 text-sm"
      />

      {/* Comment */}
      <textarea
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows="3"
        className="w-full border rounded px-3 py-2 text-sm"
      />

      {/* Image Upload */}
      <div>
        <label htmlFor="review-photos" className="block text-sm font-medium text-gray-700">Add Photos</label>
        <input
          id="review-photos"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden" // Hides the original file input
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className="mt-1 flex items-center justify-center w-full border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-white bg-gray-600 hover:bg-gray-700"
        >
          {photos.length > 0 ? `${photos.length} file(s) chosen` : 'Choose files...'}
        </button>
      </div>
      
      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-600"
        >
          Submit Review
        </button>
      </div>
    </form>
  );
}