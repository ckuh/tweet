(function() {
  'use strict'

  angular
  .module('tweet.home', [])
    .controller("HomeController", HomeController);

    function HomeController(Home) {
      var vm = this;

      vm.getTweets = function(userName) {
        Home.getTweets(userName)
          .catch(function(err){
            console.error('error: ', err);
          })
          .then(function(data){
            console.log('data: ', data);
          })
      }
    }

})();
