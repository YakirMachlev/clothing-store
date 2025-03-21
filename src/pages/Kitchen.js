import React, { useEffect, useState } from 'react';
import CategoryGrid from '../components/CategoryGrid';
import { loadProducts } from '../utils/loadProducts';
import './Page.css';

export default function Kitchen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts('kitchen').then(setProducts);
  }, []);

  return (
    <div className="page-container">
      <h2>Kitchen Items</h2>
      <CategoryGrid products={products} />
    </div>
  );
}
