import Deck = require('./deck');
import Card = require('./card');
import CardType = require('./cardtype');
import CardFaction = require('./cardfaction');

class PlayingField {
	
	objectiveDeck : Deck;
	commandDeck : Deck;
	faction : CardFaction;
	discardPile : Card[];
	objectives : Card[];
	units : Card[];

	constructor(_deck : Deck, _faction : CardFaction) {
		this.faction = _faction;
		this.discardPile = new Array<Card>();
		this.objectives = new Array<Card>();
		this.units = new Array<Card>();
		var objectiveCards : Card[] = new Array<Card>();
		var commandCards : Card[] = new Array<Card>();
		while(_deck.deckSize() > 0) {
		    var nextCard : Card = _deck.draw();
			if (nextCard.type == CardType.Objective) {
			    objectiveCards.push(nextCard);
			} else {
			    commandCards.push(nextCard);
			}
		}
		this.objectiveDeck = new Deck(objectiveCards);
		this.commandDeck = new Deck(commandCards);
    }
	
	drawObjective() {
		if (this.objectiveDeck.hasCards()) {
			return this.objectiveDeck.draw();
		}
	}
	
	drawCard() {
		if (this.commandDeck.hasCards()) {
			return this.commandDeck.draw();
		}
	}
	
	discardCard(card : Card) {		
		// add to top of discard pile
		this.discardPile.unshift(card);
	}
	
	addObjective(card : Card) {
		this.objectives.push(card);
	}
	
	addUnit(card : Card) {
		this.units.push(card);
	}
}
export = PlayingField;