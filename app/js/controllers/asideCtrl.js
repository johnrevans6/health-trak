angular.module("healthTrakApp")
    .controller("asideCtrl",['$scope','queries',function($scope,queries){
        
        $scope.aside = {
            title: "Respondants who...",
            template: "<ng-include src='/app/partials/aside.html'></ng-include>"                               
        };
        
        $scope.button = {
            toggle: false
        };
        
        $scope.queries = queries.get();
        
    }]);