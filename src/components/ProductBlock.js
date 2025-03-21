import React, { useState } from 'react';
import './ProductBlock.css';

export default function ProductBlock({ images }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleClick = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFade(false);
    }, 120);
  };

  return (
    <div className="product-block" onClick={handleClick}>
      <img
        src={images[index]}
        alt="Product"
        loading="lazy"
        className={fade ? 'fade-out' : 'fade-in'}
      />
      {images.length > 1 && (
        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
