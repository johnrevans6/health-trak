angular.module("healthTrakApp")
    .directive('chart',['$window',function($window){
        return{
            restrict: 'AE',
            template: "<svg width='850' height='200'></svg>",
            link: function(scope,elem,attrs){ 
                               
                var responseDataPlot = scope[attrs.chartData];
                var padding = 20;
                var pathClass = "path";
                var xScale, yScale, xAxisGen, yAxisGen, lineFun;               
                
                var d3 = $window.d3;
                var rawSvg = elem.find("svg")[0];
                var svg = d3.select(rawSvg);
                                
                function setChartParameters(){
                    xScale = d3.scale.linear()
                        .domain([responseDataPlot[0].state,responseDataPlot[responseDataPlot.length - 1].state])
                        .range([padding + 5, rawSvg.clientWidth - padding]);
                        
                    yScale = d3.scale.linear()
                        .domain([0, d3.max(responseDataPlot, function(d){
                            return d.value;
                        })])
                        .range([rawSvg.clientHeight - padding, 0]);
                       
                    xAxisGen = d3.svg.axis()
                        .scale(xScale)
                        .orient("bottom")
                        .ticks(responseDataPlot.length - 1);
                        
                    yAxisGen = d3.svg.axis()
                        .scale(yScale)
                        .orient("left")
                        .ticks(5);
                        
                    lineFun = d3.svg.line()
                        .x(function(d){
                            return xScale(d.state);
                        })
                        .y(function(d){
                            return yScale(d.value);
                        })
                        .interpolate("basis");
                }

                function drawLineChart(){
                    setChartParameters();
                    
                    svg.append("svg:g")
                        .attr("class","x axis")
                        .attr("transform", "translate(0,180)")
                        .call(xAxisGen);
                    
                    svg.append("svg:g")
                        .attr("class", "y axis")
                        .attr("transform", "translate(25,0)")
                        .call(yAxisGen);
                        
                    svg.append("svg:path")
                        .attr({
                            d: lineFun(responseDataPlot),
                            "stroke": "blue",
                            "stroke-width": 2,
                            "fill": "none",
                            "class": pathClass
                        });
                }

                drawLineChart();
            }
        };
        
    }]);
    