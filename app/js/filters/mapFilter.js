angular.module("healthTrakApp")
    .filter("map_color",[function(){
        return function(intensity){
            var b = 255 - Math.floor(intensity*255);            
            return "rgba(7,0," + b + ",1)";
        }        
    }]);