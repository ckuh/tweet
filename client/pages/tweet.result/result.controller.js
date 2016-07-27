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
            console.log('tweets: ', data);
            Result.tweets = data;

            Home.getEmotion(Result.tweets)
              .then(function(data) {
                console.log('emotion: ', data);
                Result.emotion = data;

                Home.getSentiment(Result.tweets)
                  .then(function(data) {
                    console.log('sentiment: ', data);
                    Result.sentimentValue = data.sentimentValue;
                    vm.userInput = Result.userInput;
                    vm.tweets = Result.tweets;
                    vm.sentimentValue = Result.sentimentValue;
                    vm.emotion = Result.emotion;
                    vm.dataLoad = true;
                  })
                  .catch(function(err) {
                    console.error('error: ', err);
                  })
              })
              .catch(function(data) {

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
