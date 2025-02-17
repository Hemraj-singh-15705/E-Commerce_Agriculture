import React from 'react';
import './ProductCard.css'; // Import the CSS file for styling

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card fade-in">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;