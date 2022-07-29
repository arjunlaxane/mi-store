import React from 'react';
import '../styles/HotItemCard.css';

const HotItemCard = ({ image, name, price }) => {
  return (
    <div className="HotItemCard">
      <img src={image} alt={name} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default HotItemCard;
