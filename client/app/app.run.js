(function() {
  'use strict'

  angular
  .module('tweet')
    .run(run);

    function run ($rootScope, $state) {
      $rootScope.$on('$stateChangeStart', function (event, to) {
        if(!to.auth) {
          return;
        }
      });
    }

})();
