import Card = require('./card');
import CardFaction = require('./cardfaction');

class FactionCard extends Card {
	
	constructor(_faction : CardFaction) {
		super();
		this.faction = _faction;
		this.resources = 1;
	}
}
export = FactionCard;