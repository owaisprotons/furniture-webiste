import React from 'react';
import './ProductGallery.css';

import Chair from "../../assets/chair.jpeg"
import Table from "../../assets/table.jpeg"
import Sofa from "../../assets/sofa.jpeg"
import Bed from "../../assets/bed.jpeg"

const ProductGallery = () => {
  const products = [
    { id: 1, name: 'Chair', image: Chair },
    { id: 2, name: 'Table', image: Table },
    { id: 3, name: 'Sofa', image: Sofa },
    { id: 4, name: 'Bed', image:  Bed},
  ];

  return (
    <div className="gallery-container">
      {products.map((product) => (
        <div key={product.id} className="gallery-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductGallery;
