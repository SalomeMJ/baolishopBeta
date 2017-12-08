angular.module('market', [])
  .controller('DashMarketCtrl', function ($scope, $state,$rootScope) {


    $scope.choo = "请选择1";

    $scope.add = function (item) {
      item.amount++;
      $scope.price = true;
      $scope.choo = "选好了";
      // console.log()
      computeTotal();

    };

    function computeTotal() {
      var total = 0;
      var num=0;
      for (var i = 0; i < $scope.waterData.length; i++) {
        var obj = $scope.waterData[i];

        total += obj.waterPrice * obj.amount;
        num+=obj.amount;

      }

      $scope.waterTotal = total;
      $scope.num=num;
    }

    $scope.xianshi = function () {
      // $scope.num=0;
      $scope.price = false;
      $scope.choo = "请选择";
    };
    $scope.del = function (item) {
      item.amount >= 1 ? item.amount-- : $scope.xianshi();
      computeTotal();
    };

    $scope.skipPay = function (num) {
      var arr = [];
      for (var i = 0; i < $scope.waterData.length; i++) {
        var obj = $scope.waterData[i];
        if (obj.amount>0){
          arr.push(obj);
        }

      }
      if ($scope.choo == "选好了") {
        console.log("跳转向支付页面");
        $rootScope.waterData = arr;
        $rootScope.waterTotal= $scope.waterTotal;
        $state.go("tab.waterPrice");

      } else {
        console.log("这是选择");
      }
    };
    $scope.tab_bg1=true;
    var data1 = [
      {waterName: "桶装水(线下支付)1", waterPrice: "12", waterNum: "12", amount: 0},
      {waterName: "北京方便面(线下支付)1", waterPrice: "20", waterNum: "12", amount: 0},
      {waterName: "矿泉水(线下支付)1", waterPrice: "50", waterNum: "12", amount: 0}];
    $scope.waterData=data1;
    $scope.mimian=function () {
      $scope.tab_bg1=true;
      $scope.tab_bg2=false;
      $scope.tab_bg3=false;
      $scope.tab_bg4=false;
      $scope.waterData=data1;
    };
    $scope.liangyou=function () {
      $scope.tab_bg1=false;
      $scope.tab_bg2=true;
      $scope.tab_bg3=false;
      $scope.tab_bg4=false;
      $scope.waterData=data2;

    };

    $scope.fuchan=function () {
      $scope.tab_bg1=false;
      $scope.tab_bg2=false;
      $scope.tab_bg3=true;
      $scope.tab_bg4=false;
      $scope.waterData=data3;

    };
    $scope.yanjiu=function () {
      $scope.tab_bg1=false;
      $scope.tab_bg2=false;
      $scope.tab_bg3=false;
      $scope.tab_bg4=true;
      $scope.waterData=data4;

    };




    console.log('赚到了');
    var data1 = [
      {waterName: "桶装水(线下支付)1", waterPrice: "12", waterNum: "12", amount: 0},
      {waterName: "北京方便面(线下支付)1", waterPrice: "20", waterNum: "12", amount: 0},
      {waterName: "矿泉水(线下支付)1", waterPrice: "50", waterNum: "12", amount: 0}];
    var data2 = [
      {waterName: "桶装水(线下支付)2", waterPrice: "12", waterNum: "12", amount: 0},
      {waterName: "北京方便面(线下支付)2", waterPrice: "20", waterNum: "12", amount: 0},
      {waterName: "矿泉水(线下支付)2", waterPrice: "50", waterNum: "12", amount: 0}];
    var data3 = [
      {waterName: "桶装水(线下支付)3", waterPrice: "12", waterNum: "12", amount: 0},
      {waterName: "北京方便面(线下支付)3", waterPrice: "20", waterNum: "12", amount: 0},
      {waterName: "矿泉水(线下支付)3", waterPrice: "50", waterNum: "12", amount: 0}];
    var data4 = [
      {waterName: "桶装水(线下支付)4", waterPrice: "12", waterNum: "12", amount: 0},
      {waterName: "北京方便面(线下支付)4", waterPrice: "20", waterNum: "12", amount: 0},
      {waterName: "矿泉水(线下支付)4", waterPrice: "50", waterNum: "12", amount: 0}];


    console.log($rootScope)
    $scope.active1=true;
    $scope.services=true;

    $scope.service=function () {
      $scope.active1=true;
      $scope.active2=false;
      $scope.active3=false;
      $scope.shopOwns=false;
      $scope.userDiscuss=false;
      $scope.services=true;

    }
    $scope.shopOwn=function () {
      $scope.active1=false;
      $scope.active2=true;
      $scope.active3=false;
      $scope.shopOwns=true;
      $scope.userDiscuss=false;
      $scope.services=false;


    }
    $scope.discuss=function () {
      $scope.active1=false;
      $scope.active2=false;
      $scope.active3=true;
      $scope.shopOwns=false;
      $scope.userDiscuss=true;
      $scope.services=false;
    }

  })


  .controller('DashPaymentCtrl',function ($scope,$ionicPopup) {
    console.log("跳转成功");

    $scope.btn1='true';
    $scope.listShow=true;

    $scope.toggle1=function () {
      $scope.btn1=true;
      $scope.btn2=false;
      $scope.listShow=true;
      $scope.nodeShow=false;
    };
    $scope.toggle2=function () {
      $scope.btn1='false';
      $scope.btn2='true';
      $scope.listShow=false;
      $scope.nodeShow=true;


    }
    $scope.paymentSuccess=function () {


      //  alert（警告） 对话框

      var alertPopup = $ionicPopup.alert({
        title: '温馨提示',
        template: '恭喜您缴费成功'
      });
      alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });



    }


  })

