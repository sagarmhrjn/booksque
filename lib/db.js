'use strict';

var mongoose = require('mongoose');

var db = function () {
    return {
        config: function (conf) {
            mongoose.connect('mongodb://localhost/booksque');
            var db = mongoose.connection;
            // Check for an error
            db.on('error', console.error.bind(console, 'Connection Error'));
            // Check for connection
            db.once('open', function () {
                console.log('DB Connection open...')
            })
        }
    }
}

module.exports = db();