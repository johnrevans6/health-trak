angular.module("healthTrakApp")
    .factory('queries',['$resource','$firebaseArray',function queryFactory($resource,$firebaseArray){
        var ref = new Firebase("https://health-trak-be.firebaseio.com/");
                 
        return{
           get: function(){
               return $firebaseArray(ref);
           },
           query_state: function(question,response){              
                
                return $resource('https://chronicdata.cdc.gov/resource/fn2i-3j6c.json?$query=SELECT locationabbr, COUNT(locationabbr) AS state_cnt,year'+
                            ' WHERE question="'+question+'" AND response="'+response+'" GROUP BY locationabbr,year').query(function(response){
                                return response;            
                            });                                     
           },
           query_nat: function(question,response){
               return $resource('https://chronicdata.cdc.gov/resource/fn2i-3j6c.json?$query=SELECT COUNT(locationabbr) AS nat_cnt,year'+
                        ' WHERE question="'+question+'" AND response="'+response+'" GROUP BY year').query(function(response){
                                return response;            
                            });                                     
            
           },
           query_state_present: function(question,response){
               return $resource('https://chronicdata.cdc.gov/resource/fn2i-3j6c.json?$query=SELECT locationabbr, COUNT(locationabbr) AS state_cnt'+
                            ' WHERE question="'+question+'" AND response="'+response+'" AND year=2013 GROUP BY locationabbr').query(function(response){
                                return response;            
                            });                                    
           },
           query_nat_present: function(question,response){               
               return $resource('https://chronicdata.cdc.gov/resource/fn2i-3j6c.json?$query=SELECT COUNT(locationabbr) AS nat_cnt'+
                        ' WHERE question="'+question+'" AND response="'+response+'" AND year=2013').query(function(response){
                                return response;            
                            });                                    
                        
           }           
        }   
    }]);