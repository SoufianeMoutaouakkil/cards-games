import React from 'react';
import Card from '../card/Card';
import "./hand.css";

const Hand = ({cards}) => {
    return (
        <div className="hand">
            {cards.map((card) => (
                <Card key={card.src} card={card} />
            ))}
        </div>
    );
}

export default Hand;
