// src/components/common/StarRating.jsx
import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating, totalStars = 5 }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

    const renderStars = () => {
        const stars = [];

        // Full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
        }

        // Half star
        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
        }

        // Empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
        }

        return stars;
    };

    return (
        <div className="flex items-center space-x-1">
            {renderStars()}
        </div>
    );
};

export default StarRating;