import React, { useEffect } from 'react';
import './Home.css'; // Import the CSS file for styling
import heroimage from '../assets/heroimage.jpg';
import PlantingProcess from '../pages/PlantingProcess'

const Home = () => {
  // Page load event to trigger animations
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      element.classList.add('visible');
    });
  }, []);

  return (
    <div className="home-container">
      <div className="content-section">
        <div className="message-section fade-in">
          <h1>Welcome to Agriculture Store</h1>
          <p>Explore our fresh fruits and vegetables.</p>
          <p className="highlight-message">ताजी सब्जी, ताजे फल</p>
        </div>
        <div className="image-section fade-in">
          <img
            src={heroimage} // Replace with your image URL
            alt="Agriculture Field"
            className="content-image"
          />

        </div>
      </div>
      <PlantingProcess/>
      <div className="about-section fade-in">
        <h2>About Us</h2>
        <p>
          We are dedicated to providing the freshest and highest quality fruits and vegetables
          straight from our fields to your table. Our mission is to promote healthy living through
          organic and sustainable farming practices.
        </p>
      </div>
      
    </div>
  );
};

export default Home;