import React from 'react';
import Cart from '../components/Cart';
import './CartPage.css'; // Import styles for the CartPage

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;