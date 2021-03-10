interface Card {
  title: string;
  artist: string;
  year: number;
}
interface Player {
  id: number;
  name: string;
  lockedCards: Card[];
  looseCards: Card[];
}
const abba: Card = {
  title: "Waterloo",
  artist: "ABBA",
  year: 1974
};
const nirvana: Card = {
  title: "Polly",
  artist: "Nirvana",
  year: 1991
};
const emmasLockedCards: Card[] = [abba, nirvana];
const emmasLooseCards: Card[] = [];
const emmasCards: Card[] = emmasLockedCards.concat(emmasLooseCards);

const compareYear = function(card1: Card, card2: Card) {
  if (card1.year > card2.year) {
    return -1;
  }
  if (card1.year < card2.year) {
    return 1;
  }
  return 0;
};

const player1: Player = {
  id: 1,
  name: "Emma",
  lockedCards: emmasLockedCards,
  looseCards: []
};

console.log(emmasCards);

function guessOrder(cards: Card[], index: int) {}
