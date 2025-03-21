import React, { useEffect, useState } from 'react';
import CategoryGrid from '../components/CategoryGrid';
import { loadProducts } from '../utils/loadProducts';
import './Page.css';

export default function Pants() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts('pants').then(setProducts);
  }, []);

  return (
    <div className="page-container">
      <h2>Pants</h2>
      <CategoryGrid products={products} />
    </div>
  );
}
