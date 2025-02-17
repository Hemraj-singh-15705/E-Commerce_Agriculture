import React from 'react';
import ProductList from '../components/ProductList';
import './Fruits.css'; // Import the CSS file for styling

const Fruits = ({ addToCart }) => {
  const fruits = [
    { id: 1, name: 'Apple', description: 'Fresh and juicy apples.', price: 2.5, image: 'https://media.istockphoto.com/id/613534346/photo/apple-orchard-ready-for-harvest.jpg?s=612x612&w=0&k=20&c=hujHJvjaHYGbSJuYlrHmp99pHwd44F1FSbuPjUuI9vA=' },
    { id: 2, name: 'Banana', description: 'Ripe and sweet bananas.', price: 1.5, image: 'https://media.istockphoto.com/id/1494763483/photo/banana-concept.jpg?s=612x612&w=0&k=20&c=ZeVP-L6ClmyT-i0N-QAbDK7q37uHhrzg7KOzMkaOtg4=' },
    { id: 3, name: 'Orange', description: 'Sweet and tangy oranges.', price: 1.8, image: 'https://media.istockphoto.com/id/1923544709/video/farm-hands-orange-trees-and-person-harvest-nature-field-citrus-plantation-or-organic-produce.jpg?s=640x640&k=20&c=fCznjgCaTU4H-r4TR5HhKobJO3FwLe0ZMkMyFb2S3Po=' },
    { id: 4, name: 'Mango', description: 'King of fruits, sweet and delicious.', price: 3.0, image: 'https://media.istockphoto.com/id/1435602229/photo/close-up-of-red-mangoes.jpg?s=612x612&w=0&k=20&c=a2uO7Ly-irGjtfqZC0ZTt9ps_Sh8S3a6ulf-TMRebao=' },
    { id: 5, name: 'Pineapple', description: 'Tropical and refreshing.', price: 2.5, image: 'https://media.istockphoto.com/id/1445723861/photo/pineapple-fruit-on-top-of-its-mother-plant-in-the-field-blurred-green-nature-background.jpg?s=612x612&w=0&k=20&c=RgMY1MSkkD11cBIC5WSKAguCuMAsG_v5XfHr72cg9yo=' },
    { id: 6, name: 'Strawberry', description: 'Sweet and juicy strawberries.', price: 4.0, image: 'https://media.istockphoto.com/id/157643364/photo/tumble-of-strawberries.jpg?s=612x612&w=0&k=20&c=vVdsTB_7_vKl0I4HMN0jqb7929r2OnlLVAs5Na4J3B4=' },
    { id: 7, name: 'Grapes', description: 'Small and flavorful grapes.', price: 2.0, image: 'https://media.istockphoto.com/id/842928214/photo/fresh-grapes-in-the-basket.jpg?s=612x612&w=0&k=20&c=SPUyIifWeeXCda_P8sqE0WFvZ-pDyaQ4aZLjNHpYEc4=' },
    { id: 8, name: 'Watermelon', description: 'Juicy and refreshing watermelon.', price: 5.0, image: 'https://media.istockphoto.com/id/578273202/photo/fresh-sliced-watermelon-wooden-background.jpg?s=612x612&w=0&k=20&c=jyRCeZdU2GOP1uE0lQfIBaZusqzAZO3e6sa0j5cNww4=' },
    { id: 9, name: 'Kiwi', description: 'Tart and nutrient-rich kiwi.', price: 2.2, image: 'https://media.istockphoto.com/id/493890436/photo/kiwi-fruit-slices-on-wooden-table.jpg?s=612x612&w=0&k=20&c=mjwyrQ0YPFuTMZtmcSv7UIkgBRDFfwpf30anV9RL1kQ=' },
    { id: 10, name: 'Peach', description: 'Soft and sweet peaches.', price: 2.8, image: 'https://media.istockphoto.com/id/1408351332/photo/closeup-view-of-fresh-ripe-peaches-on-a-tree.jpg?s=612x612&w=0&k=20&c=EjGoS_Nazaj8wxipSIg4B0uU_Z1IWM17goYQhM-wNEQ=' },
    { id: 11, name: 'Pear', description: 'Crisp and juicy pears.', price: 2.0, image: 'https://media.istockphoto.com/id/2175527114/video/pear-hanging-on-tree.jpg?s=640x640&k=20&c=zZ3puQuPJFYofBo5G6_RxCUiJ2tsZJSHolf9UDDHLrI=' },
    { id: 12, name: 'Cherry', description: 'Sweet and tangy cherries.', price: 3.5, image: 'https://media.istockphoto.com/id/907911132/photo/close-up-of-coffee-cherries.jpg?s=612x612&w=0&k=20&c=TlXy2tIFWy9XlD5WvIpFoP3SfLH7g3PuONuuhYal0yE=' },
    { id: 13, name: 'Blueberry', description: 'Antioxidant-rich blueberries.', price: 4.5, image: 'https://media.istockphoto.com/id/1349283598/photo/blueberries-in-basket-on-wooden-table.jpg?s=612x612&w=0&k=20&c=FgxPb98XvxEPczB4fFAClMNshc6dnZDX5PzBRu1eBrE=' },
    { id: 14, name: 'Raspberry', description: 'Tart and flavorful raspberries.', price: 4.0, image: 'https://media.istockphoto.com/id/486346030/photo/ripe-raspberry-with-leaf.jpg?s=612x612&w=0&k=20&c=OgHRHezySha7pn_a87B_i4DRvKMTk9JpPy4vGjaa4Kg=' },
    { id: 15, name: 'Papaya', description: 'Sweet and tropical papaya.', price: 3.2, image: 'https://media.istockphoto.com/id/1782704715/video/tracking-shot-of-fresh-papaya-and-banana-trees-unripe-fruits-in-farm-view-of-nature.jpg?s=640x640&k=20&c=NsnW1ucBd_BDa48BULXhJ0oVliSKcRZ0XApZb1PVWJg=' },
    { id: 16, name: 'Guava', description: 'Aromatic and nutrient-packed guava.', price: 2.7, image: 'https://media.istockphoto.com/id/1141186634/photo/two-guavas-on-tree.jpg?s=612x612&w=0&k=20&c=nGO_v6SkFloPZa4_geol9GkFYURoDGEjTqaC2d4V6Kc=' },
  ];

  return (
    <div className="fruits-page fade-in">
      <h1>Fruits</h1>
      <ProductList products={fruits} addToCart={addToCart} />
    </div>
  );
};

export default Fruits;