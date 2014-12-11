app.controller(
	'joinedGroupsUsersController',
	function($rootScope, $scope, getGroupUsersFactory, DTOptionsBuilder){
		console.log('joinedGroupsUsersController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder
								.newOptions()
								.withOption('responsive', true)
								.withBootstrap();
			
			console.log('call getGroupUsersFactory');
			
			console.log($rootScope.groupUsers_group);
			
			getGroupUsersFactory($rootScope.groupUsers_group.groupID).then (
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

