import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

export default function Home() {
  return (
    <div className="home-page">
      <h2>Welcome to My Clothing Store</h2>
      <div className="category-grid">
        <Link to="/shirts" className="category-card">Shirts</Link>
        <Link to="/pants" className="category-card">Pants</Link>
        <Link to="/kitchen" className="category-card">Kitchen</Link>
      </div>
    </div>
  );
}
