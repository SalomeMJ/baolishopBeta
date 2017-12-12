angular.module('starter.controllers.suggestion', [])

.controller('suggestCtrl',['$scope','$ionicActionSheet','$timeout','$ionicPopup','$location' ,function($scope,$ionicActionSheet,$timeout,$ionicPopup,$location){
  $scope.title='咨询建议';
  //下方弹出选项卡
  $scope.showMenu = function() {

    var hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: '<b>从相册中选择</b> ' }

      ],
      destructiveText: '拍照上传',
      titleText: '选择照片来源',
      cancelText: '取消',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function(index) {
        return true;
      }
    });

    $timeout(function() {
      hideSheet();
    },all);

  };
//  提示窗口
  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: '提示',
      template: '感谢您的反馈，我们会做得更好',
      okText:'不客气'
    });

    alertPopup.then(function(res) {
      $location.path('./tab/dash');
    });
  };

}]);



