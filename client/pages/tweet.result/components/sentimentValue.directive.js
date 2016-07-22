(function() {
  'use strict'

  angular
  .module('tweet.home')
    .directive("tweetSentimentValue", tweetSentimentValue);

    function tweetSentimentValue() {
      var directive = {
        scope: {
          sentimentValue: '='
        },
        templateUrl: '../pages/tweet.result/templates/sentimentValue.html',
        restrict: 'E',
        controller: tweetSentimentValueCtrl,
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;
    }

    tweetSentimentValueCtrl.$inject = [];

    function tweetSentimentValueCtrl() {
      var vm = this;
    }

})();
