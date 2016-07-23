(function() {
  'use strict'

  angular
  .module('tweet')
    .run(run);

    function run ($rootScope, $state, Result) {
      $rootScope.$on('$stateChangeStart', function (event, to) {
        if(!to.auth) {
          return;
        }

        event.preventDefault();

        if(Result.dataLoad) {
          to.auth = false;
          $state.go(to.name);
        } else {
          $state.go('home');
        }
      });
    }

})();
