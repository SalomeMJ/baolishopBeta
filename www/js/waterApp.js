angular.module('waterApp', [])
  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



      //跳转向送水
      .state('tab.water', {
        url: '/tab/water',
        views: {
          'tab-dash': {
            // params:{"message":"这是传递过来的数据"},
            templateUrl: 'templates/tab-water.html',
            controller: 'DashWaterCtrl'
          }
        }
      })
      //跳转向送水支付界面
      .state("tab.waterPrice",{
        url:'/tab/waterPrice',
        views:{
          'tab-dash':{

            templateUrl:'templates/tab-waterPrice.html',
            controller:'DashWaterPriceCtrl'

          }

        }


      })
      //  跳转向支付界面下一级
      .state("tab.waterPay",{
        url:"/tab/waterPay",
        views:{
          'tab-dash':{
            templateUrl:"templates/tab-waterPay.html",
            controller:'DashWaterPayCtrl'

          }
        }



      })


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

  });
