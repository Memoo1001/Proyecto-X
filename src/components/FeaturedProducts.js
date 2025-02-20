import React from 'react';
import './FeaturedProducts.css';

const products = [
  {
    id: 1,
    name: "Portal Gun Replica",
    price: 199.99,
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    category: "Collectibles"
  },
  {
    id: 2,
    name: "Pickle Rick T-Shirt",
    price: 29.99,
    image: "https://rickandmortyapi.com/api/character/avatar/265.jpeg",
    category: "Clothing"
  },
  {
    id: 3,
    name: "Meeseeks Box",
    price: 49.99,
    image: "https://rickandmortyapi.com/api/character/avatar/242.jpeg",
    category: "Toys"
  },
  {
    id: 4,
    name: "Plumbus",
    price: 39.99,
    image: "https://rickandmortyapi.com/api/character/avatar/140.jpeg",
    category: "Home"
  }
];

function FeaturedProducts() {
  return (
    <div className="featured-products">
      <h2>FEATURED PRODUCTS</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <p className="price">${product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
