
/* JavaScript content from js/controllers/statsController.js in folder common */

app.controller( 
	'statsController', 
	function( $scope, $location, getTotalUsersFactory, getTotalGroupsFactory, getTotalRecyclingActionsFactory ) {
		$scope.initStats = function(){
			getTotalUsersFactory().then(
			
		      function(session){
		        console.log('getTotalUsers onSuccess');
		        $scope.totalUsers = session.invocationResult.resultSet[0];
		        console.log($scope.totalUsers);
		        
		      },
		      function(error){
		        console.log('getTotalUsers onFailure');
		      } 
		    );
			
			getTotalGroupsFactory().then(
					
		      function(session){
		        console.log('getTotalGroups onSuccess');
		        $scope.totalGroups = session.invocationResult.resultSet[0];
		        console.log($scope.totalGroups);
		        
		      },
		      function(error){
		        console.log('getTotalGroups onFailure');
		      } 
		    );
			
			getTotalRecyclingActionsFactory().then(
		      function(session){
		        console.log('getTotalGroups onSuccess');
		        $scope.totalItems = session.invocationResult.resultSet[0];
		        console.log($scope.totalItems);
		        
		      },
		      function(error){
		        console.log('getTotalGroups onFailure');
		      } 
		    );
		}
		$scope.initStats();

			
 
});