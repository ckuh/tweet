(function() {
  'use strict'

  angular
  .module('tweet.home', [])
    .controller("HomeController", HomeController);

    function HomeController(Home, Result, $state, $cookies) {
      var vm = this;
      vm.tweetsLoaded = false;
      vm.sentimentLoaded = false;
      vm.tweets = {}

      vm.getTweets = function(userInput, query) {
        Result.userInput = userInput;
        query = query.split(' ').map(function(item, index){
          if(index === 0) {
            return item.toLowerCase();
          } else {
            return item.charAt(0).toUpperCase() + item.slice(1);
          }
        }).join('');
        $cookies.put('userInput', userInput);
        $cookies.put('query', query);

        Home.getTweets(userInput, query)
          .then(function(data) {
            console.log('tweets: ', data);
            if(data.length) {
              Result.tweets = data;

              Home.getEmotion(Result.tweets)
              .then(function(data) {
                console.log('emotion: ', data)
                Result.emotion = data.emotion;

                Home.getSentiment(Result.tweets)
                .then(function(data) {
                  console.log('sentiment: ', data);
                  Result.sentimentValue = data.sentimentValue;
                  Result.dataLoad = true;
                  $cookies.put('dataLoad', true);

                  $state.go('result');
                })
                .catch(function(err) {
                  $cookies.put('dataLoad', false);
                  console.error('error: ', err);
                })
              })
              .catch(function(err) {
                $cookies.put('dataLoad', false);
                console.error('error: ', err);
              })
            } else {
              vm.tweetsLoaded = false;
            }
          })
          .catch(function(err) {
            $cookies.put('dataLoad', false);
            vm.tweetsLoaded = false;
            console.error('error: ', err);
          })
      }

      vm.noTweets = function() {

      }
    }

})();
