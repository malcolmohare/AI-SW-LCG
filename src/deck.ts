import Card = require('./card');
import Block = require('./block');

class Deck {
    cards : Card[];
	constructor(_cards : Card[]) {
	    this.cards = _cards;
	}
	
	draw() : Card {
	    return this.cards.shift();
	}
	
	shuffle() {
	
	}
	
	deckSize() : number {
	    return this.cards.length;
	}
	
	addToBottom(cardsToAdd : Card[]) {
		for (var i = cardsToAdd.length - 1; i >= 0; i--) {
			this.cards.push(cardsToAdd[i]);
		}
	}
	
	addToTop(cardsToAdd : Card[]) {
	    for (var i = cardsToAdd.length - 1; i >= 0; i--) {
			this.cards.unshift(cardsToAdd[i]);
		}
	}
	
	hasCards() : boolean {
		return this.cards.length > 0;
	}
	
	static fromBlocks(blocks : Block[]) {
		var c = new Array<Card>();
		for(var i = 0; i < blocks.length; i++) {
			for(var j = 0; j < blocks[i].getCards().length; j++) {
				c.push(blocks[i].getCards()[j]);
			}
		}
		return new Deck(c);
	}
}
export = Deck;