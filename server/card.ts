import CardType = require('./cardtype');
import CardFaction = require('./cardfaction');
import CardSet = require('./cardset');
import Icon = require('./icon');

class Card {
    name : string;
    type : CardType;
	faction : CardFaction;
    force : number;
	cost : number;
	focus : number;
	action : number;
	set : CardSet;
	cardNumber : number;
	block : number;
	blockNumber : number;
	health : number;
	resources : number;
	keywords : String[];
	icons : Icon[];
}

export = Card;