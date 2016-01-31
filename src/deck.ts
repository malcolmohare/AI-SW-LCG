export class Deck {
    cards : Card[];
	constructor(public _cards : Card[]) {
	    this.cards = _cards;
	}
	
	draw() {
	    return this.cards.pop();
	}
	
	shuffle() {
	
	}
	
	deckSize() {
	    return this.cards.length;
	}
}

export class Card {
    name : string;
	constructor() {}
}

class SwLcgCard {
    force : number;
	cost : number;
	focus : number;
}

export class Player {
    name : string;
    deck : Deck;
	constructor(public _deck : Deck) { this.deck = _deck; };
}