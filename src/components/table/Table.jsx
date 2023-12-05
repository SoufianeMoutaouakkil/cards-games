import React from "react";
import cardsService from "../../services/cards";
import Hand from "../hand/Hand";
import "./table.css";

function Table() {
    const cards = cardsService.getHandCards();

    return (
        <div className="table">
            <Hand cards={cards} />
        </div>
    );
}

export default Table;
