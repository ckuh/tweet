(function() {
  'use strict'

  angular
  .module('tweet.home', [])
    .controller("HomeController", HomeController);

    function HomeController(Home, Result, $state) {
      var vm = this;
      vm.tweetsLoaded = false;
      vm.sentimentLoaded = false;
      vm.tweets = {}

      vm.getTweets = function(userInput, query) {
        Result.query = userInput;
        
        query = query.split(' ').map(function(item, index){
          if(index === 0) {
            return item.toLowerCase();
          } else {
            return item.charAt(0).toUpperCase() + item.slice(1);
          }
        }).join('');

        Home.getTweets(userInput, query)
          .then(function(data) {
            console.log('data: ', data);
            Result.tweets = data;

            Home.getSentiment(Result.tweets)
              .then(function(data) {
                console.log('data: ', data);
                Result.sentimentValue = data.sentimentValue;

                $state.go('result');
              })
              .catch(function(err) {
                console.error('error: ', err);
              })
          })
          .catch(function(err) {
            vm.tweetsLoaded = false;
            console.error('error: ', err);
          })
      }
    }

})();
