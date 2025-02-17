import React from 'react';
import ProductList from '../components/ProductList';
import './Fruits.css'; // Import the CSS file for styling

const Fruits = ({ addToCart }) => {
  const fruits = [
    { id: 1, name: 'Apple', description: 'Fresh and juicy apples.', price: 2.5, image: 'https://media.istockphoto.com/id/495878092/photo/red-apple.jpg?s=612x612&w=0&k=20&c=M2ndFI1v2erJM18q1Cd1QCM8jqBlRKLc1nLE9BNp-EY=' },
    { id: 2, name: 'Banana', description: 'Ripe and sweet bananas.', price: 1.5, image: 'https://media.istockphoto.com/id/922094380/photo/bananas.jpg?s=612x612&w=0&k=20&c=rn2ufKeLZf3wAUmNUKBi6md-U1gQI4_1038v-VUT3JE=' },
    { id: 3, name: 'Orange', description: 'Sweet and tangy oranges.', price: 1.8, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Mango', description: 'King of fruits, sweet and delicious.', price: 3.0, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Pineapple', description: 'Tropical and refreshing.', price: 2.5, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Strawberry', description: 'Sweet and juicy strawberries.', price: 4.0, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Grapes', description: 'Small and flavorful grapes.', price: 2.0, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Watermelon', description: 'Juicy and refreshing watermelon.', price: 5.0, image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Kiwi', description: 'Tart and nutrient-rich kiwi.', price: 2.2, image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Peach', description: 'Soft and sweet peaches.', price: 2.8, image: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Pear', description: 'Crisp and juicy pears.', price: 2.0, image: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Cherry', description: 'Sweet and tangy cherries.', price: 3.5, image: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Blueberry', description: 'Antioxidant-rich blueberries.', price: 4.5, image: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Raspberry', description: 'Tart and flavorful raspberries.', price: 4.0, image: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Papaya', description: 'Sweet and tropical papaya.', price: 3.2, image: 'https://via.placeholder.com/150' },
    { id: 16, name: 'Guava', description: 'Aromatic and nutrient-packed guava.', price: 2.7, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="fruits-page fade-in">
      <h1>Fruits</h1>
      <ProductList products={fruits} addToCart={addToCart} />
    </div>
  );
};

export default Fruits;