
/* JavaScript content from js/controllers/joinGroup.js in folder common */
app.controller(
	'joinGroupController',
	function($scope, $location, $timeout, getGroupsNotMemberOfFactory, createUserGroupRequestFactory, DTOptionsBuilder, globalVariablesFactory){
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
		
		$scope.clickGroup = function(group) {
			console.log('clickGroup');

			console.log(group);
			
			$scope.selectedGroup = group;

			$scope.selectedGroupName = group.groupName;
		}
		
		$scope.requestGroup = function() {
			console.log('requestGroup');
			
			console.log($scope.selectedGroup.groupID);
			
			createUserGroupRequestFactory($scope.selectedGroup.groupID).then (
				function(session) {
					console.log('getGroupsNotMemberOfFactory onSuccess');
				},
				function(error) {
					console.log('getGroupsNotMemberOfFactory onFailure');
				}
			);
		}
		
		$scope.requestGroupUsers = function() {
			console.log('requestGroupUsers');
			
			console.log($scope.selectedGroup.groupID);
			
			console.log($location.path());

			globalVariablesFactory.sharedObject.groupID = $scope.selectedGroup.groupID;
			
			$timeout(
				function() {
					$location.path('/groupUsers');

					console.log($location.path());
				}
			);
		}
	}	
);

