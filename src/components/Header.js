import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">My Clothes Store</h1>
      <nav className="nav">
        <Link to="/shirts">Shirts</Link>
        <Link to="/pants">Pants</Link>
        <Link to="/kitchen">Kitchen</Link>
      </nav>
    </header>
  );
}
