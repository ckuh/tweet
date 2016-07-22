(function() {
  'use strict'

  angular
  .module('tweet.result')
    .factory("Result", Result);

    function Result() {
      var service = {
        tweets: {},
        sentimentValue: {},
        query: ''
      };

      return service;
    }

})();
