var mongoose = require('mongoose');
var path = require('path');

var uri = process.env.MONGOLAB_URI || 'mongodb://localhost/shortlydb';

mongoose.connect(uri);

var db = mongoose.connection;
module.exports = db;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});
