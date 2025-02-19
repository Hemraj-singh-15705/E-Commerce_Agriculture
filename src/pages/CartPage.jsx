import React, { useState } from 'react';
import Cart from '../components/Cart';
import Modal from '../components/Modal';
import './CartPage.css';

const CartPage = ({ cartItems, removeFromCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckout = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      {cartItems.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      )}

      {/* Modal for Retailer Information */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Retailer Information</h2>
        <p>Phone No: +91 9369851369</p>
        <p>Email: hmphemrajpatel15705hp@gmail.com</p>
        <p>Address: Khohi Road Shivrampur Chitrakoot</p>
        <p>Landmark: K.N. Shukla Hospital && KSMI Foundation 2.0</p>
      </Modal>
    </div>
  );
};

export default CartPage;