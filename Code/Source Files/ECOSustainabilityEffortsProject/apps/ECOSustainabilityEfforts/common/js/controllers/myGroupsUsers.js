app.controller(
	'myGroupsUsersController',
	function($rootScope, $scope, $location, $timeout, DTOptionsBuilder, getJoinedGroupUsersViewFactory){
		console.log('myGroupsUsersController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder
								.newOptions()
								.withOption('responsive', true)
								.withBootstrap();
			
			console.log($rootScope.joinedGroupUsers_group);

			console.log('call getJoinedGroupUsersViewFactory');
			
			getJoinedGroupUsersViewFactory($rootScope.joinedGroupUsers_group.groupID).then (
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
		
		$scope.clickUser = function(user) {
			console.log('clickUser');

			console.log(user);
			
			$rootScope.editJoinedGroupUser_user = user;
			
			$scope.selectedUser = user;

			$scope.selectedUserName = user.userName;
		}
	
		$scope.editGroupMember = function() {
			console.log('editGroupMember');
			
			console.log($location.path());
			
			if($scope.selectedUser){
				console.log($rootScope.editJoinedGroupUser_user.groupID);
				
				$timeout(
					function() {
						$location.path('/editJoinedGroupUser');
	
						console.log($location.path());
					}
				);
			}else {
				$scope.errorMessages = 'Please select a group member.';
				
				$timeout(
					function() {
				        $scope.successMessages = null;
				        
				        $scope.errorMessages = null;
					},
					3000
				);
				
			}
				
		}

	}	
);

