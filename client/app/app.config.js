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

      $urlRouterProvider
        .otherwise('/home');
    }

})();
