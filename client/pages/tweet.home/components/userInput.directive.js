(function() {
  'use strict'

  angular
  .module('tweet.home')
    .directive("tweetUserInput", tweetUserInput);

    function tweetUserInput() {
      var directive = {
        link: link,
        templateUrl: '../pages/tweet.home/templates/userInput.html',
        restrict: 'EA'
      };

      return directive;

      function link(scope, element, attrs) {

      }
    }

})();
