angular.module('market', [])
  .controller('DashMarketCtrl', function ($scope, $state,$rootScope,$http) {


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
        num+=parseInt(obj.amount);

      }

      $scope.waterTotal = total;
      $scope.num=num;
    }

    $scope.xianshi = function () {
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
    $http.get("http://localhost/dami/baolishop/www/php/index1.php?code=mimianData").then(function (resp) {
      console.log(resp.data);
      $scope.waterData=resp.data;

    });



    $scope.mimian=function () {

      $http.get("http://localhost/dami/baolishop/www/php/index1.php?code=mimianData").then(function (resp) {
        console.log(resp.data);
        $scope.waterData=resp.data;
        $scope.tab_bg1=true;
        $scope.tab_bg2=false;
        $scope.tab_bg3=false;
        $scope.tab_bg4=false;

      });



    };
    $scope.liangyou=function () {
      $http.get("http://localhost/dami/baolishop/www/php/index1.php?code=liangyouData").then(function (resp) {
        console.log(resp.data);
        $scope.waterData=resp.data;
        $scope.tab_bg1=false;
        $scope.tab_bg2=true;
        $scope.tab_bg3=false;
        $scope.tab_bg4=false;




      });



    };

    $scope.fuchan=function () {

      $http.get("http://localhost/dami/baolishop/www/php/index1.php?code=fuchanData").then(function (resp) {
        console.log(resp.data);
        $scope.waterData=resp.data;
        $scope.tab_bg1=false;
        $scope.tab_bg2=false;
        $scope.tab_bg3=true;
        $scope.tab_bg4=false;



      });


    };
    $scope.yanjiu=function () {

      $http.get("http://localhost/dami/baolishop/www/php/index1.php?code=yanjiuData").then(function (resp) {
        console.log(resp.data);
        $scope.waterData=resp.data;
        $scope.tab_bg1=false;
        $scope.tab_bg2=false;
        $scope.tab_bg3=false;
        $scope.tab_bg4=true;



      });




    };
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

