'use strict';

angular.module('productSectorautomotrizErpApp', ['productSectorautomotrizErpApp.auth',
    'productSectorautomotrizErpApp.admin', 'productSectorautomotrizErpApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
