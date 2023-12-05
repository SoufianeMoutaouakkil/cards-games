import { getCards } from "../config/belote";

const cards = getCards();

const shuffle = () => {
    return cards.sort(() => Math.random() - 0.5);
};
const getHandCards = (nbCards = 6) => {
    const shuffledCards = shuffle();
    return shuffledCards.slice(0, nbCards);
}
const cardsService = {
    shuffle,
    getHandCards
};

export default cardsService;