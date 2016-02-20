angular.module('healthTrakApp',['ngRoute','ngResource'])
    .config(['$routeProvider', '$locationProvider',function($routeProvider,$locationProvider){
        $routeProvider.when('/',{
            controller: 'indexCtrl',
            templateUrl: '/app/partials/map.html'
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