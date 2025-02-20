import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src="/rick-logo.png" alt="Rick and Morty Shop" className="logo" />
        </Link>
      </div>
      <div className="navbar-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/collections" className="nav-link">Collections</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
      <div className="navbar-cart">
        <Link to="/cart" className="cart-icon">
          🛒 Cart (0)
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
