angular.module("healthTrakApp")
    .factory('queries',['$http','$resource','$firebaseArray',function queryFactory($http,$resource,$firebaseArray){
        var ref = new Firebase("https://health-trak-be.firebaseio.com/");
        
        return{
           get: function(){
               return $firebaseArray(ref);
           },
           query_state: function(state,question,response){
               return $http({
                   method: 'GET',
                   url: 'https://chronicdata.cdc.gov/resource/fn2i-3j6c.json?$query=SELECT COUNT("'+state+'") AS state_cnt,year'+
                        ' WHERE locationabbr="'+state+'" AND question="'+question+'" AND response="'+response+'" GROUP BY locationabbr,year'
               }).then(function successCallback(response){
                   console.log(response);
                   return response;
               }, function errorCallback(error){
                   console.log(error);
               });
           },
           query_nat: function(question,response){
               return $http({
                   method: 'GET',
                   url: 'https://chronicdata.cdc.gov/resource/fn2i-3j6c.json?$query=SELECT COUNT(locationabbr) AS nat_cnt,year'+
                        ' WHERE question="'+question+'" AND response="'+response+'" GROUP BY year' 
               }).then(function successCallback(response){
                   console.log(response);
                   return response;
               }, function errorCallback(error){
                   console.log(error);
               });
           } 
        }
    }]);