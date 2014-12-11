
app.controller( 
	'pieChartController', 
	function( $scope, $location, $rootScope, getGroupsOverallActivityFactory, getUsersActivitySelectedGroupFactory,getGroupsActivitySelectedUserFactory ) {
		
		$rootScope.initPieChart = function(){
			$scope.pieChartLabel = 'Top 20 Groups';
			getGroupsOverallActivityFactory().then(
			
		      function(pieSession){
		        console.log('getGroupsOverallActivity onSuccess');
		        $rootScope.groupActivity = pieSession.invocationResult.resultSet;
		        
		        var pieChartData = [];

		        //set max to 20
		        var length = Math.min(20, $rootScope.groupActivity.length);
		        var colors = randomColor({count: length, hue: 'random'});
		        for (var i = 0; i < length; i++) {
		        	var v = {value: '', color: '', highlight: '', label: ''};
		        	v.value = $rootScope.groupActivity[i].total;
		        	v.color = colors[i];
		        	v.highlight = colors[i];
		        	v.label = $rootScope.groupActivity[i].groupName;
		        	pieChartData.push(v);
		        }
	
			  $rootScope.pieData = pieChartData;
	    	
			  // Chart.js Options
			  $rootScope.pieOptions =  {
				    responsive: true,
				    maintainAspectRatio: true,
				    segmentShowStroke : true,
				    segmentStrokeColor : '#fff',
				    segmentStrokeWidth : 2,
				    percentageInnerCutout : 50,
				    animation: true,
				    animationSteps : 60,
				    animationEasing : 'easeOutBounce',
				    animateRotate : true,
				    animateScale : true,
				    //change template from here!!!!!!!!
				    legendTemplate: '<ul></ul>'//'<ul class="tc-chart-js-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillcolor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
				  };
		      },
		      function(error){
		        console.log('getGroupsOverallActivity onFailure');
		      } 
		    );
		}
		$rootScope.initPieChart();
		
		/*$scope.pieChart;
		
		$scope.pieChartClick = function( event ){
			if($scope.pieChart){
				var piePoints = $scope.pieChart.getSegmentsAtEvent( event );
				if(piePoints[0]!= undefined && piePoints[0] != null){
					console.log(piePoints[0].);
				}

			}
			
		}*/
		
		$rootScope.pieChartRefresh= function(){
			if($rootScope.mainItemFiltered.item.type){
				if($rootScope.mainItemFiltered.item.type == 'group'){
					$rootScope.pieChartGetSelectedGroup();
				}else if($rootScope.mainItemFiltered.item.type == 'user'){
					$rootScope.pieChartGetSelectedUser();
				}
			}else{
				$rootScope.initPieChart();
			}
			
		}	
		
		$rootScope.pieChartGetSelectedGroup = function(){
			if($rootScope.mainItemFiltered.item.groupID){
				$scope.pieChartLabel = 'Top 20 Users';
				$rootScope.groupActivity = null;
				getUsersActivitySelectedGroupFactory($rootScope.mainItemFiltered.item.groupID).then(
				 
			      function(pieSession){
			        console.log('getUsersActivitySelectedGroup onSuccess');
			        $rootScope.groupActivity = pieSession.invocationResult.resultSet;
			        
			        var pieChartData = [];
	
			        //set max to 20
			        var length = Math.min(20, $rootScope.groupActivity.length);
			        var colors = randomColor({count: length, hue: 'random'});
			        for (var i = 0; i < length; i++) {
			        	var v = {value: '', color: '', highlight: '', label: ''};
			        	v.value = $rootScope.groupActivity[i].total;
			        	v.color = colors[i];
			        	v.highlight = colors[i];
			        	v.label = $rootScope.groupActivity[i].userName;
			        	pieChartData.push(v);
			        }
		
				  $rootScope.pieData = pieChartData;
		    	
				  // Chart.js Options
				  $rootScope.pieOptions =  {
					    responsive: true,
					    maintainAspectRatio: true,
					    segmentShowStroke : true,
					    segmentStrokeColor : '#fff',
					    segmentStrokeWidth : 2,
					    percentageInnerCutout : 50,
					    animation: true,
					    animationSteps : 60,
					    animationEasing : 'easeOutBounce',
					    animateRotate : true,
					    animateScale : true,
					    //change template from here!!!!!!!!
					    legendTemplate: '<ul></ul>'//'<ul class="tc-chart-js-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillcolor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
					  };
			      },
			      function(error){
			        console.log('getUsersActivitySelectedGroup onFailure');
			      } 
			    );
			}
		}
		
		$rootScope.pieChartGetSelectedUser = function(){
			if($rootScope.mainItemFiltered.item.userID){
				$scope.pieChartLabel = 'Top Groups';
				$rootScope.groupActivity = null;
				getGroupsActivitySelectedUserFactory($rootScope.mainItemFiltered.item.userID).then(
				 
			      function(pieSession){
			        console.log('getGroupsActivitySelectedUser onSuccess');
			        $rootScope.groupActivity = pieSession.invocationResult.resultSet;
			        
			        var pieChartData = [];
	
			        //set max to 20
			        var length = Math.min(20, $rootScope.groupActivity.length);
			        var colors = randomColor({count: length, hue: 'random'});
			        for (var i = 0; i < length; i++) {
			        	var v = {value: '', color: '', highlight: '', label: ''};
			        	v.value = $rootScope.groupActivity[i].total;
			        	v.color = colors[i];
			        	v.highlight = colors[i];
			        	v.label = $rootScope.groupActivity[i].groupName;
			        	pieChartData.push(v);
			        }
		
				  $rootScope.pieData = pieChartData;
		    	
				  // Chart.js Options
				  $rootScope.pieOptions =  {
					    responsive: true,
					    maintainAspectRatio: true,
					    segmentShowStroke : true,
					    segmentStrokeColor : '#fff',
					    segmentStrokeWidth : 2,
					    percentageInnerCutout : 50,
					    animation: true,
					    animationSteps : 60,
					    animationEasing : 'easeOutBounce',
					    animateRotate : true,
					    animateScale : true,
					    //change template from here!!!!!!!!
					    legendTemplate: '<ul></ul>'//'<ul class="tc-chart-js-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillcolor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
					  };
			      },
			      function(error){
			        console.log('getGroupsActivitySelectedUser onFailure');
			      } 
			    );
			}
			
		}
			
 
});
app.controller( 
	'barChartController', 
	function( $scope, $location, $rootScope, getYTDGroupsOverallActivityFactory, getYTDSelectedGroupOverallActivityFactory, getYTDSelectedUserOverallActivityFactory) {
		
		  $rootScope.initBarChart = function(){	
			  getYTDGroupsOverallActivityFactory().then(
		      function(barSession){
		        console.log('getYTDOverallGroupsActivity onSuccess');
		        $rootScope.groupYTDActivity = barSession.invocationResult.resultSet;
		        
		        var barChartData = [];
		        var chartLabels = [];
		        
		        var fillColor = randomColor({count: 1, hue: 'purple', luminosity: 'light'});
		        var strokeColor = randomColor({count: 1, hue: 'purple', luminosity: 'bright'});
		        var highlightFill = randomColor({count: 1, hue: 'purple', luminosity: 'light'});
		        var highlightStroke = randomColor({count: 1, hue: 'purple', luminosity: 'bright'});
		        //set max to 12
		        for (var i = 0; i < $rootScope.groupYTDActivity.length; i++) {
		        	chartLabels[i] = $rootScope.groupYTDActivity[i].month; 
		        	barChartData.push($rootScope.groupYTDActivity[i].total);
		        }
		        var ds = {data: [], label: '', fillColor: '', strokeColor: '', highlightFill: '', highlightStroke: ''};
		        ds.data = barChartData;
		        ds.fillColor = fillColor[0]; 
		        ds.strokeColor = strokeColor[0]; 
		        ds.highlightFill = highlightFill[0]; 
		        ds.highlightStroke = highlightStroke[0];

	        	console.log(ds);
		        $rootScope.barData={labels: chartLabels, datasets: []};
		        $rootScope.barData.datasets.push(ds);
		       // $rootScope.barData.labels = chartLabels;
		        //$rootScope.barData.datasets = ds;
		        console.log($rootScope.barData.labels);	
		        console.log($rootScope.barData.datasets);
		        console.log($rootScope.barData.datasets[0]);
		        console.log($rootScope.barData);
		        
			  // Chart.js Options
			  $rootScope.barOptions =  {
				      responsive: true,
				      scaleBeginAtZero : true,
				      scaleShowGridLines : true,
				      scaleGridLineColor : "rgba(0,0,0,.05)",
				      scaleGridLineWidth : 1,
				      barShowStroke : true,
				      barStrokeWidth : 2,
				      barValueSpacing : 5,
				      barDatasetSpacing :1 ,
				      legendTemplate :'<ul></ul>' //'<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
				    };
		      },
		      function(error){
		        console.log('getGroupsOverallActivity onFailure');
		      } 
		    );
	      }
    	
		$rootScope.initBarChart();
		
		$rootScope.barChart;
		
		$rootScope.barChartRefresh= function(){
			if($rootScope.mainItemFiltered.item.type){
				if($rootScope.mainItemFiltered.item.type == 'group'){
					$rootScope.barChartGetSelectedGroup();
				}else if($rootScope.mainItemFiltered.item.type == 'user'){
					$rootScope.barChartGetSelectedUser();
				}
			}else{
				$rootScope.initBarChart();
			}
			
		}		
		
		$rootScope.barChartGetSelectedGroup = function(){	
			if($rootScope.mainItemFiltered.item.groupID){
			  getYTDSelectedGroupOverallActivityFactory($rootScope.mainItemFiltered.item.groupID).then(
				      function(barSession){
				        console.log('getYTDSelectedGroupOverallActivityFactory onSuccess');
				        $rootScope.groupYTDActivity = barSession.invocationResult.resultSet;
				        console.log($rootScope.groupYTDActivity);
				        var barChartData = [];
				        var chartLabels = [];
				        
				        var fillColor = randomColor({count: 1, hue: 'purple', luminosity: 'light'});
				        var strokeColor = randomColor({count: 1, hue: 'purple', luminosity: 'bright'});
				        var highlightFill = randomColor({count: 1, hue: 'purple', luminosity: 'light'});
				        var highlightStroke = randomColor({count: 1, hue: 'purple', luminosity: 'bright'});
				        //set max to 12
				        for (var i = 0; i < $rootScope.groupYTDActivity.length; i++) {
				        	chartLabels[i] = $rootScope.groupYTDActivity[i].month; 
				        	barChartData.push($rootScope.groupYTDActivity[i].total);
				        }
				        var ds = {data: [], label: '', fillColor: '', strokeColor: '', highlightFill: '', highlightStroke: ''};
				        ds.data = barChartData;
				        ds.fillColor = fillColor[0]; 
				        ds.strokeColor = strokeColor[0]; 
				        ds.highlightFill = highlightFill[0]; 
				        ds.highlightStroke = highlightStroke[0];

			        	console.log(ds);
				        $rootScope.barData={labels: chartLabels, datasets: []};
				        $rootScope.barData.datasets.push(ds);
				       // $rootScope.barData.labels = chartLabels;
				        //$rootScope.barData.datasets = ds;
				        console.log($rootScope.barData.labels);	
				        console.log($rootScope.barData.datasets);
				        console.log($rootScope.barData.datasets[0]);
				        console.log($rootScope.barData);
				        
					  // Chart.js Options
					  $rootScope.barOptions =  {
						      responsive: true,
						      scaleBeginAtZero : true,
						      scaleShowGridLines : true,
						      scaleGridLineColor : "rgba(0,0,0,.05)",
						      scaleGridLineWidth : 1,
						      barShowStroke : true,
						      barStrokeWidth : 2,
						      barValueSpacing : 5,
						      barDatasetSpacing :1 ,
						      legendTemplate :'<ul></ul>' //'<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
						    };
				      },
				      function(error){
				        console.log('getYTDSelectedGroupOverallActivityFactory onFailure');
				      } 
				    );
			  }
		}
		
		$rootScope.barChartGetSelectedUser = function(){
			if($rootScope.mainItemFiltered.item.userID){
				  getYTDSelectedUserOverallActivityFactory($rootScope.mainItemFiltered.item.userID).then(
					      function(barSession){
					        console.log('getYTDSelectedUserOverallActivityFactory onSuccess');
					        $rootScope.groupYTDActivity = barSession.invocationResult.resultSet;
					        console.log($rootScope.groupYTDActivity);
					        var barChartData = [];
					        var chartLabels = [];
					        
					        var fillColor = randomColor({count: 1, hue: 'purple', luminosity: 'light'});
					        var strokeColor = randomColor({count: 1, hue: 'purple', luminosity: 'bright'});
					        var highlightFill = randomColor({count: 1, hue: 'purple', luminosity: 'light'});
					        var highlightStroke = randomColor({count: 1, hue: 'purple', luminosity: 'bright'});
					        //set max to 12
					        for (var i = 0; i < $rootScope.groupYTDActivity.length; i++) {
					        	chartLabels[i] = $rootScope.groupYTDActivity[i].month; 
					        	barChartData.push($rootScope.groupYTDActivity[i].total);
					        }
					        var ds = {data: [], label: '', fillColor: '', strokeColor: '', highlightFill: '', highlightStroke: ''};
					        ds.data = barChartData;
					        ds.fillColor = fillColor[0]; 
					        ds.strokeColor = strokeColor[0]; 
					        ds.highlightFill = highlightFill[0]; 
					        ds.highlightStroke = highlightStroke[0];

				        	console.log(ds);
					        $rootScope.barData={labels: chartLabels, datasets: []};
					        $rootScope.barData.datasets.push(ds);
					       // $rootScope.barData.labels = chartLabels;
					        //$rootScope.barData.datasets = ds;
					        console.log($rootScope.barData.labels);	
					        console.log($rootScope.barData.datasets);
					        console.log($rootScope.barData.datasets[0]);
					        console.log($rootScope.barData);
					        
						  // Chart.js Options
						  $rootScope.barOptions =  {
							      responsive: true,
							      scaleBeginAtZero : true,
							      scaleShowGridLines : true,
							      scaleGridLineColor : "rgba(0,0,0,.05)",
							      scaleGridLineWidth : 1,
							      barShowStroke : true,
							      barStrokeWidth : 2,
							      barValueSpacing : 5,
							      barDatasetSpacing :1 ,
							      legendTemplate :'<ul></ul>' //'<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
							    };
					      },
					      function(error){
					        console.log('getYTDSelectedUserOverallActivityFactory onFailure');
					      } 
					    );
				  }
			
		}
 
});
