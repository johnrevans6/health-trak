angular.module("healthTrakApp")
    .controller("asideCtrl",['$scope','queries',function($scope,queries){
                
        $scope.aside = {
            title: 'Respondants who...'
        }; 
        
        $scope.queries = queries.get(); 
        
        console.log(queries.query_nat('How is your general health?','Good'));        
        
    }]);