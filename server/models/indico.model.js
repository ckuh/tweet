var Indico = require('../config/indico.config.js');
var _ = require('underscore');

exports.post = function(params) {
  return new Promise(function(resolve, reject) {
    var batchInput = _.pluck(params, 'text');

    Indico.sentiment(batchInput)
      .then(function(res){
        var totalSentiment = 0;
        _.each(res, function(currentSentiment) {
          totalSentiment += currentSentiment;
        })
        
        resolve({sentimentValue: totalSentiment / res.length});
      })
      .catch(function(err){
        reject(res);
      })
  });
}
