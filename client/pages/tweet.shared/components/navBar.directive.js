(function() {
  'use strict'

  angular
  .module('tweet.shared')
    .directive("tweetNavBar", tweetNavBar);

    function tweetNavBar() {
      var directive = {
        scope: {
          sentimentValue: '='
        },
        templateUrl: '../pages/tweet.shared/templates/navBar.html',
        restrict: 'E',
        controller: tweetNavBarCtrl,
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;
    }

    tweetNavBarCtrl.$inject = [];

    function tweetNavBarCtrl() {
      var vm = this;
    }

})();
