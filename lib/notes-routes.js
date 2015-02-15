'use strict';

var fs = require('fs-extra');


module.exports = function(req, res) {

  var fileCount = fs.readdirSync('./data').length;
  var fileNumber = req.url;
  fileNumber = fileNumber.split('/');
  if (fileNumber.length > 2) {
    fileNumber = fileNumber[2];
    console.log(fileNumber);
  }

  if (req.method === 'POST') {
    var input = '';

    req.on('data', function(data) {
      input += data.toString('utf-8');
    });

    req.on('end', function() {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      fs.writeFile('./data/notes' + (fileCount + 1) + '.JSON', input, function(err) {
        console.log('file written');
      });

      res.end(JSON.stringify({msg: 'posted'}));
    });

  } else if (req.method === 'GET') {

      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      fs.readJson(__dirname+'/../data/notes' + fileNumber + '.JSON', function(err, data){
        res.write(JSON.stringify(data));
        res.end();
      });

  } else if (req.method === 'DELETE') {
    fs.unlink('./data/notes' + fileNumber + '.JSON', function(exception){
      console.log('DELETED');
    });
    res.end();
  } else if (req.method === 'PUT') {

    var input = '';

    req.on('data', function(data) {
      input += data.toString('utf-8');
    });

    req.on('end', function() {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      fs.writeFile('./data/notes' + fileNumber + '.JSON', input, function(err) {
        console.log('file written');
      });

      res.end(JSON.stringify({msg: 'putted'}));
    });

  } else if (req.method === 'PATCH') {


    var input = '';

    req.on('data', function(data) {
      input += data.toString('utf-8');
    });

    req.on('end', function() {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      fs.writeFile('./data/notes' + fileNumber + '.JSON', input, function(err) {
        console.log('file written');
      });

      res.end(JSON.stringify({msg: 'putted'}));
    });

  }
};
