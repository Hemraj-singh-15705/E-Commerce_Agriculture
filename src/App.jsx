import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Fruits from './pages/Fruits';
import Vegetables from './pages/Vegetables';
import CartPage from './pages/CartPage';
import './App.css'; // Import your global styles

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/fruits"
            element={<Fruits addToCart={addToCart} />} // Pass addToCart to Fruits
          />
          <Route
            path="/vegetables"
            element={<Vegetables addToCart={addToCart} />} // Pass addToCart to Vegetables
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                removeFromCart={removeFromCart} // Pass removeFromCart to CartPage
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;