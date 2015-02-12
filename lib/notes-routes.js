'use strict';

var fs = require('fs');


module.exports = function(req, res) {
  console.log(req.method.toString());

  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
    var input = '';

    req.on('data', function(data) {
      input += data.toString('utf-8');
    });

    req.on('end', function() {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.write('I hit POST, PUT, or PATCH');
      fs.writeFile('./data/notes.JSON', input, function(err, res) {
        if (err) throw err;
        console.log('file written');
      });

      res.end();
    });
  } else if (req.method === 'GET') {

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('I hit GET\n')
    fs.readFile('./data/notes.JSON', function(err, data) {
      if (err) throw err;
      console.log('read data');
      res.write(data.toString())
    });
    res.end();
  } else if (req.method === 'DELETE') {
    fs.unlink('./data/notes.JSON', function(exception){
      console.log('DELETED');
    });
    res.end();
  }
};
