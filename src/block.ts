import Card = require('./card');
import fs = require('fs');

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
	
	static loadBlocksFromFile() : Block[] {
		var cardData = fs.readFileSync('data/base.json', 'utf8');
		var cardJson = JSON.parse(cardData);
		var cards : Array<Card> = cardJson.cards;
		var blocks : Array<Block> = new Array<Block>();
		for(var i = 0; i < 40; i++) {
			blocks[i] = new Block();
		}
		for(var i = 1; i < cards.length; i++) {
			blocks[cards[i].block].addCard(cards[i]);
		}
		
		return blocks;
	}
}
export = Block;