import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';
import FutureCities from './components/FutureCities';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="welcome-section">
                <h1>Bienvenidos a Ciudades del Futuro</h1>
                <p>Explora las maravillas arquitectónicas del mañana</p>
              </div>
              <FutureCities />
            </>
          } />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
