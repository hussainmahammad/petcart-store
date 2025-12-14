// src/components/product/ReviewList.jsx
import { Star } from "lucide-react";

export default function ReviewList({ reviews = [], onImageClick }) {
  if (!reviews.length) {
    return (
      <p className="text-sm text-gray-500">No reviews yet. Be the first to review!</p>
    );
  }

  return (
    <div className="space-y-4 mt-4">
      {reviews.map((review, idx) => (
        <div
          key={idx}
          className="p-4 border rounded-lg bg-white shadow-sm space-y-1"
        >
          {/* ⭐ Rating & Date */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-2">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>

          {/* Reviewer Name */}
          <p className="text-sm font-semibold text-gray-800">
            {review.reviewer_name}
          </p>

          {/* Review Comment */}
          <p className="text-sm text-gray-700">{review.comment}</p>

          {/* Reviewer Photos */}
          {review.images?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {review.images.map((photo, photoIdx) => (
                <img
                  key={photoIdx}
                  src={photo}
                  alt="Reviewer submitted photo"
                  className="w-16 h-16 object-cover rounded-md cursor-pointer"
                  onClick={() => onImageClick(review.images, photoIdx)}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}