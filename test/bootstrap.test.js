var sails = require('sails');

before(function (done) {
    'use strict';

    // Increase the Mocha timeout so that Sails has enough time to lift.
    this.timeout(5000);

    sails.lift({
        // configuration for testing purposes
        port: 1338
    }, function (err, server) {
        if (err) {
            return done(err);
        }
        // here you can load fixtures, etc.
        done(err, sails);
    });
});

after(function (done) {
    'use strict';
    // here you can clear fixtures, etc.
    sails.lower(done);
});