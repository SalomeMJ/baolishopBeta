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
  .controller('homeCtrl', function($scope,$stateParams,$location,Goods) {
    $scope.title = '家居';
    //头部按钮
    $('.btns').each(function(i){
      $('.btns').eq(i).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
      });
    });
    $scope.goOwn=function(){
      // $location.path('dash-home.html');
    }
  //服务导航
    $('.codes').each(function(i){
      $('.codes').eq(i).click(function(){
        $(this).addClass('code').siblings().removeClass('code');
      })
    });
    //增加减少
    $scope.add=function(){
      $('.add').each(function(i){
          $('.decrease')[i].style.display='block';
          $('.number')[i].style.display='block';
          $('.total').css('display','block');
          $('.well').css('display','block');
          $('.please').css('display','none');
          console.log(parseInt($('.number')[i].innerHTML)+1);
          $('.number')[i].innerHTML=parseInt($('.number')[i].innerHTML)+1;
      });
    };
    $scope.desc=function(){
      $('.decrease').each(function(i){
        $('.number')[i].style.display='block';
        console.log(parseInt($('.number')[i].innerHTML)-1);
        $('.number')[i].innerHTML=parseInt($('.number')[i].innerHTML)-1;
        if($('.number')[i].innerHTML==0){
          $('.decrease')[i].style.display='none';
          $('.number')[i].style.display='none';
          $('.total').css('display','none');
          $('.well').css('display','none');
          $('.please').css('display','block');
        }
      });
    }


    // $scope.good=Goods.get($stateParams,goodId)
    $scope.goods = Goods.all();
    $scope.remove = function(good) {
      Goods.remove(good);
    };





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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
  .controller('ownCtrl', function($scope) {
    $scope.title='我的';
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
