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

const maxCards: number = 10; // Should take input from host at setup phase.
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
// player in turn guess on which index the card should be placed. Positions is a array of length cards (locked and loose concatinated).
// this will either trigger correctGuess() the year is right in relation to each other (use compareYear() to check) or wrongGuess() if not.
function guessOrder(hiddenCard: Card, positions: Card[cards.length+1], index: int) {
  // if correct --> correctGuess()
  // if wrong --> wrongGuess()
}
// this will be triggered in guessOrder() and will in turn place the card in the correct index in a temporary array.
function correctGuess() {
  // 1. place card in index + move other cards accordingly
  // 2. trigger lockOrContinue() --> if lock --> lockCards() / else continue --> drawCard() 
  // ... check if max cards reached --> victory!
}
// this will be triggered in guessOrder() when a player guess wrong.
function wrongGuess() {
  // 1. Check and remove potential looseCards.
  // 2. Trigger yearGuess() for other players.
  // 3. Update player in turn to the next player in turn.
}
// this function is used to lock your loose cards from this round.
function lockCards() {
}

// this function will be triggered when player in turn guess wrong and allows other players to guess a specific year.
function yearGuess() {

}