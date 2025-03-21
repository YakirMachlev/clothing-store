import React from 'react';
import ProductBlock from './ProductBlock';

export default function CategoryGrid({ products }) {
  return (
    <div className="grid">
      {products.map((product, index) => (
        <ProductBlock key={index} images={product.images} />
      ))}
    </div>
  );
}
