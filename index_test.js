/* UNIT TESTING WITH CHAI & MOCHA */

const expect = chai.expect;

    describe('shuffle', function() {
        it('Should return an array of 52 cards', function() {
            let shuffledDeck = new Deck();
            console.log(shuffledDeck);
            expect(shuffledDeck.deck.lengths).to.equal(52);
        });
    });