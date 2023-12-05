import React from "react";
import Card from "../card/Card";
import { getCards } from "../../config/belote";
import "./table.css";

function Table() {
    const cards = getCards();
    return (
        <div className="table">
            {cards.map((card) => (
                <Card key={card.src} card={card} />
            ))}
        </div>
    );
}

export default Table;
