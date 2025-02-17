import React, { useState } from 'react';
import './ProductCard.css'; // Import the CSS file for styling

const ProductCard = ({ product, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false); // State to track if the product is added

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
    setIsAdded(true); // Set the state to trigger the effect

    // Reset the effect after 1 second
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };

  return (
    <div className={`product-card ${isAdded ? 'added-to-cart' : ''}`}>
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;