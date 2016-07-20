(function() {
  'use strict'

  angular
  .module('tweet.home', [])
    .controller("HomeController", HomeController);

    function HomeController(Home) {
      var vm = this;
      vm.tweetsLoaded = false;
      vm.tweets = {}

      vm.getTweets = function(userName) {
        Home.getTweets(userName)
          .then(function(data) {
            console.log('data: ', data);
            vm.tweetsLoaded = true;
            vm.tweets = data;

            Home.getSentiment(vm.tweets)
              .then(function(data) {
                console.log('data: ', data);
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
