app.controller(
	'bootstrapNavbarController',
	function($scope, getUserRoleFactory) {
		
		console.log('bootstrapNavbarController');

		$scope.init = function() {
			getUserRoleFactory().then (
				function(session){
					console.log('getUserRoleFactory onSuccess');

					$scope.userRole = session.invocationResult.resultSet[0];
				},
				function(error){
					console.log('getUserRoleFactory onFailure');

				}
			);
		}
		
		$scope.init();
	}			
);
