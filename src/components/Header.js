import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Yakir's Second Hand Store
      </Link>
      <nav className="nav">
        <Link to="/shirts">Shirts</Link>
        <Link to="/pants">Pants</Link>
        <Link to="/kitchen">Kitchen</Link>
      </nav>
    </header>
  );
}
