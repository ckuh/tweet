var Twitter = require('../config/config.js');
var _ = require('underscore');

exports.get = function(query) {
  console.log('inside twitter.model.js get')
  return new Promise(function(resolve, reject) {
    Twitter.get('statuses/user_timeline', {screen_name: query.userName, count: query.count || 10}, function(error, tweets, response) {
      if(error){
        reject(error)
      } else {
        resolve(_.map(tweets, function(tweet) {
          return _.pick(tweet, 'created_at', 'text', 'user', 'retweeted_status')
        }))
      }
    })
  });
}
