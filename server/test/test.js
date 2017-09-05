const assert = require('assert');
let user, movie

describe('Authentication Tests', function() {

  describe('Registration', function() {
    it('Should register a new user with the API', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });

  describe('Login', function() {
    it('Should send back a user', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
    it('Should send back an error', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });

});

describe('Movie Tests', function() {

  describe('Create', function() {
    it('Should create a new movie with the API', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });

  describe('Update', function() {
    it('Should update a movie', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });

  describe('Read', function() {
    it('Should send back a movie', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });

  describe('Delete', function() {
    it('Should remove the created user', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });

});
