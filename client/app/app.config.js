(function() {
  'use strict'

  angular
  .module('tweet')
    .config(config);

    function config ($stateProvider, $urlRouterProvider, $httpProvider) {
      $stateProvider

      $urlRouterProvider
        .otherwise('/');
    }

})();
