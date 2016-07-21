var Indico = require('../config/indico.config.js');
var _ = require('underscore');

exports.sentiment = {
  post: sentiementPost
}

function sentiementPost(params) {
  return new Promise(function(resolve, reject) {
    var batchInput = _.pluck(params, 'text');

    Indico.sentimentHQ(batchInput)
      .then(function(res) {
        var totalSentiment = 0;
        _.each(res, function(currentSentiment) {
          totalSentiment += currentSentiment;
        })

        resolve({sentimentValue: totalSentiment / res.length});
      })
      .catch(function(err) {
        reject(err);
      })
  });
}

exports.emotion = {
  post: emotionPost
}

function emotionPost(params) {
  return new Promise(function(resolve, reject) {
    var batchInput = _.pluck(params, 'text');

    Indico.emotion(batchInput)
      .then(function(res) {
        var totalEmotion = {
          anger: 0,
          surprise: 0,
          sadness: 0,
          fear: 0,
          joy: 0
        }

        _.each(res, function(currentEmotion) {
          totalEmotion.anger += currentEmotion.anger;
          totalEmotion.surprise += currentEmotion.surprise;
          totalEmotion.sadness += currentEmotion.sadness;
          totalEmotion.fear += currentEmotion.fear;
          totalEmotion.joy += currentEmotion.joy;
        })

        _.mapObject(totalEmotion, function(value, key) {
          return value / res.length;
        })

        resolve({emotion: totalEmotion});
      })
      .catch(function(err) {
        reject(err);
      })
  });
}
