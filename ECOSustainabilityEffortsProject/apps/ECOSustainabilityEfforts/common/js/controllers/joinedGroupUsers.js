app.controller(
	'joinedGroupUsersController',
	function($scope, getGroupUsersFactory, DTOptionsBuilder){
		console.log('joinedGroupUsersController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder.newOptions().withOption('responsive', true);
			
			console.log('call getGroupUsersFactory');
			
			getGroupUsersFactory().then (
				function(session) {
					console.log('getGroupUsersFactory onSuccess');
					
					console.log(session);
					
					$scope.users = session.invocationResult.resultSet;
					
					console.log($scope.users);
				},
				function(error) {
					console.log('getGroupUsersFactory onFailure');
				}
			);
		}
		
		$scope.init();
		
	}	
);

