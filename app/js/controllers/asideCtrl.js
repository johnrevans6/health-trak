angular.module("healthTrakApp")
    .controller("asideCtrl",['$scope','queries',function($scope,queries,as){
                    
        $scope.aside = {
            title: 'Respondants who...'
        }; 
        
        $scope.queries = queries.get();        
                                 
    }]);
    
    