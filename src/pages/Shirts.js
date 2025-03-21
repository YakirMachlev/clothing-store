import React, { useEffect, useState } from 'react';
import CategoryGrid from '../components/CategoryGrid';
import { loadProducts } from '../utils/loadProducts';
import './Page.css';

export default function Shirts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts('shirts').then(setProducts);
  }, []);

  return (
    <div className="page-container">
      <h2>Shirts</h2>
      <CategoryGrid products={products} />
    </div>
  );
}
