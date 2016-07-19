(function() {
  'use strict'

  angular
  .module('tweet.home')
    .factory("Home", Home);

    function Home($http, $q) {
      var service = {
        getTweets: getTweets
      };

      function getTweets(userName) {
        return $http({
            method: 'GET',
            url: '/api/tweets',
            params: {
              userName: userName
            }
          })
            .then(getTweetsComplete)
            .catch(getTweetsFailed);

        function getTweetsComplete (response) {
          return response.data;
        }

        function getTweetsFailed (error) {
          return $q.reject(error);
        }
      }
      return service;
    }

})();
