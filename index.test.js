/* UNIT TESTING WITH CHAI & MOCHA */

const expect = chai.expect;


    describe('shuffle', function() {
        it('Should return an array of 52 cards', function() {
            let shuffledDeck = new Deck();
            shuffledDeck.initializeDeck();
            shuffledDeck.shuffle();
            console.log(shuffledDeck);
            expect(shuffledDeck.cards.length).to.equal(52);
        });
    });