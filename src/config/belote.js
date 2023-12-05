const cardsFolder = "/assets/img/cards";

const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const ranks = ["07", "08", "09", "10", "11", "12", "13", "01"];

export const getCards = () => {
    let cards = [];
    suits.forEach(suit => {
        ranks.forEach(rank => {
            let src = `${cardsFolder}/${suit}${rank}.png`;
            cards.push({suit, rank, src});
        });
    });
    return cards;
}