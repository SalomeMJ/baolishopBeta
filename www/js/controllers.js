angular.module('starter.controllers', ['starter.worker.controlleres',"water","market"])

  .controller('DashCtrl', function ($scope, $state) {
    $scope.water = function () {
      // alert("即将跳转")
      $state.go("tab.water");
    };
    $scope.payment=function () {
      $state.go("tab.payment")
    }
    $scope.market=function () {
      $state.go("tab.market")

    },
      $scope.sug=function(){
        $state.go("tab.suggestion")
      },
      $scope.home=function(){
        $state.go("tab.home")
      },
      $scope.notice=function(){
        $state.go("tab.notice")
      },
      $scope.yezhu=function(){
        $state.go("tab.yezhu")
      },
      $scope.fri=function(){
        $state.go("tab.friend")
      },
      $scope.workHome=function(){
        $state.go("tab.workHome")
      }
  })


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
    console.log($scope.chat)

  })

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
  .controller('ownCtrl', function($scope) {
    $scope.title='我的';
  })

  .controller('PhoneCtrl', function($scope) {
    $scope.title='手机';
  })

//自定义指令隐藏底部导航
  .directive('hideTabs', function($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element, attributes) {
        scope.$on('$ionicView.beforeEnter', function() {
          scope.$watch(attributes.hideTabs, function(value){
            $rootScope.hideTabs = 'tabs-item-hide';
          });
        });
        scope.$on('$ionicView.beforeLeave', function() {
          scope.$watch(attributes.hideTabs, function(value){
            $rootScope.hideTabs = 'tabs-item-hide';
          });
          scope.$watch('$destroy',function(){
            $rootScope.hideTabs = false;
          })
        });
      }
    };
  });
