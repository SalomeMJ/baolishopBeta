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
  .controller('SsCtrl', function($scope,$cordovaGeolocation) {
    $cordovaGeolocati.getCurrentPosition().then(function (position) {
      console.log(position)
    })
      .catch(function (err) {
        console.log(position)
      })
  })
  .controller('Work2Ctrl', function($scope,SecondChates) {
    $scope.title='sds'
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

    $scope.add=function(item){
      item.count++;
      // console.log(item)
      // console.log(item.id);
      $('.decrease')[item.id-1].style.display='block';
      $('.number')[item.id-1].style.display='block';
      $('.total').css('display','block');
      $('.well').css('display','block');
      $('.please').css('display','none');
      // $('.num')[0].innerHTML=parseInt($('.number')[item.id-1].innerHTML)+1;
      $('.num')[0].innerHTML=parseInt($('.number')[0].innerHTML)+1+parseInt($('.number')[1].innerHTML)
        +parseInt($('.number')[2].innerHTML)+parseInt($('.number')[3].innerHTML)
        +parseInt($('.number')[4].innerHTML)+parseInt($('.number')[5].innerHTML)
        +parseInt($('.number')[6].innerHTML);
      $('.mon')[0].innerHTML='￥'+$('.num')[0].innerHTML*1988;
    };
    $scope.desc=function(item){
      item.count--;
      // console.log(item)
      console.log(item.id);
      if(item.count==0){
        $('.decrease')[item.id-1].style.display='none';
        $('.number')[item.id-1].style.display='none';
      }
      $('.num')[0].innerHTML=parseInt($('.number')[0].innerHTML)-1+parseInt($('.number')[1].innerHTML)
        +parseInt($('.number')[2].innerHTML)+parseInt($('.number')[3].innerHTML)
        +parseInt($('.number')[4].innerHTML)+parseInt($('.number')[5].innerHTML)
        +parseInt($('.number')[6].innerHTML);
      $('.mon')[0].innerHTML='￥'+$('.num')[0].innerHTML*1988;
      if($('.num')[0].innerHTML==0){
        $('.total').css('display','none');
        $('.well').css('display','none');
        $('.please').css('display','block');
      }
    }

    $scope.goods = Goods.all();
    $scope.remove = function(good) {
      Goods.remove(good);
    };
    //  选项卡
    $('.btns').each(function(i){
      $('.btns').eq(i).click(function(){
        $('.priva')[i].show().siblings().hide();
      });
    });





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
