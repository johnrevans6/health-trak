angular.module('healthTrakApp',['ngRoute','ngResource','ngSanitize','mgcrea.ngStrap'])
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