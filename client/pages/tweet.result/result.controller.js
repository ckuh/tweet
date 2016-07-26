(function() {
  'use strict'

  angular
  .module('tweet.result', [])
    .controller("ResultController", ResultController);

    function ResultController(Result, Home, $cookies) {
      var vm = this;

      vm.dataLoad = false;

      if(!Result.tweets) {
        Home.getTweets(Result.userInput, Result.query)
          .then(function(data) {
            console.log('data: ', data);
            Result.tweets = data;

            Home.getSentiment(Result.tweets)
              .then(function(data) {
                console.log('data: ', data);
                Result.sentimentValue = data.sentimentValue;
                vm.userInput = Result.userInput;
                vm.tweets = Result.tweets;
                vm.sentimentValue = Result.sentimentValue;
                vm.dataLoad = true;
              })
              .catch(function(err) {
                console.error('error: ', err);
              })
          })
          .catch(function(err) {
            console.error('error: ', err);
          })
      } else {
        vm.userInput = Result.userInput;
        vm.tweets = Result.tweets;
        vm.sentimentValue = Result.sentimentValue;
        vm.dataLoad = true;
      }

    }

})();
