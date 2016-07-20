(function() {
  'use strict'

  angular
  .module('tweet.home')
    .directive("tweetUserInput", tweetUserInput);

    function tweetUserInput() {
      var directive = {
        scope: {
          getTweets: '&'
        },
        templateUrl: '../pages/tweet.home/templates/userInput.html',
        restrict: 'E',
        controller: tweetUserInputCtrl,
        controllerAs: 'vm'
      };

      return directive;
    }

    tweetUserInputCtrl.$inject = [];

    function tweetUserInputCtrl() {
      var vm = this;
      vm.items = ['User Name', 'Key Word'];
      vm.selectedItem = vm.items[0]

      vm.removeSpace = function() {
        if(vm.selectedItem === vm.items[0]){
          vm.userName = vm.userName.split(' ').join('');
        }
      };
    }

})();
