import React, { useState, useEffect } from "react";

export const ImageCarousel = ({ imgUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images] = useState(imgUrls);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="image-carousel">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`${index}`}
          style={{ display: index === currentIndex ? "block" : "none" }}
        />
      ))}
    </div>
  );
};
