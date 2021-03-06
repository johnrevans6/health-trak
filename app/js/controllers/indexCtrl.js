angular.module("healthTrakApp")
    .controller('indexCtrl',['$scope','queries',function($scope,queries){
        var states = ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL",
            "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM",
            "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA",
            "WA", "WV", "WI", "WY"];
            
        
        $scope.a = queries.query_state_present('How is your general health?','Good');      
        $scope.b = queries.query_nat_present('How is your general health?','Good');        
        $scope.c = queries.query_state('How is your general health?','Good');
        $scope.d = queries.query_nat_present('How is your general health?','Good');
                            
        $scope.createDummyData = function () {    
            var dataTemp = {};
            var responseData = [];
            
            angular.forEach(states, function (state, key) {               
                dataTemp[state] = {value: Math.random()}
                responseData.push({
                    'state': key,
                    'value': Math.random()
                }); 
            });
            $scope.dummyData = dataTemp;
            $scope.responseData = responseData;                   
            
        };        
        $scope.createDummyData();   
    }]);