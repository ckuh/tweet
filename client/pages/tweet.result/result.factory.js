(function() {
  'use strict'

  angular
  .module('tweet.result')
    .factory("Result", Result);

    function Result($cookies) {
      var service = {
        userInput: $cookies.get('userInput') || '',
        query: $cookies.get('query') || '',
        tweets: null,
        sentimentValue: null,
        dataLoad: $cookies.get('dataLoad') || false
      };

      return service;
    }

})();
