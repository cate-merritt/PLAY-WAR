/* Deal 26 Cards to each Player from a Deck of 52 cards.
Iterate through the turns where each Player plays a Card.
The Player who played the higher card is awarded a point.
Ties result in zero points for both Players.
After all cards have been played, display the score and declare the winner.*/

/*This creates cards with a rank and suit*/
class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
}
/*Creates a deck out of cards*/
class Deck {
    constructor() {
        this.cards = [];
    }
/*Starts a deck with 52 cards*/
    initializeDeck() {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(rank, suit));
            }
        }
    }
/*Shuffles deck utilizing Fisher-Yates algorithm
From a list of all cards, a random card is drawn
This sequence continues until no cards remain */
    shuffle() {
        let location1, location2, tmp;
        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor(Math.random() * this.cards.length);
            location2 = Math.floor(Math.random() * this.cards.length);
            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
        }
    }
/*Deals cards and makes deck smaller*/
    dealCard() {
        return this.cards.pop();
    }
}
/*Creates a player with a hand of cards*/
class Player {
    constructor() {
        this.hand = [];
    }
/*Adds card to hand*/
    addCard(card) {
        this.hand.push(card);
    }
/*Plays card from hand*/
    playCard() {
        return this.hand.pop();
    }
}
/*This class is in charge of the game*/
class Game {
    constructor() {
        this.player1 = new Player();
        this.player2 = new Player();
        this.deck = new Deck();
    }
/*Hands out 26 cards from the shuffled deck
to each player*/
    dealCards() {
        this.deck.initializeDeck();
        this.deck.shuffle();

        for (let i = 0; i < 26; i++) {
            this.player1.addCard(this.deck.dealCard());
            this.player2.addCard(this.deck.dealCard());
        }
    }
/*Plays a round of the game
Compares ranks of cards played
Refreshes scores
Prints winner to console*/
    playRound() {
        const card1 = this.player1.playCard();
        const card2 = this.player2.playCard();

        console.log(`Player 1 lays down: ${card1.rank} of ${card1.suit}`);
        console.log(`Player 2 lays down: ${card2.rank} of ${card2.suit}`);

        if (card1.rank > card2.rank) {
            console.log('Player 1 takes the cake this round!');
            this.player1Score++;
        } else if (card1.rank < card2.rank) {
            console.log('This round goes to player 2!');
            this.player2Score++;
        } else {
            console.log("You both win! Try again!");
        }
    }
/*Plays whole game
Tracks scores
Prints final results to console*/
    playGame() {
        this.player1Score = 0;
        this.player2Score = 0;

        for (let i = 0; i < 26; i++) {
            this.playRound();
        }

        console.log(`\nGame Over!\nPlayer 1 Score: ${this.player1Score}
        \nPlayer 2 Score: ${this.player2Score}`);

        if (this.player1Score > this.player2Score) {
            console.log('Player 1 Victory! Trophy Goes To You!');
        } else if (this.player1Score < this.player2Score) {
            console.log('Player 2 is Victorious! You win a trophy!');
        } else {
            console.log("Cat's Game!");
        }
    }
}

/* Main Execution */
const warGame = new Game();
warGame.dealCards();
warGame.playGame();