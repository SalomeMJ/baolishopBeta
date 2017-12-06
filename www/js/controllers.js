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
  .controller('WorkCtrl', function($scope,$stateParams,NextChates,SecondChates) {
    $scope.other=NextChates.othalls();
    $scope.other1=SecondChates.othalls1($stateParams);
    console.log($scope.other)
    $scope.show3=function () {
      // $scope.other=NextChates.othalls($stateParams);
      $('.around').click(function () {
        $('.add').css('display','inline-block');
        $('.add1').css('display','none');
        $('.add2').css('display','none');
      });

    };
    $scope.show4=function (){
      $('.hose').click(function () {
        $('.add1').css('display','inline-block');
        $('.add2').css('display','none');
        $('.add').css('display','none');
      });
    }
    $scope.show5=function (){
      $('.myattend').click(function () {
        $('.add2').css('display','inline-block');
        $('.add1').css('display','none');
        $('.add').css('display','none');
      })
    }
  })
  .controller('Work2Ctrl', function($scope,SecondChates) {
    $scope.title='sds'
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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats,Chates,Chatess) {
  $scope.chat = Chats.get($stateParams.chatId);

    $scope.chatt = Chates.otall($stateParams.chatId);
    var s1=document.getElementsByClassName('kind');
    var s2=document.getElementsByClassName('kinds');
    s1[0].style.borderBottom='2px solid #2894FF';
    $scope.show1 = function () {
      if($scope.chat.id==0){
        $scope.chatt = Chates.otall($stateParams.chatId);
      }
      s1[0].style.borderBottom='2px solid #2894FF';
      s2[0].style.borderBottom='none';
    }
    $scope.show2 = function () {
      if($scope.chat.id==0){
        $scope.chatt = Chatess.othall($stateParams.chatId);
      }
      s2[0].style.borderBottom='2px solid #2894FF';
      s1[0].style.borderBottom='none';
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
