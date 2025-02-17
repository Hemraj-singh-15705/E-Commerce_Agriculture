import React, { useState } from 'react';
import './ProductCard.css'; // Import the CSS file for styling

const ProductCard = ({ product, addToCart }) => {
  const [showFlashMessage, setShowFlashMessage] = useState(false); // State to control flash message visibility

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
    setShowFlashMessage(true); // Show the flash message
    setTimeout(() => setShowFlashMessage(false), 3000); // Hide the flash message after 3 seconds
  };

  return (
    <div className="product-card fade-in">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: Rs.{product.price.toFixed(2) * 10}/Kg</p>
      <button onClick={handleAddToCart}>Add to Cart</button>

      {/* Flash Message */}
      {showFlashMessage && (
        <div className="flash-message">
          {product.name} has been added to the cart!
        </div>
      )}
    </div>
  );
};

export default ProductCard;