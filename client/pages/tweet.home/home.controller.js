(function() {
  'use strict'

  angular
  .module('tweet.home', [])
    .controller("HomeController", HomeController);

    function HomeController(Home) {
      var vm = this;

      vm.getTweets = function(userName) {
        Home.getTweets(userName)
          .then(function(data){
            console.log('data: ', data);
          })
          .catch(function(err){
            console.error('error: ', err.data[0].message);
          })
      }
    }

})();
