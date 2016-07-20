var Twitter = require('../config/twitter.config.js');
var _ = require('underscore');

exports.user = {
  get: userGet
}

function userGet(query) {
  console.log('inside twitter.model.js user.get')
  return new Promise(function(resolve, reject) {
    Twitter.get('statuses/user_timeline', {screen_name: query.userName, count: query.count}, function(error, tweets, response) {
      if(error){
        reject(error)
      } else {
        var filteredTweets = _.map(tweets, function(tweet) {
          return _.pick(tweet, 'created_at', 'text', 'user', 'retweeted_status');
        })
        resolve(_.reject(filteredTweets, function(currentTweet){
          return 'retweeted_status' in currentTweet;
        }));
      }
    })
  });
}

exports.word = {
  get: wordGet
}

function wordGet(query) {
  console.log('inside twitter.model.js word.get')
  return new Promise(function(resolve, reject) {
    Twitter.get('search/tweets', {q: query.string, count: query.count}, function(error, tweets, response) {
      if(error){
        reject(error)
      } else {
        var filteredTweets = _.map(tweets.statuses, function(tweet) {
          return _.pick(tweet, 'created_at', 'text', 'user', 'retweeted_status');
        })
        resolve(_.reject(filteredTweets, function(currentTweet){
          return 'retweeted_status' in currentTweet;
        }));
      }
    })
  });
}
