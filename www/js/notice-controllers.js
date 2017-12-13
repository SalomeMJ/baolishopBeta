angular.module('starter.controllers.notice', [])
  .controller('noticeCtrl',function($scope){

  })
  .controller('yezhuCtrl',function($scope){

  })
  .controller('friCtrl',function($scope,Friends){
    $scope.three=Friends.all();
  })








