import React from 'react';
import ProductList from '../components/ProductList';
import './Vegetables.css'; // Import the CSS file for styling

const Vegetables = ({ addToCart }) => {
  const vegetables = [
    { id: 1, name: 'Carrot', description: 'Fresh and crunchy carrots.', price: 1.0, image: 'https://media.istockphoto.com/id/1301999459/video/picking-fresh-carrots-in-farmer-man-hands.jpg?s=640x640&k=20&c=GORRVls4HfVINjwY0S1EhPdYx4WLFZvKb3kn7SwSOKg=' },
    { id: 2, name: 'Tomato', description: 'Juicy and red tomatoes.', price: 1.2, image: 'https://media.istockphoto.com/id/589985234/photo/homegrown-tomatoes.jpg?s=612x612&w=0&k=20&c=uzUhfFsfesTDClRQ_3PACAAS5SIb8UR1RyU9FqAVAco=' },
    { id: 3, name: 'Broccoli', description: 'Healthy green broccoli.', price: 2.0, image: 'https://media.istockphoto.com/id/502359048/photo/cauliflower-broccoli-plant-growing-in-a-vegetable-garden.jpg?s=612x612&w=0&k=20&c=6LNyZ4TyXoxcqM9FHcL_A7upMfMx7IrtdGt4cpK-z2k=' },
    { id: 4, name: 'Spinach', description: 'Nutrient-rich spinach.', price: 1.5, image: 'https://media.istockphoto.com/id/121286472/photo/baby-spinach-in-the-garden.jpg?s=612x612&w=0&k=20&c=wPG7LZbynB8aDOcqf3yNM1dOoYdJn0EQed3QWB-mYnQ=' },
    { id: 5, name: 'Potato', description: 'Versatile and filling potatoes.', price: 0.8, image: 'https://media.istockphoto.com/id/1397034039/video/dug-up-organic-potatoes-lie-on-the-field.jpg?s=640x640&k=20&c=Ij4DedcVaw930V4-iGLHANHnNoONuJ26KEATN_q3YSw=' },
    { id: 6, name: 'Cucumber', description: 'Cool and refreshing cucumbers.', price: 1.0, image: 'https://media.istockphoto.com/id/2081016411/video/cucumbers-ripen-in-the-sun-cutting-products-from-the-farm.jpg?s=640x640&k=20&c=pwpPGIrgIqLeOavrBv8f0ggEJfl28gyduO5D3utPa1E=' },
    { id: 7, name: 'Bell Pepper', description: 'Colorful and crunchy bell peppers.', price: 1.8, image: 'https://media.istockphoto.com/id/161046734/photo/pepper-plant.jpg?s=612x612&w=0&k=20&c=MrvoueuLK-GejO0fT4YoOgOSxiWsLXHRAFfsrKjk4W0=' },
    { id: 8, name: 'Onion', description: 'Essential for cooking.', price: 0.5, image: 'https://media.istockphoto.com/id/892022394/photo/row-of-onions.jpg?s=612x612&w=0&k=20&c=C_CNYTfw6-WGjPwdWzbO4QVaopl1H--58pwgwobMBXA=' },
    { id: 9, name: 'Garlic', description: 'Flavorful and aromatic.', price: 0.7, image: 'https://media.istockphoto.com/id/1349698283/video/a-man-farmer-holds-a-harvest-of-garlic-in-his-hands-selective-focus-food.jpg?s=640x640&k=20&c=CCOybFcPnb6TMVjX5WFXh9nGTdH4ZxOubEOmA1YKx1M=' },
    { id: 10, name: 'Lettuce', description: 'Crisp and fresh lettuce.', price: 1.2, image: 'https://media.istockphoto.com/id/471584081/photo/butterhead-lettuce-clipping-path-included.jpg?s=612x612&w=0&k=20&c=aC6X5jotRP7jAbfE9rY4UcSyb2ueVS-Oz3kENyEzZ6I=' },
    { id: 11, name: 'Zucchini', description: 'Versatile and low-calorie.', price: 1.5, image: 'https://media.istockphoto.com/id/1644584479/photo/growing-zucchini-in-the-backyard-garden.jpg?s=612x612&w=0&k=20&c=vpUaVGCd0Kz3EXnoxP25_9xlw3UV-nRsSHhKI025qFc=' },
    { id: 12, name: 'Eggplant', description: 'Rich and meaty texture.', price: 1.8, image: 'https://media.istockphoto.com/id/1305561964/video/farmers-harvesting-eggplant-in-eggplant-greenhouse-close-up-view-4k-video.jpg?s=640x640&k=20&c=Mmdiq6peaV3PcCDtnsfQoQGQKaP5TdGUFIwOI74ajY8=' },
    { id: 13, name: 'Green Beans', description: 'Tender and flavorful.', price: 1.3, image: 'https://media.istockphoto.com/id/182051238/photo/green-beans.jpg?s=612x612&w=0&k=20&c=1iWvt7JuV68b7oNFDL9b4cUv0GyQTqWIOvkW1mDKH-k=' },
    { id: 14, name: 'Pumpkin', description: 'Sweet and nutritious.', price: 2.5, image: 'https://media.istockphoto.com/id/1691228354/video/pumpkin-harvest-and-thanksgiving-day-season-farm-decorated-with-pumpkins-and-gourds-for.jpg?s=640x640&k=20&c=DOQ7nvYjUCtVpfkeiEx6yV5Bi55Zl9LRWCD8UYwR1No=' },
    { id: 15, name: 'Radish', description: 'Peppery and crunchy.', price: 0.9, image: 'https://media.istockphoto.com/id/1319056338/photo/daikon-radish-in-green-leaves-background.jpg?s=612x612&w=0&k=20&c=OscDzoQWw_iGs9zZLG2CcEPn5C_3qglJ-ZyK3qFeIyw=' },
  ];

  return (
    <div className="vegetables-page fade-in">
      <h1>Vegetables</h1>
      <ProductList products={vegetables} addToCart={addToCart} />
    </div>
  );
};

export default Vegetables;