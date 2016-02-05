import Card = require('./card');

class Block {
	blockNumber : number;
	private cards : Card[];
	
	constructor() {
		this.cards = new Array<Card>();
	}
	
	addCard(c : Card) {
		this.cards.push(c);
	}
	
	getCards() : Card[] {
		return this.cards;
	}
}
export = Block;