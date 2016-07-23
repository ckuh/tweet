(function() {
  'use strict'

  angular
  .module('tweet.result')
    .factory("Result", Result);

    function Result() {
      var service = {
        tweets: {},
        sentimentValue: {},
        query: '',
        dataLoad: false
      };

      return service;
    }

})();
