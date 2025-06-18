// components/Card.js
import React from 'react';
import '../App.css';

function Card({ title, description, image, price, rating }) {
  return (
    <div className="card">
      <img src={image} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="card-details">
          <span className="price">₹{price}</span>
          <span className="rating">⭐ {rating}{}</span>
        </div>
        <button className="add-to-cart">Add to Cart 🛒</button>
      </div>
    </div>
  );
}

export default Card;
