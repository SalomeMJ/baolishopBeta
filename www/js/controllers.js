angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$state) {
  $scope.sug=function() {
    $state.go('tab.suggestion');
  };
  $scope.home=function() {
    $state.go('tab.home');
  };
})
  .controller('suggestCtrl', function($scope) {
    $scope.title = '咨询建议';

  })
  .controller('homeCtrl', function($scope) {
    $scope.title = '家居';
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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats,Chates) {
  $scope.chat = Chats.get($stateParams.chatId);
  // console.log($scope.chat);
  if($scope.chat.id==0){
    $scope.chatt = Chates.otall($stateParams.chatId);
  }
  // $scope.res=Chats.adr();
  $scope.show1 = function () {

  }
})
  // .controller('ChatNextCtrl',function ($scope,Chats) {
  //   $scope.chatt = Chats.otall();
  //   console.log($scope.chatt)
  // })
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
  .controller('ownCtrl', function($scope) {
    $scope.title='我的';
  });
