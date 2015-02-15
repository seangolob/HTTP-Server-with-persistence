'use strict';

var http = require('http');
var notes = require('./lib/notes-routes');

var routes = {};
routes['/notes'] = notes;

var server = http.createServer(function(req, res) {
  var url = req.url;
  url = url.split('/');
  url = '/' + url[1];
  console.log(url);
  if (typeof(routes[url]) === 'function') {
    routes[url](req, res);
  } else {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.write(JSON.stringify({msg: 'page not found'}));
    res.end();
  }
});

server.listen(3000, function() {
  console.log('server listening');
});
