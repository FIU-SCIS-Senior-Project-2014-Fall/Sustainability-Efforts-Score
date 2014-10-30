app.controller(
	'myGroupsController',
	function($scope, $location, $timeout, getGroupsOwnerOfFactory, DTOptionsBuilder, globalVariablesFactory){
		console.log('myGroupsController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder.newOptions().withOption('responsive', true);
			
			console.log('call getGroupsMemberOfFactory');
			
			getGroupsOwnerOfFactory().then (
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
		
		$scope.requestGroups = function(group) {
			console.log('requestGroup');
			
			console.log(group.groupID);
		}
		
		$scope.requestGroupUsers = function(group) {
			console.log('requestGroupUsers');
			
			console.log(group.groupID);
			
			console.log($location.path());

			$timeout(
				function() {
					globalVariablesFactory.sharedObject.groupID = group.groupID;
					
					$location.path('/joinedGroupUsers');

					console.log($location.path());
				}
			);
		}
		
		$scope.updateGroupProfile = function(group) {
			console.log('updateGroupProfile');
			
			console.log(group.myGroupID);
			
			console.log($location.path());

			$timeout(
				function() {
					globalVariablesFactory.sharedObject.myGroupID = group.groupID;
					
					$location.path('/updateGroupProfile');

					console.log($location.path());
				}
			);
		}
	}	
);

