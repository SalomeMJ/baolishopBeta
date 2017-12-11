angular.module('starter.worker.controlleres', [])
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats,Chates,Chatess) {
  $scope.chat = Chats.get($stateParams.chatId);

  $scope.chatt = Chates.otall($stateParams.chatId);
  // console.log($scope.chatt);
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
.controller('WorkCtrl', function($scope,$stateParams,NextChates,SecondChates) {
  $scope.other=NextChates.othalls();
  $scope.other1=SecondChates.othalls1($stateParams);
  $('.around').css('border-bottom','2px solid blue');
  $scope.show3=function () {
    // $scope.other=NextChates.othalls($stateParams);

    $('.add').css('display','inline-block');
    $('.add1').css('display','none');
    $('.add2').css('display','none');
    $('.around').css('border-bottom','2px solid blue');
    $('.hose').css('border-bottom','none');
    $('.myattend').css('border-bottom','none');

  };
  $scope.show4=function (){

    $('.add1').css('display','inline-block');
    $('.add2').css('display','none');
    $('.add').css('display','none');
    $('.hose').css('border-bottom','2px solid blue');
    $('.around').css('border-bottom','none');
    $('.myattend').css('border-bottom','none');

  }
  $scope.show5=function (){

    $('.add2').css('display','inline-block');
    $('.add1').css('display','none');
    $('.add').css('display','none');
    $('.myattend').css('border-bottom','2px solid blue');
    $('.hose').css('border-bottom','none');
    $('.around').css('border-bottom','none');

  }
})
  .controller('Work2Ctrl', function($scope,$state,Eval) {
    $scope.three=Eval.othalls2();
    console.log($scope.three);
    $scope.pinglun=function () {

      $state.go('tab.pinglun')
    }

  })
  .controller( 'Work3Ctrl',['$scope','$ionicActionSheet','$timeout' ,function($scope,$ionicActionSheet,$timeout){
    $scope.show = function() {

      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<b>发布</b>' },
        ],
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          return true;
        }
      });

      $timeout(function() {
        hideSheet();
      }, 2000);

    };
  }])
