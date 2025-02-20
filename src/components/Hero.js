import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>El Futuro de la Arquitectura</h1>
        <p>Descubre las ciudades más innovadoras del mañana</p>
        <Link to="/cities" className="cta-button">
          EXPLORAR AHORA
        </Link>
      </div>
    </div>
  );
}

export default Hero;
