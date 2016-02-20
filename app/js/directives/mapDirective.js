angular.module('healthTrakApp')
    .directive('map',['$compile',function($compile){
        return{
            restrict: 'AE',
            templateUrl: 'app/img/map.svg',
            link: function(scope,element,attrs){
                var regions = element[0].querySelectorAll('.state');
                angular.forEach(regions, function(path, key){
                    var regionElement = angular.element(path);
                    regionElement.attr('region', "");
                    regionElement.attr('dummy-data','dummyData');
                    $compile(regionElement)(scope);
                })
            }
        }
    }]);