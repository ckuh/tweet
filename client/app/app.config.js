(function() {
  'use strict'

  angular
  .module('tweet')
    .config(config);

    function config ($stateProvider, $urlRouterProvider, $httpProvider) {
      $stateProvider
      .state('home', {
        url: '/home',
        auth: false,
        templateUrl: '../pages/tweet.home/templates/home.html',
        controller: 'HomeController as vm'
      })
      .state('result', {
        url: '/result',
        auth: true,
        templateUrl: '../pages/tweet.result/templates/result.html',
        controller: 'ResultController as vm'
      })

      $urlRouterProvider
        .otherwise('/home');
    }

})();
