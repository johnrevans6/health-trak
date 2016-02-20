angular.module('healthTrakApp',['ngRoute','ngResource'])
    .config(['$routeProvider', '$locationProvider',function($routeProvider,$locationProvider){
        $routeProvider.when('/',{
            controller: 'indexCtrl',
            templateUrl: '/assets/partials/index.html'
        })
        .when('/about',{
            controller: 'aboutCtrl',
            templateUrl: '/assets/partials/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
        
        $locationProvider.html5Mode(true);
    }]);