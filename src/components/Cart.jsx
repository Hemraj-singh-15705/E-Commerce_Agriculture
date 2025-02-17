import React, { useEffect } from 'react';
import './Cart.css'; // Import the CSS file for styling

const Cart = ({ cartItems, removeFromCart }) => {
  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Page load event to trigger animations
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      element.classList.add('visible');
    });
  }, [cartItems]); // Re-run the effect when cartItems change

  return (
    <div className="cart fade-in">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item fade-in">
              <div className="item-info">
                <span className="item-name">{item.name}</span>
                <span className="item-price">Rs.{item.price.toFixed(2)*10}</span>
              </div>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="cart-summary fade-in">
          <h3>Total: Rs.{totalPrice.toFixed(2)*10}</h3>
          <button className="checkout-button">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;