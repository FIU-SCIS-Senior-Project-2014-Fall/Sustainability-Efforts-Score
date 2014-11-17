
/* JavaScript content from js/controllers/scoreboardsController.js in folder common */

app.controller( 
	'userScoreboardController', 
	function( $scope, $location, getUsersOverallScoreboardFactory ) {
		$scope.initUserScoreboard = function(){
			getUsersOverallScoreboardFactory().then(
			
		      function(userScoreboardSession){
		        console.log('getUserOverallScoreboard onSuccess');
		        $scope.userScoreboard = userScoreboardSession.invocationResult.resultSet;
		        console.log($scope.userScoreboard);
		        
		      },
		      function(error){
		        console.log('getUserOverallScoreboard onFailure');
		      } 
		    );
		}
		$scope.initUserScoreboard();

		
		$scope.userScoreboardUpdate = function( ){
				console.log('user score board refresh');
				$scope.initUserScoreboard();
		}
			
 
});
app.controller( 
		'groupScoreboardController', 
		function( $scope, $location, getGroupsOverallScoreboardFactory ) {
			$scope.initGroupScoreboard = function(){
				getGroupsOverallScoreboardFactory().then(
				
			      function(groupScoreboardSession){
			        console.log('getUserOverallScoreboard onSuccess');
			        $scope.groupScoreboard = groupScoreboardSession.invocationResult.resultSet;
			        console.log($scope.groupScoreboard);
			        
			      },
			      function(error){
			        console.log('getUserOverallScoreboard onFailure');
			      } 
			    );
			}
			$scope.initGroupScoreboard();

			
			$scope.groupScoreboardUpdate = function( ){
					console.log('user score board refresh');
					$scope.initGroupScoreboard();
			}
				
	 
	});



