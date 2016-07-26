(function() {
  'use strict'

  angular
  .module('tweet.result')
    .factory("Result", Result);

    function Result($cookies) {
      var service = $cookies.getObject('Result') || {
        tweets: {},
        sentimentValue: {},
        query: '',
        dataLoad: true
      };

      return service;
    }

})();
