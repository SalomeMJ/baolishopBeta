angular.module('water',[])
  .controller('DashWaterCtrl', function ($scope, $state, $rootScope,$http) {

    $scope.choo = "请选择";

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
   $http.get('http://localhost/dami/baolishop/www/php/index1.php?code=waterData').then(function (resp) {
       console.log(resp.data);
     $scope.waterData = resp.data;


   })

  })
  .controller('DashWaterPriceCtrl', function ($scope, $rootScope,$state) {

    //  获取到上一页选择的

    // $scope.waterData=$rootScope.waterData;
    // $scope.waterTotal=$rootScope.waterTotal;
    $scope.skipPay=function () {
      $state.go("tab.waterPay");
    }

  })
  .controller('DashWaterPayCtrl', function ($scope, $rootScope,$ionicPopup,$timeout) {

    console.log($rootScope.waterData);
    //  获取到上一页选择的
    console.log('这是支付成功那个页面');
    // $scope.waterData=$rootScope.waterData;
    // $scope.waterTotal=$rootScope.waterTotal;
    $scope.paySuccess=function () {

      //  alert（警告） 对话框

      var alertPopup = $ionicPopup.alert({
        title: '温馨提示',
        template: '恭喜您支付成功'
      });
      alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });


    }


  });
