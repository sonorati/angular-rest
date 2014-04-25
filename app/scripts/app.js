'use strict';

angular.module('photowebapp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/test.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
