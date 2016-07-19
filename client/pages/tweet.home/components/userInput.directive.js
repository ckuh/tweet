(function() {
  'use strict'

  angular
  .module('tweet.home')
    .directive("tweetUserInput", tweetUserInput);

    function tweetUserInput() {
      var directive = {
        scope: {
          getTweets: '&'
        },
        templateUrl: '../pages/tweet.home/templates/userInput.html',
        restrict: 'E',
        controller: tweetUserInputCtrl,
        controllerAs: 'vm'
      };

      return directive;
    }

    tweetUserInputCtrl.$inject = [];

    function tweetUserInputCtrl() {
      var vm = this;

      vm.removeSpace = function() {
        vm.userName = vm.userName.split(' ').join('');
      }
    }

})();
