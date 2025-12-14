// src/components/product/ReviewsSection.jsx
import { useState, useEffect } from "react";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import StarRating from "../common/StarRating";
import Lightbox from "../common/Lightbox";

export default function ReviewsSection({ product, hasPurchased = false }) {
  const [reviews, setReviews] = useState(product?.customer_reviews ?? []);
  const [reviewsToShow, setReviewsToShow] = useState(4);
  const totalReviews = product?.reviews ?? 0;
  const avgRating = product?.rating ?? 0;
  
  // Lightbox state now holds all images and the initial index
  const [lightbox, setLightbox] = useState({ visible: false, images: [], initialIndex: 0 });

  useEffect(() => {
    if (product?.customer_reviews) {
      setReviews(product.customer_reviews);
    }
  }, [product?.customer_reviews]);

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  const handleLoadMore = () => {
    setReviewsToShow(reviewsToShow + 4);
  };

  const reviewsToDisplay = reviews.slice(0, reviewsToShow);
  const hasMoreReviews = reviewsToShow < reviews.length;
  
  // Collect all photos from all reviews to create a single gallery
  const userPhotos = reviews.flatMap(review => review.images || []);

  const openLightbox = (images, initialIndex) => {
    setLightbox({ visible: true, images, initialIndex });
  };

  const closeLightbox = () => {
    setLightbox({ visible: false, images: [], initialIndex: 0 });
  };
  
  // Handle a click on an image within a specific review
  const onReviewImageClick = (reviewImages, photoIndex) => {
    openLightbox(reviewImages, photoIndex);
  };

  return (
    <div>
      {/* Reviews Summary */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Customer Reviews</h3>
        {totalReviews > 0 ? (
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">{avgRating.toFixed(1)}</span>
            <StarRating rating={avgRating} />
            <span className="text-sm text-gray-500">({totalReviews} reviews)</span>
          </div>
        ) : (
          <p className="text-sm text-gray-500">No reviews yet.</p>
        )}
      </div>

      {/* User Photos Section */}
      {userPhotos.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Photos from reviews</h4>
          <div className="flex gap-2 overflow-x-auto p-1 -m-1">
            {userPhotos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`User submitted photo ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg border-2 border-transparent hover:border-orange-500 transition-colors duration-200 cursor-pointer"
                onClick={() => openLightbox(userPhotos, index)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Review Form */}
      {hasPurchased && (
        <div className="mb-6">
          <ReviewForm onSubmit={handleAddReview} />
        </div>
      )}

      {/* Review List */}
      <ReviewList reviews={reviewsToDisplay} onImageClick={onReviewImageClick} />

      {/* Load More Button */}
      {reviews.length > 0 && hasMoreReviews && (
        <div className="mt-4 text-center">
          <button
            onClick={handleLoadMore}
            className="text-orange-500 text-sm font-semibold hover:text-orange-600 transition-colors"
          >
            Load More Reviews ({reviews.length - reviewsToDisplay.length})
          </button>
        </div>
      )}

      {/* Lightbox for zoomable images with navigation */}
      {lightbox.visible && (
        <Lightbox 
          images={lightbox.images} 
          initialIndex={lightbox.initialIndex} 
          onClose={closeLightbox} 
        />
      )}
    </div>
  );
}