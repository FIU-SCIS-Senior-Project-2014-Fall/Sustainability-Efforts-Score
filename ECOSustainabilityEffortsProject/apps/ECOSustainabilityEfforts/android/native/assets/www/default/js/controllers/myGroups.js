
/* JavaScript content from js/controllers/myGroups.js in folder common */
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

		$scope.clickGroup = function(group) {
			console.log('clickGroup');

			console.log(group);
			
			$scope.selectedGroup = group;

			$scope.selectedGroupName = group.groupName;
		}
		
		$scope.requestGroupUsers = function() {
			console.log('requestGroupUsers');
			
			console.log($scope.selectedGroup.groupID);
			
			console.log($location.path());

			globalVariablesFactory.sharedObject.groupID = $scope.selectedGroup.groupID;
			
			$timeout(
				function() {
					$location.path('/joinedGroupUsers');

					console.log($location.path());
				}
			);
		}
		
		$scope.updateGroupProfile = function(group) {
			console.log('updateGroupProfile');
			
			console.log($scope.selectedGroup.groupID);
			
			globalVariablesFactory.sharedObject.myGroupID = $scope.selectedGroup.groupID;
			
			console.log($location.path());

			$timeout(
				function() {
					$location.path('/updateGroupProfile');

					console.log($location.path());
				}
			);
		}

	}	
);

