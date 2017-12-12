angular.module('starter.controllers.home', [])

  .controller('homeCtrl', function($scope,$stateParams,$location,Goods,Says,$state,$rootScope) {
    $scope.title = '家居';
    //头部按钮
    $('.btns').each(function(i){
      $('.btns').eq(i).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
      });
    });
    // $scope.goOwn=function(){
    //   // $location.path('dash-home.html');
    // }
    //服务导航
    $('.codes').each(function(i){
      $('.codes').eq(i).click(function(){
        $(this).addClass('code').siblings().removeClass('code');

      })
    });
    //增加减少

    $scope.add=function(item){
      item.count++;
      console.log(item.count);
      $('.decrease')[item.id-1].style.display='block';
      $('.number')[item.id-1].style.display='block';
      $('.total').css('display','block');
      $('.well').css('display','block');
      $('.please').css('display','none');
      $('.num')[0].innerHTML=parseInt($('.number')[0].innerHTML)+1+parseInt($('.number')[1].innerHTML)
        +parseInt($('.number')[2].innerHTML)+parseInt($('.number')[3].innerHTML)
        +parseInt($('.number')[4].innerHTML)+parseInt($('.number')[5].innerHTML)
        +parseInt($('.number')[6].innerHTML);

      $('.mon')[0].innerHTML='￥'+$('.num')[0].innerHTML*1988;
      console.log($('.mon')[0].innerHTML)
      //  将用户购买的东西通过$routeScope传给确认订单的送水服务
      var arr=[];
      for(var index=0;index<$scope.goods.length;index++){
        if($scope.goods[index].count>0){
          arr.push($scope.goods[index]);
        }
      }
      $rootScope.codes=arr;
      $rootScope.total=$('.mon')[0].innerHTML;


      // console.log(item.id);
      // $rootScope.services=item.title;
      // $rootScope.servicesPrice=item.price;
      // $rootScope.numb=item.count;
      // console.log($rootScope.servicesPrice+'*'+$rootScope.numb)
    }
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
    console.log(Goods.all())



    //  选项卡
    $('.btns').each(function(i){
      $('.btns').eq(i).click(function(){
          if(i==0){
            $('.priva')[i].style.display='block';
            $('.priva')[1].style.display='none';
            $('.priva')[2].style.display='none';
          }else if(i==1){
            $('.priva')[i].style.display='block';
            $('.priva')[0].style.display='none';
            $('.priva')[2].style.display='none';
          }else if(i==2){
            $('.priva')[i].style.display='block';
            $('.priva')[1].style.display='none';
            $('.priva')[0].style.display='none';
          }
      });
    });
    $scope.decide=function(){
      $state.go('tab.decideCode');
    }
  //  评价部分
    $scope.says=Says.all();



  })
  //订单
  .controller('decideCtrl',function($scope,$state,$rootScope){
    $scope.codes=$rootScope.codes;
    $scope.totalMon=$rootScope.total;
    // console.log($scope.codes);
    // console.log($scope.codes[0].count)
    $scope.goWay=function(){
      $state.go('tab.paywayCode');
    }
  })
  //付款方式
  .controller('paywayCtrl',function($scope,$state,$ionicPopup,$rootScope,$location){
    //  提示窗口
    $scope.goHome = function() {
      var alertPopup = $ionicPopup.alert({
        title: '提示',
        template: '支付完成!',
        okText:'好的'
      });

      alertPopup.then(function(res) {
        $location.path('./tab/dash');
      });

    };
    $scope.wayTotal= $rootScope.total;
  });

















