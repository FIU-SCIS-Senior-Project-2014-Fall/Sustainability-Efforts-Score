
/* JavaScript content from js/controllers/joinedGroups.js in folder common */
app.controller(
	'joinedGroupsController',
	function($scope, $location, $timeout, getGroupsMemberOfFactory, DTOptionsBuilder, globalVariablesFactory){
		console.log('joinedGroupsController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder.newOptions().withOption('responsive', true);
			
			console.log('call getGroups');
			
			getGroupsMemberOfFactory().then (
				function(session) {
					console.log('getGroupsMemberOfFactory onSuccess');
					
					console.log(session);
					
					$scope.groups = session.invocationResult.resultSet;
					
					console.log($scope.groups);
				},
				function(error) {
					console.log('getGroupsMemberOfFactory onFailure');
				}
			);
		}
		
		$scope.init();
	}	
);


