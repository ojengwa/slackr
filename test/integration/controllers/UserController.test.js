var request = require('supertest');

describe('UserController', function() {

    describe('#all()', function() {
        it('should return a list of users', function (done) {
          request(sails.hooks.http.app)
            .get('/user')
            .expect(200, done)
        });
    });

});