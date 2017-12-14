angular.module('starter.controllers.notice', [])
  .controller('noticeCtrl',function($scope){

  })
  .controller('yezhuCtrl',function($scope,$state){
    $scope.goHong=function(){
      $state.go('tab.hong');
    };
    $scope.noticeMessage=function(){
      $state.go('tab.notMess');
    };

  })
  .controller('hongCtrl',function($scope,Eval){
    $scope.three=Eval.othalls2();
  })
  .controller('friCtrl',function($scope,$state,Friends){
    $scope.three=Friends.all();
    $scope.share=function(){
      $state.go('tab.share');
    };
    $scope.workHome=function(){
      $state.go('tab.workHome');
    }
  })
  .controller('noticeMeCtrl',function($scope,NoticeMess){
    $scope.notices=NoticeMess.othalls3();

  })
  .controller('shareCtrl',function($scope,Friends){
    $scope.three=Friends.all();


  })
  .controller('workHomeCtrl', function($scope,$stateParams,NextChates,SecondChates,ThirdChates) {
    $scope.other=NextChates.othalls();
    $scope.other1=SecondChates.othalls1($stateParams);
    $scope.other2=ThirdChates.othalls2($stateParams);
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













