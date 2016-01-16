angular
  .module('Root')
  .config(config);
 
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.html',
      resolve: {
        user() {
          if (!Meteor.user()) {
            throw 'AUTH_REQUIRED';
          }
        },
      }
    })
    .state('tab.chat', {
      url: '/chat',
      views: {
        'tab-chat': {
          templateUrl: 'client/templates/chat.html',
          controller: 'ChatCtrl as chat'
        }
      }
    })
    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'client/templates/profile.html',
          controller: 'ProfileCtrl as ProfileCtrl',
        }
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'client/templates/login.html',
      controller: 'LoginCtrl as logger'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'client/templates/register.html',
      controller: 'RegisterCtrl as register'
    });
 
  $urlRouterProvider.otherwise('tab/chat');
}
