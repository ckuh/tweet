(function() {
  'use strict'

  angular
  .module('tweet.result')
    .directive("tweetEmotion", tweetEmotion);

    function tweetEmotion() {
      var directive = {
        scope: {
          emotion: '='
        },
        templateUrl: '../pages/tweet.result/templates/emotion.html',
        restrict: 'E',
        controller: tweetEmotionCtrl,
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;
    }

    tweetEmotionCtrl.$inject = [];

    function tweetEmotionCtrl() {
      var vm = this;
    }

})();
