angular.module('starter.controllers.home', [])

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
