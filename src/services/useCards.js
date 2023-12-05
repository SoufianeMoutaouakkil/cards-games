import React, { useEffect, useState } from "react";
import { getCards } from "../config/belote";

const useCards = () => {
    useEffect(() => {
        resetCards();
    }, []);

    const [cards, setCards] = useState(getCards());
    const [hands, setHands] = useState();

    const resetCards = () => {
        setCards((oldCards) => {
            const allcards = getCards();
            return allcards.sort(() => Math.random() - 0.5);
        });
    };

    const sliceCards = (nbCards) => {
        setCards((oldCards) => {
            return oldCards.slice(nbCards);
        });
    };

    const dispatch = (nbCards = 6) => {
        const handCards = [
            cards.slice(nbCards * 0, nbCards * 1),
            cards.slice(nbCards * 1, nbCards * 2),
            cards.slice(nbCards * 2, nbCards * 3),
            cards.slice(nbCards * 3, nbCards * 4),
        ]
        setHands(handCards);
    };

    return [hands, dispatch];
};

export default useCards;
