import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

export default function Home() {
  return (
    <div className="home-page">
      <h2 className="welcome-header">Welcome to My Second Hand Store</h2>

      <div className="category-grid">
        <Link to="/shirts" className="category-card">Shirts</Link>
        <Link to="/pants" className="category-card">Pants</Link>
        <Link to="/kitchen" className="category-card">Kitchen</Link>
      </div>

      {/* 💳 Payment link section */}
      <div className="payment-link">
        <a
          href="https://www.bitpay.co.il/app/me/01E05C22-E728-EA49-59AF-9A543A0C267FBCE9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/payment/bit-logo.png`}
            alt="Bit"
            className="payment-logo"
          />
          Pay with Bit
        </a>
      </div>
    </div>
  );
}
