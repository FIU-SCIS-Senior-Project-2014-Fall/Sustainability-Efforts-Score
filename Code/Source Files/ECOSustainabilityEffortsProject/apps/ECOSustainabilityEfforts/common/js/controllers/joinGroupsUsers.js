app.controller(
	'joinGroupsUsersController',
	function($rootScope, $scope, $location, $timeout, DTOptionsBuilder, getJoinedGroupUsersViewFactory){
		console.log('joinGroupsUsersController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder
								.newOptions()
								.withOption('responsive', true)
								.withBootstrap();
			
			console.log($rootScope.joinGroupsUsers_group);

			console.log('call getJoinedGroupUsersViewFactory');
			
			getJoinedGroupUsersViewFactory($rootScope.joinGroupsUsers_group.groupID).then (
				function(session) {
					console.log('getJoinedGroupUsersViewFactory onSuccess');
					
					console.log(session);
					
					$scope.users = session.invocationResult.resultSet;
					
					console.log($scope.users);
				},
				function(error) {
					console.log('getJoinedGroupUsersViewFactory onFailure');
				}
			);
		}
		
		$scope.init();
		
	}	
);

