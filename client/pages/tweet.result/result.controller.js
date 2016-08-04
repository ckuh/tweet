(function() {
  'use strict'

  angular
  .module('tweet.result', [])
    .controller("ResultController", ResultController);

    function ResultController(Result, Home, $cookies) {
      var vm = this;

      vm.dataLoad = false;
      vm.emotionShow = false;
      vm.sentimentShow = true;

      vm.setIndico = function(indicoOption) {
        switch (indicoOption) {
          case 'emotion':
            vm.emotionShow = true;
            vm.sentimentShow = false;
            break;
          default:
          vm.emotionShow = false;
          vm.sentimentShow = true;
        }
      }

      if(!Result.tweets) {
        Home.getTweets(Result.userInput, Result.query)
          .then(function(data) {
            //console.log('tweets: ', data);
            Result.tweets = data;

            Home.getEmotion(Result.tweets)
              .then(function(data) {
                //console.log('emotion: ', data);
                Result.emotion = data.emotion;

                Home.getSentiment(Result.tweets)
                  .then(function(data) {
                    //console.log('sentiment: ', data);
                    if(Result.query === "userName") {
                      vm.userInput = '@' + Result.tweets[0].user.screen_name
                    } else {
                      vm.userInput = Result.userInput;
                    }
                    Result.sentimentValue = data.sentimentValue;
                    vm.tweets = Result.tweets;
                    vm.sentimentValue = Result.sentimentValue;
                    vm.emotion = Result.emotion;
                    vm.dataLoad = true;
                  })
                  .catch(function(err) {
                    console.error('error: ', err);
                  })
              })
              .catch(function(err) {
                console.error('error: ', err)
              })
          })
          .catch(function(err) {
            console.error('error: ', err);
          })
      } else {
        if(Result.query === "userName") {
          vm.userInput = '@' + Result.tweets[0].user.screen_name
        } else {
          vm.userInput = Result.userInput;
        }
        vm.tweets = Result.tweets;
        vm.sentimentValue = Result.sentimentValue;
        vm.emotion = Result.emotion;
        vm.dataLoad = true;
      }

    }

})();
