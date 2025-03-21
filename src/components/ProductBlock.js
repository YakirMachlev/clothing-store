import React, { useState } from 'react';

export default function ProductBlock({ images }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleClick = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFade(false);
    }, 150); // match the transition time
  };

  return (
    <div className="product-block" onClick={handleClick}>
      <img
        src={images[index]}
        alt="Product"
        loading="lazy"
        className={fade ? 'fade-out' : 'fade-in'}
      />
    </div>
  );
}
