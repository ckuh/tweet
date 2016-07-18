(function() {
  'use strict'

  angular
  .module('tweet.home', [])
    .controller("HomeController", HomeController);

    function HomeController() {
      var vm = this;

      vm.getTweets = function (userName) {
        console.log(userName);
      }
    }

})();
