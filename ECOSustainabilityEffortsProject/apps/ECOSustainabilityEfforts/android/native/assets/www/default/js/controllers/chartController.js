
/* JavaScript content from js/controllers/chartController.js in folder common */

app.controller( 
	'pieChartController', 
	function( $scope, $location, getGroupsOverallActivityFactory ) {
		
		$scope.initPieChart = function(){
			getGroupsOverallActivityFactory().then(
			
		      function(pieSession){
		        console.log('getGroupsOverallActivity onSuccess');
		        $scope.groupActivity = pieSession.invocationResult.resultSet;
		        
		        var pieChartData = [];
		        
		        var colors = randomColor({count: $scope.groupActivity.length, hue: 'random'});
		        //set max to 20
		        for (var i = 0; i < $scope.groupActivity.length; i++) {
		        	var v = {value: '', color: '', highlight: '', label: ''};
		        	v.value = $scope.groupActivity[i].total;
		        	v.color = colors[i];
		        	v.highlight = colors[i];
		        	v.label = $scope.groupActivity[i].groupName;
		        	pieChartData.push(v);
		        }
	
			  $scope.pieData = pieChartData;
	    	
			  // Chart.js Options
			  $scope.pieOptions =  {
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
				    animateScale : false,
				    //change template from here!!!!!!!!
				    legendTemplate: '<ul></ul>'//'<ul class="tc-chart-js-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
				  };
		      },
		      function(error){
		        console.log('getGroupsOverallActivity onFailure');
		      } 
		    );
		}
		$scope.initPieChart();
    	
		
		$scope.pieChart;
		
		$scope.pieChartClick = function( event ){
			if($scope.pieChart){
				var piePoints = $scope.pieChart.getSegmentsAtEvent( event );
				if(piePoints[0]!= undefined && piePoints[0] != null){
					console.log(piePoints[0].label);
					$location.path('/myGroups');
				}

			}
			
		}
		
		$scope.pieChartUpdate = function( ){
				console.log('pie refresh');
				$scope.initPieChart();
		}
			
 
});
app.controller( 
	'barChartController', 
	function( $scope, $location, getYTDGroupsOverallActivityFactory ) {
		
		  $scope.initBarChart = function(){	
			  getYTDGroupsOverallActivityFactory().then(
		      function(barSession){
		        console.log('getYTDOverallGroupsActivity onSuccess');
		        $scope.groupYTDActivity = barSession.invocationResult.resultSet;
		        
		        var barChartData = [];
		        var chartLabels = [];
		        
		        var fillColor = randomColor({count: 1, hue: 'purple', luminosity: 'light'});
		        var strokeColor = randomColor({count: 1, hue: 'purple', luminosity: 'bright'});
		        var highlightFill = randomColor({count: 1, hue: 'purple', luminosity: 'light'});
		        var highlightStroke = randomColor({count: 1, hue: 'purple', luminosity: 'bright'});
		        //set max to 20
		        for (var i = 0; i < $scope.groupYTDActivity.length; i++) {
		        	chartLabels[i] = $scope.groupYTDActivity[i].month; 
		        	barChartData.push($scope.groupYTDActivity[i].total);
		        }
		        var ds = {data: [], label: '', fillColor: '', strokeColor: '', highlightFill: '', highlightStroke: ''};
		        ds.data = barChartData;
		        ds.fillColor = fillColor[0]; 
		        ds.strokeColor = strokeColor[0]; 
		        ds.highlightFill = highlightFill[0]; 
		        ds.highlightStroke = highlightStroke[0];

	        	console.log(ds);
		        $scope.barData={labels: chartLabels, datasets: []};
		        $scope.barData.datasets.push(ds);
		       // $scope.barData.labels = chartLabels;
		        //$scope.barData.datasets = ds;
		        console.log($scope.barData.labels);	
		        console.log($scope.barData.datasets);
		        console.log($scope.barData.datasets[0]);
		        console.log($scope.barData);
		        
			  // Chart.js Options
			  $scope.barOptions =  {
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
    	
		$scope.initBarChart();
		
		$scope.barChart;
		
		$scope.barChartClick = function( event ){
			if($scope.barChart){
				var barPoints = $scope.barChart.getBarsAtEvent( event );
				if(barPoints[0]!= undefined && barPoints[0] != null){
					console.log(barPoints[0].label);
					$location.path('/myGroups');
				}

			}
			
		}
		
		$scope.barChartUpdate = function( ){
			console.log('bar refresh');
			$scope.initBarChart();
	}
 
});
