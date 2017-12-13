// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','starter.worker.controlleres','starter.controllers.home','starter.controllers.suggestion','starter.controllers.notice'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

    .state('tab.suggestion', {
      url: '/dash/suggestion',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash-suggestion.html',
          controller: 'suggestCtrl'
        }
      }
    })
    .state('tab.home', {
      url: '/dash/home',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash-home.html',
          controller: 'homeCtrl'
        }
      }
    })
    .state('tab.decideCode', {
      url: '/dash/home/decideCode',
      views: {
        'tab-dash': {
          templateUrl: 'templates/home-codes.html',
          controller: 'decideCtrl'
        }
      }
    })
    .state('tab.paywayCode', {
      url: '/dash/home/decideCode/payways',
      views: {
        'tab-dash': {
          templateUrl: 'templates/codes-ways.html',
          controller: 'paywayCtrl'
        }
      }
    })
    //智慧管家
    .state('tab.notice', {
      url: '/dash/notice',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash-notice.html',
          controller: 'noticeCtrl'
        }
      }
    })
    //业主自治
    .state('tab.yezhu', {
      url: '/dash/yezhu',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash-yezhu.html',
          controller: 'yezhuCtrl'
        }
      }
    })
    //友邻社交
    .state('tab.friend', {
      url: '/dash/friend',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash-friend.html',
          controller: 'friCtrl'
        }
      }
    })
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })



    .state('tab.work', {
      url: '/work',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-work.html',
          controller: 'WorkCtrl'
        }
      }
    })
    .state('tab.work1', {
      url: '/work1',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-work1.html',
          controller: 'Wor1kCtrl'
        }
      }
    })
    .state('tab.work2', {
      url: '/work2',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-work2.html',
          controller: 'Work2Ctrl'
        }
      }
    })
    .state('tab.pinglun', {
      url: '/pinglun',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-pinglun.html',
          controller: 'Work3Ctrl'
        }
      }
    })
    .state('tab.phone', {
      url: '/phone',
      views: {
        'tab-phone': {
          templateUrl: 'templates/tab-phone.html',
          controller: 'PhoneCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
