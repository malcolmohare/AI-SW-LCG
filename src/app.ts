/// <reference path="../typings/tsd.d.ts" />

import http = require('http');
import Card = require('./card');
import fs = require('fs');
import CardFaction = require('./cardfaction');
import SwLcgGame = require('./game');
import Deck = require('./deck');
import Block = require('./block');

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

	var g : SwLcgGame = new SwLcgGame(Deck.fromBlocks([blocks[1]]), CardFaction.LightJedi,
		Deck.fromBlocks([blocks[2]]), CardFaction.DarkSith);

	fs.writeFile("data/gamestate.dat", JSON.stringify(g));
	
var server: http.Server = http.createServer((request: http.ServerRequest, response: http.ServerResponse) => {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello World from SW LCG AI');
	response.write(cards[1].name);
	response.end();
});

var port = process.env.port || 8011;
server.listen(port);
console.log('Running server at http://localhost:' + port);
