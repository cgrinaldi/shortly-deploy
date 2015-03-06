var mongoose = require('mongoose');
var crypto = require('crypto');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var linkSchema = Schema({
  id: ObjectId,
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number
});

var Link = mongoose.model('link', linkSchema);

linkSchema.pre('save', function(next){
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0,5);
  next();
});

module.exports = Link;
