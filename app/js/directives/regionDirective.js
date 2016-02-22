angular.module('healthTrakApp')
    .directive('region',['$compile',function($compile){
        return{
            restrict: 'AE',
            scope: {
              dummyData: '='  
            },
            link: function(scope, element, attrs){
                scope.elementId = element.attr('id');
                scope.regionClick = function(){
                    alert((scope.dummyData[scope.elementId].value*100).toFixed(2) + "%");
                };
                element.attr('ng-click', 'regionClick()');
                element.attr('ng-attr-fill', '{{dummyData[elementId].value | map_color}}');
                element.removeAttr('region');
                $compile(element)(scope);
            }
        }
    }]);