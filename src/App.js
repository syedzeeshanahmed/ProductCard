import React from 'react';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <ProductCard
        name="Sony PlayStation 5 - Ps5 Console Disc Edition - White"
        price="189,499"
        picture="https://static-01.daraz.pk/p/1c236605d29c8749c6a751d62f73c1c1.jpg_750x750.jpg_.webp"
        inStock={true}
      />
    </div>
  );
}

export default App;
