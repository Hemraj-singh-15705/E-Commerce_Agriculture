import React from 'react';
import ProductList from '../components/ProductList';
import './Vegetables.css'; // Import the CSS file for styling

const Vegetables = ({ addToCart }) => {
  const vegetables = [
    { id: 1, name: 'Carrot', description: 'Fresh and crunchy carrots.', price: 1.0, image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/CarrotDiversityLg.jpg' },
    { id: 2, name: 'Tomato', description: 'Juicy and red tomatoes.', price: 1.2, image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg' },
    { id: 3, name: 'Broccoli', description: 'Healthy green broccoli.', price: 2.0, image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Broccoli_and_cross_section_edit.jpg' },
    { id: 4, name: 'Spinach', description: 'Nutrient-rich spinach.', price: 1.5, image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Spinacia_oleracea_Spinazie_bloeiend.jpg' },
    { id: 5, name: 'Potato', description: 'Versatile and filling potatoes.', price: 0.8, image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Potato_2.jpg' },
    { id: 6, name: 'Cucumber', description: 'Cool and refreshing cucumbers.', price: 1.0, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Cucumis_sativus_ja01.jpg' },
    { id: 7, name: 'Bell Pepper', description: 'Colorful and crunchy bell peppers.', price: 1.8, image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Red_Bell_Pepper.jpg' },
    { id: 8, name: 'Onion', description: 'Essential for cooking.', price: 0.5, image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Onion.jpg' },
    { id: 9, name: 'Garlic', description: 'Flavorful and aromatic.', price: 0.7, image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Garlic.jpg' },
    { id: 10, name: 'Lettuce', description: 'Crisp and fresh lettuce.', price: 1.2, image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Lettuce_Mini-Romaine_Cos.jpg' },
    { id: 11, name: 'Zucchini', description: 'Versatile and low-calorie.', price: 1.5, image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Zucchini.jpg' },
    { id: 12, name: 'Eggplant', description: 'Rich and meaty texture.', price: 1.8, image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Eggplant.jpg' },
    { id: 13, name: 'Green Beans', description: 'Tender and flavorful.', price: 1.3, image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Phaseolus_vulgaris_-_Haricots_verts_-_green_beans.jpg' },
    { id: 14, name: 'Pumpkin', description: 'Sweet and nutritious.', price: 2.5, image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Field_pumpkin.jpg' },
    { id: 15, name: 'Radish', description: 'Peppery and crunchy.', price: 0.9, image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Radishes.jpg' },
  ];

  return (
    <div className="vegetables-page fade-in">
      <h1>Vegetables</h1>
      <ProductList products={vegetables} addToCart={addToCart} />
    </div>
  );
};

export default Vegetables;
