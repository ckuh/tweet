(function() {
  'use strict'

  angular
  .module('tweet.home')
    .factory("Home", Home);

    function Home($http, $q) {
      var service = {
        getTweets: getTweets,
        getSentiment: getSentiment,
        getEmotion: getEmotion
      };

      function getTweets(userInput, query) {
        return $http({
            method: 'GET',
            url: '/api/tweets/' + query,
            params: {
              userInput: userInput,
              count: 100
            }
          })
            .then(getTweetsComplete)
            .catch(getTweetsFailed);

        function getTweetsComplete(response) {
          return response.data;
        }

        function getTweetsFailed(error) {
          return $q.reject(error);
        }
      }

      function getSentiment(tweets) {
        return $http({
          method: 'POST',
          url: '/api/indico/sentiment',
          data: tweets
        })
        .then(getSentimentComplete)
        .catch(getSentimentFailed);

        function getSentimentComplete(response) {
          return response.data;
        }

        function getSentimentFailed(error) {
          console.error('Failed for sentiment: ', error);
          return $q.reject(error);
        }
      }

      function getEmotion(tweets) {
        return $http({
          method: 'POST',
          url: '/api/indico/emotion',
          data: tweets
        })
          .then(getEmotionComplete)
          .catch(getEmotionFailed);

        function getEmotionComplete (response) {
          return response.data;
        }

        function getEmotionFailed (error) {
          console.error('Failed for emotion: ', error);
          return $q.reject(error);
        }
      }
      return service;
    }

})();
