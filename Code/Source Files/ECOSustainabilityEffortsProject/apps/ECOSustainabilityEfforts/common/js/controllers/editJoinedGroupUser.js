app.controller(
	'editJoinedGroupUserController',
	function($rootScope, $scope, $timeout, getGroupRolesFactory, updateUserToGroupFactory){
		console.log('newGroupController');
			
		$scope.init = function(){
			console.log('init');
			
			$scope.user = $rootScope.editJoinedGroupUser_user;

			console.log('call getGroupRolesFactory');

			getGroupRolesFactory().then(
				function(session){
					console.log('getGroupRolesFactory onSuccess');
					
					$scope.groupRoles = session.invocationResult.resultSet;
					
					for (var i = 0; i < $scope.groupRoles.length; i++) {
						if($scope.groupRoles[i].groupRoleID == $scope.user.groupRoleID){
							$scope.groupRole = $scope.groupRoles[i];
							
							break;
						}
					}

					console.log('groupRoles loaded');

					console.log($scope.groupRoles);
				},
				function(error){
					console.log('getGroupRolesFactory onFailure');

					$scope.errorMessages = 'There was a problem loading user role information.';
				}
			);
		};
		
		$scope.init();
		
		$scope.updateJoinedGroupUser = function(){
			console.log('updateUserToGroupFactory');
			
			updateUserToGroupFactory($scope.user.userID, $scope.groupRole.groupRoleID).then(		
					function(session){
						$scope.errorMessages = null;
						
						$scope.successMessages = 'Group member has been updated!';
					},
					function(error){
						$scope.successMessages = null;
						
						$scope.errorMessages = 'There was a problem updating group member information.';
					}
			);
			
			$timeout(function() {
		        $scope.successMessages = null;
		        $scope.errorMessages = null;
		      }, 
		      3000
			);

		}

	}	
);

