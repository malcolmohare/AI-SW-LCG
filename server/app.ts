import express = require('express');
import path = require('path');
var port: number = process.env.PORT || 8011;
var app = express();
import fs = require('fs');
import CardFaction = require('./cardfaction');
import SwLcgGame = require('./game');
import Deck = require('./deck');
import Block = require('./block');

var blocks : Array<Block> = Block.loadBlocksFromFile();

var g : SwLcgGame = new SwLcgGame(Deck.fromBlocks([blocks[1]]), CardFaction.LightJedi,
	Deck.fromBlocks([blocks[2]]), CardFaction.DarkSith);

fs.writeFile("data/gamestate.dat", JSON.stringify(g));

app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));

var renderIndex = (req: express.Request, res: express.Response) => {
	res.sendFile(path.resolve(__dirname, 'index.html'));
}

app.get('/*', renderIndex);


var server = app.listen(port, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Running server at ' + host + " on port " + port);	
});
