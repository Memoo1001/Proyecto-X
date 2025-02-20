import React, { useState } from 'react';
import './ShoppingCart.css';
import PayPalCheckout from './PayPalCheckout';

function ShoppingCart() {
  const [showCheckout, setShowCheckout] = useState(false);
  const cartTotal = 199.99; // Example total

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        <div className="cart-item">
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Portal Gun" />
          <div className="item-details">
            <h3>Portal Gun Replica</h3>
            <p className="price">$199.99</p>
          </div>
        </div>
      </div>
      <div className="cart-summary">
        <div className="total">
          <span>Total:</span>
          <span>${cartTotal}</span>
        </div>
        {!showCheckout ? (
          <button 
            className="checkout-btn"
            onClick={() => setShowCheckout(true)}
          >
            Proceed to Secure Checkout
          </button>
        ) : (
          <PayPalCheckout amount={cartTotal} />
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
