console.log(process.env.TWITTER_CONSUMER_KEY)
if(!process.env.TWITTER_CONSUMER_KEY) {
  require('./keys.js');
}
var Twitter = require('twitter');

module.exports = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});
