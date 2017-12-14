angular.module('marketApp', [])
  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


      .state('tab.payment',{
        url:'/payment',
        views:{
          'tab-dash':{
            templateUrl:'templates/tab-payment.html',
            controller:'DashPaymentCtrl'


          }
        }


      })
      .state('tab.market',{
        url:'/market',
        views:{
          'tab-dash':{
            templateUrl:'templates/tab-market.html',
            controller:'DashMarketCtrl'


          }

        }



      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

  });

