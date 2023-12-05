import React from 'react';
import "./card.css";

const Card = ({ card }) => {
  const { suit, rank, src } = card;
  const classList = rank === "07" ?"card inactive" : `card active`;
  return (
    <div className={classList}>
      <img className='card-image' src={src} alt={`${suit} ${rank}`} />
    </div>
  );
};

export default Card;
