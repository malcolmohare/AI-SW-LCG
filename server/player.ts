import Card = require('./card');

class Player {

    name : string;
	hand : Card[];
    
	constructor(_name : string) {
		this.name = _name;
		this.hand = new Array<Card>();
	}
}
export = Player;