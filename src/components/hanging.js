
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/indoor.css';
import Plant4 from '../assets/pot2.jpg';
import Plant5 from '../assets/pot1.jpg';
import Plant2 from '../assets/pot.jpg';
import Plant6 from '../assets/pot3.jpg';
import Plant7 from '../assets/pot4.jpg';
import Plant8 from '../assets/pot5.jpg';

function Indoor() {
  const plantGallery = [
    { id: 1, image: Plant4, name: 'Exotic Fern', price: 29.99},
    { id: 2, image: Plant5, name: 'Tropical Beauty', price: 39.99},
    { id: 3, image: Plant6, name: 'Elegant Orchid', price: 49.99},
    { id: 4, image: Plant7, name: 'Peace Lily', price: 34.99},
    { id: 5, image: Plant8, name: 'Bonsai Tree', price: 54.99},
    { id: 6, image: Plant2, name: 'Succulent Garden', price: 24.99},
  ];


  return (
    <div className="indoor-container">
    <Navbar />
    {/*<div className="new-arrivals">
       <p>New Arrivals</p>
  </div>*/}
    <div className="grid-container">
      <div className="left-section">
        <div className="image-text">
          <img src={Plant4} alt="Plant 4" />
          <p>Beautiful Exotic Fern</p>
        </div>
        <div className="image-text">
          <img src={Plant5} alt="Plant 5" />
          <p>Tropical Beauty for Your Home</p>
        </div>
        <div className="image-text">
          <img src={Plant6} alt="Plant 2" />
          <p>Elegant Orchid for a Stylish Look</p>
        </div>
      </div>
      <div className="right-section">
          <div className="gallery">
            {plantGallery.map((plant) => (
              <div key={plant.id} className="plant-card">
                <div className="card-inner">
                  <div className="card-front">
                    <img src={plant.image} alt={plant.name} />
                    <div className="front-content">
                      <h3>{plant.name}</h3>
                      <p className="price">${plant.price.toFixed(2)}</p>
                      <div className="buttons">
                        <button className="order-button">Add to Cart</button>
                      </div>
                      <button className="description-button">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Indoor;
