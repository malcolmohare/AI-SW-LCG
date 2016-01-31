/// <reference path="../typings/tsd.d.ts" />

import http = require('http');
import swlcg = require('./deck');

var server: http.Server = http.createServer((request: http.ServerRequest, response: http.ServerResponse) => {

	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello World from SW LCG AI');
	response.end();
});

var port = process.env.port || 8011;
server.listen(port);
console.log('Running server at http://localhost:' + port);
