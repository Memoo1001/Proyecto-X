import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Official Rick and Morty merchandise store. Get schwifty with our exclusive collection!</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/collections">Collections</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@rickandmortyshop.com</p>
          <p>Phone: 1-800-SCHWIFTY</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Rick and Morty Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
