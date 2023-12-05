import React from 'react';
import "./card.css";

const Card = ({ card }) => {
  const { suit, rank, src } = card;

  return (
    <div className="card">
      <img className='card-image' src={src} alt={`${suit} ${rank}`} />
    </div>
  );
};

export default Card;
