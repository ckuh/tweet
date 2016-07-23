(function() {
  'use strict'

  angular
  .module('tweet.result', [])
    .controller("ResultController", ResultController);

    function ResultController(Result, $cookies) {
      var vm = this;

      vm.userInput = Result.query;
      vm.tweets = Result.tweets;
      vm.sentimentValue = Result.sentimentValue;
    }

})();
