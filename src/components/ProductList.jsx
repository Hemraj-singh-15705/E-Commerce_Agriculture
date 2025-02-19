import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'; // Import the CSS file for styling
import  Footer from '../components/Footer'

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
      <Footer/>
    </div>
  );
};

export default ProductList;