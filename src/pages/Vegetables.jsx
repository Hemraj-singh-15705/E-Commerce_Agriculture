import React from 'react';
import ProductList from '../components/ProductList';
import './Vegetables.css'; // Import the CSS file for styling

const Vegetables = ({ addToCart }) => {
  const vegetables = [
    { id: 1, name: 'Carrot', description: 'Fresh and crunchy carrots.', price: 1.0, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Tomato', description: 'Juicy and red tomatoes.', price: 1.2, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Broccoli', description: 'Healthy green broccoli.', price: 2.0, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Spinach', description: 'Nutrient-rich spinach.', price: 1.5, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Potato', description: 'Versatile and filling potatoes.', price: 0.8, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Cucumber', description: 'Cool and refreshing cucumbers.', price: 1.0, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Bell Pepper', description: 'Colorful and crunchy bell peppers.', price: 1.8, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Onion', description: 'Essential for cooking.', price: 0.5, image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Garlic', description: 'Flavorful and aromatic.', price: 0.7, image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Lettuce', description: 'Crisp and fresh lettuce.', price: 1.2, image: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Zucchini', description: 'Versatile and low-calorie.', price: 1.5, image: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Eggplant', description: 'Rich and meaty texture.', price: 1.8, image: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Green Beans', description: 'Tender and flavorful.', price: 1.3, image: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Pumpkin', description: 'Sweet and nutritious.', price: 2.5, image: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Radish', description: 'Peppery and crunchy.', price: 0.9, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="vegetables-page fade-in">
      <h1>Vegetables</h1>
      <ProductList products={vegetables} addToCart={addToCart} />
    </div>
  );
};

export default Vegetables;