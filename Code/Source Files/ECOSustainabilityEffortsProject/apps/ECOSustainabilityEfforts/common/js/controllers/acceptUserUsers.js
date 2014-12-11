app.controller(
	'acceptUserUsersController',
	function($rootScope, $scope, $timeout, getAcceptUserUsersViewFactory, acceptUserGroupRequestFactory, rejectUserGroupRequestFactory, DTOptionsBuilder){
		console.log('acceptUserUsersController');
		
		$scope.getAcceptUserUsersView = function () {
			console.log('getAcceptUserUsersView');
			
			console.log('call getAcceptUserUsersViewFactory');

			getAcceptUserUsersViewFactory($rootScope.acceptUserUsers_group.groupID).then (
				function(session) {
					console.log('getAcceptUserUsersViewFactory onSuccess');

					console.log(session);
					
					$scope.users = session.invocationResult.resultSet;
					
					console.log($scope.users);
				},
				function(error) {
					console.log('getAcceptUserUsersViewFactory onFailure');
				}
			);
		}
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder
								.newOptions()
								.withOption('responsive', true)
								.withBootstrap();
			
			console.log('call getAcceptUserUsersViewFactory');
			
			console.log($rootScope.acceptUserUsers_group);
			
			$scope.getAcceptUserUsersView();
		}
		
		$scope.init();
		
		$scope.clickUser = function(user) {
			console.log('clickUser');

			console.log(user);
			
			$scope.selectedUser = user;

			$scope.selectedUserName = user.firstName + ' ' + user.lastName;
		}
		
		$scope.acceptUser = function() {
			console.log('acceptUser')
			
			if($scope.selectedUser){
				acceptUserGroupRequestFactory($rootScope.acceptUserUsers_group.groupID, $scope.selectedUser.userID).then (
					function(session) {
						console.log('acceptUserGroupRequestFactory onSuccess');
						
						$scope.getAcceptUserUsersView();
					},
					function(error) {
						console.log('acceptUserGroupRequestFactory onFailure');
					}
				);
			}else {
				$scope.errorMessages = 'Please select a user.';

				$timeout(
					function() {
				        $scope.successMessages = null;

				        $scope.errorMessages = null;
					}, 
					3000
				);
			}
		}
		
		$scope.rejectUser = function() {
			if($scope.selectedUser){
				rejectUserGroupRequestFactory($rootScope.acceptUserUsers_group.groupID, $scope.selectedUser.userID).then (
					function(session) {
						console.log('rejecttUserGroupRequestFactory onSuccess');
					
						$scope.getAcceptUserUsersView();
					},
					function(error) {
						console.log('rejecttUserGroupRequestFactory onFailure');
					}
				);
			} else {
				$scope.errorMessages = 'Please select a user.';
				
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

