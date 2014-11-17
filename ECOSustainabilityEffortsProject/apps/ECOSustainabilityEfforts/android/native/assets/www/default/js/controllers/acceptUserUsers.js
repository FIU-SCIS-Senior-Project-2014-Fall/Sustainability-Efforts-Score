
/* JavaScript content from js/controllers/acceptUserUsers.js in folder common */
app.controller(
	'acceptUserUsersController',
	function($scope, getAcceptUserUsersViewFactory, acceptUserGroupRequestFactory, rejectUserGroupRequestFactory, DTOptionsBuilder, globalVariablesFactory){
		console.log('acceptUserUsersController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder.newOptions().withOption('responsive', true);
			
			console.log('call getAcceptUserUsersViewFactory');
			
			console.log(globalVariablesFactory.sharedObject.acceptUserUsers_group);

			getAcceptUserUsersViewFactory(globalVariablesFactory.sharedObject.acceptUserUsers_group.groupID).then (
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
		
		$scope.init();
		
		$scope.clickUser = function(user) {
			console.log('clickUser');

			console.log(user);
			
			$scope.selectedUser = user;

			$scope.selectedUserName = user.firstName + ' ' + user.lastName;
		}
		
		$scope.acceptUser = function() {
			acceptUserGroupRequestFactory(globalVariablesFactory.sharedObject.acceptUserUsers_group.groupID, $scope.selectedUser.userID).then (
					function(session) {
						console.log('acceptUserGroupRequestFactory onSuccess');
					
					},
					function(error) {
						console.log('acceptUserGroupRequestFactory onFailure');
					}
			);
		}
		
		$scope.rejectUser = function() {
			rejectUserGroupRequestFactory(globalVariablesFactory.sharedObject.acceptUserUsers_group.groupID, $scope.selectedUser.userID).then (
					function(session) {
						console.log('rejecttUserGroupRequestFactory onSuccess');
					
					},
					function(error) {
						console.log('rejecttUserGroupRequestFactory onFailure');
					}
			);
		}
	}	
);

