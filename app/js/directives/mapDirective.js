angular.module('healthTrakApp').directive('map',['$compile',function($compile){
    return{
        restrict: 'AE',
        templateUrl: 'app/img/map.svg',
        link: function(scope,element,attrs){
            
        }
    }
}]);