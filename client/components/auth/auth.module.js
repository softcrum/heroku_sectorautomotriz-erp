'use strict';

angular.module('productSectorautomotrizErpApp.auth', ['productSectorautomotrizErpApp.constants',
    'productSectorautomotrizErpApp.util', 'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
