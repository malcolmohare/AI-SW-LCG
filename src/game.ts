import Deck = require('./deck');
import Player = require('./player');
import CardFaction = require('./cardfaction');
import PlayingField = require('./playingfield');
import TurnPhase = require('./turnphase');

class SwLcgGame {

	lightSidePlayer : Player;
	darkSidePlayer : Player;
	lightSidePlayingField : PlayingField;
	darkSidePlayingField : PlayingField;
	deathStarCounter : number = 0;
	darkSideTurn : boolean = true;
	currentTurnPhase : TurnPhase;
	
	constructor(lightSideDeck : Deck, lightSideFaction : CardFaction,
		darkSideDeck : Deck, darkSideFaction : CardFaction) {
	    this.lightSidePlayer = new Player("light test");
		this.darkSidePlayer = new Player("dark test");
		this.lightSidePlayingField = new PlayingField(lightSideDeck, lightSideFaction);
		this.darkSidePlayingField = new PlayingField(darkSideDeck, darkSideFaction);
	}
}
export = SwLcgGame;