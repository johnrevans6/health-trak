angular.module("healthTrakApp")
    .factory('queries',['$resource','$firebaseArray',function queryFactory($resource,$firebaseArray){
        var ref = new Firebase("https://health-trak-be.firebaseio.com/");
        
        return{
           get: function(){
               return $firebaseArray(ref);
           } 
        }
    }]);