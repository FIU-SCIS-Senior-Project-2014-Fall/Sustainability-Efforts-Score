app.controller(
	'joinGroupController',
	function($scope, $location, $timeout, getGroupsNotMemberOfFactory, DTOptionsBuilder, globalVariablesFactory){
		console.log('joinGroupController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder.newOptions().withOption('responsive', true);
			
			console.log('call getGroupsNotMemberOfFactory');
			
			getGroupsNotMemberOfFactory().then (
				function(session) {
					console.log('getGroupsNotMemberOfFactory onSuccess');
					
					console.log(session);
					
					$scope.groups = session.invocationResult.resultSet;
					
					console.log($scope.groups);
				},
				function(error) {
					console.log('getGroupsNotMemberOfFactory onFailure');
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
					
					$location.path('/groupUsers');

					console.log($location.path());
				}
			);
		}
	}	
);

