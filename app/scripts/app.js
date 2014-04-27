'use strict';

var APP = angular.module('photowebapp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui'
  ]);

    APP.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/test.html',
                controller: 'MainCtrl'
            })
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'RegionsController'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegionsController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
