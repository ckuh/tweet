(function() {
  'use strict'

  angular
  .module('tweet.home', [])
    .controller("HomeController", HomeController);

    function HomeController(Home, Result, $state, $cookies, $mdDialog, $mdMedia) {
      var vm = this;
      vm.tweetsLoaded = false;
      vm.sentimentLoaded = false;
      vm.tweets = {}

      vm.getTweets = function(userInput, query) {
        query = query.split(' ').map(function(item, index){
          if(index === 0) {
            return item.toLowerCase();
          } else {
            return item.charAt(0).toUpperCase() + item.slice(1);
          }
        }).join('');
        Result.userInput = userInput;
        Result.query = query;
        $cookies.put('userInput', userInput);
        $cookies.put('query', query);

        Home.getTweets(userInput, query)
          .then(function(data) {
            //console.log('tweets: ', data);
            if(data.length) {
              Result.tweets = data;

              Home.getEmotion(Result.tweets)
              .then(function(data) {
                //console.log('emotion: ', data)
                Result.emotion = data.emotion;

                Home.getSentiment(Result.tweets)
                .then(function(data) {
                  //console.log('sentiment: ', data);
                  Result.sentimentValue = data.sentimentValue;
                  Result.dataLoad = true;
                  $cookies.put('dataLoad', true);

                  $state.go('result');
                })
                .catch(function(err) {
                  $cookies.put('dataLoad', false);
                  console.error('error: ', err);
                })
              })
              .catch(function(err) {
                $cookies.put('dataLoad', false);
                console.error('error: ', err);
              })
            } else {
              vm.tweetsLoaded = false;
            }
          })
          .catch(function(err) {
            $cookies.put('dataLoad', false);
            vm.tweetsLoaded = false;
            console.error('error: ', err);
          })
      }

      vm.noTweets = function() {

      }

      vm.showAdvanced = function(ev) {
          var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && vm.customFullscreen;
          $mdDialog.show({
            controller: DialogController,
            templateUrl: '../pages/tweet.home/templates/twitterQuerryApi.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: useFullScreen
          })
          .then(function(answer) {
            vm.status = 'You said the information was "' + answer + '".';
          }, function() {
            vm.status = 'You cancelled the dialog.';
          });
        };
    }

    function DialogController($mdDialog) {
      var vm = this;
      vm.hide = function() {
        $mdDialog.hide();
      };
      vm.cancel = function() {
        $mdDialog.cancel();
      };
      vm.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }

})();
