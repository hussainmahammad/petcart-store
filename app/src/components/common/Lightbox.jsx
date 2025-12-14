// src/components/common/Lightbox.jsx
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ images, initialIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleClose = (e) => {
        if (e.target.id === 'lightbox-backdrop') {
            onClose();
        }
    };

    const currentImage = images[currentIndex];

    return (
        <div 
            id="lightbox-backdrop" 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 transition-opacity duration-300" 
            onClick={handleClose}
        >
            <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
                onClick={onClose}
            >
                <X size={32} />
            </button>
            
            <div className="relative flex items-center justify-center w-full h-full max-w-7xl">
                {images.length > 1 && (
                    <button
                        className="absolute left-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors duration-200"
                        onClick={handlePrev}
                    >
                        <ChevronLeft size={32} />
                    </button>
                )}
                
                <img
                    src={currentImage}
                    alt={`Image ${currentIndex + 1}`}
                    className="max-w-full max-h-[90vh] object-contain cursor-zoom-out"
                    onClick={onClose}
                />

                {images.length > 1 && (
                    <button
                        className="absolute right-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors duration-200"
                        onClick={handleNext}
                    >
                        <ChevronRight size={32} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Lightbox;