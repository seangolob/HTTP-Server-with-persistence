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
        expect(res.text).to.eql('{"msg":"posted"}');
        done();
      });
  });
});

describe('get request', function() {
  it('responds to a get request', function(done) {
    chai.request('localhost:3000')
      .get('/notes/1')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.text).to.eql('{"putting":"put"}');
        done();
      });
  });
});

describe('put request', function() {
  it('responds to a put request', function(done) {
    chai.request('localhost:3000')
      .put('/notes/2')
      .send({hello: 'world'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.text).to.eql('{"msg":"putted"}');
        done();
      });
  });
});

describe('patch request', function() {
  it('responds to a patch request', function(done) {
    chai.request('localhost:3000')
      .patch('/notes/3')
      .send({hello: 'world'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.text).to.eql('{"msg":"putted"}');
        done();
      });
  });
});




