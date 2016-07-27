(function() {
  'use strict'

  angular
  .module('tweet.shared')
    .directive("tweetOption", tweetOption);

    function tweetOption() {
      var directive = {
        scope: {
          setIndico: '&'
        },
        templateUrl: '../pages/tweet.shared/templates/option.html',
        restrict: 'E',
        controller: tweetOptionCtrl,
        controllerAs: 'vm'
      };

      return directive;
    }

    tweetOptionCtrl.$inject = [];

    function tweetOptionCtrl() {
      var vm = this;
      vm.isOpen = false;
    }

})();
