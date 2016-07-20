(function() {
  'use strict'

  angular
  .module('tweet.home')
    .directive("tweetUserTweets", tweetUserTweets);

    function tweetUserTweets() {
      var directive = {
        scope: {
          tweets: '='
        },
        templateUrl: '../pages/tweet.home/templates/userTweets.html',
        restrict: 'E',
        controller: tweetUserTweetsCtrl,
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;
    }

    tweetUserTweetsCtrl.$inject = [];

    function tweetUserTweetsCtrl() {
      var vm = this;
    }

})();
