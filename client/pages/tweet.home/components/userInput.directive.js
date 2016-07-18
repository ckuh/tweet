(function() {
  'use strict'

  angular
  .module('tweet.home')
    .directive("tweetUserInput", tweetUserInput);

    function tweetUserInput() {
      var directive = {
        link: link,
        scope: {
          getTweets: '&'
        },
        templateUrl: '../pages/tweet.home/templates/userInput.html',
        restrict: 'E'
      };

      return directive;

      function link(scope, element, attrs) {
        
      }
    }

})();
