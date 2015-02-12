'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
require('../http-server');

chai.use(chaihttp);

var expect = chai.expect;

describe('post request', function() {
  it('responds to a post request', function(done) {
    chai.request('localhost:3000')
      .post('/notes')
      .send({hello: 'world'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.text).to.eql('I hit POST, PUT, or PATCH');
        done();
      });
  });
});

describe('get request', function() {
  it('responds to a get request', function(done) {
    chai.request('localhost:3000')
      .get('/notes')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.text).to.eql('I hit GET\n');
        done();
      });
  });
});



