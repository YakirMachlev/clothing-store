import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">My Clothes Store</h1>
      <nav className="nav">
        <Link to="/clothing-store/shirts">Shirts</Link>
        <Link to="/clothing-store/pants">Pants</Link>
        <Link to="/clothing-store/kitchen">Kitchen</Link>
      </nav>
    </header>
  );
}
