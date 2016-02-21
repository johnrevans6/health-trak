angular.module('healthTrakApp',['ngAnimate','ngRoute','ngResource','ngSanitize','mgcrea.ngStrap','firebase'])
    .config(['$routeProvider', '$locationProvider',function($routeProvider,$locationProvider){
        $routeProvider.when('/',{
            controller: 'indexCtrl',
            templateUrl: '/app/partials/index.html'
        })
        .when('/about',{
            controller: 'aboutCtrl',
            templateUrl: '/app/partials/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
        
        $locationProvider.html5Mode(true);
    }]);