
/* JavaScript content from js/controllers/acceptUserGroups.js in folder common */
app.controller(
	'acceptUserGroupsController',
	function($scope, $location, $timeout, getAcceptUserGroupsViewFactory, DTOptionsBuilder, globalVariablesFactory){
		console.log('acceptUserGroupsController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder.newOptions().withOption('responsive', true);
			
			console.log('call getAcceptUserGroupsViewFactory');
			
			getAcceptUserGroupsViewFactory().then (
				function(session) {
					console.log('getAcceptUserGroupsViewFactory onSuccess');
					
					console.log(session);
					
					$scope.groups = session.invocationResult.resultSet;
					
					console.log($scope.groups);
				},
				function(error) {
					console.log('getAcceptUserGroupsViewFactory onFailure');
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

			globalVariablesFactory.sharedObject.acceptUserUsers_group = $scope.selectedGroup;
			
			$timeout(
				function() {
					$location.path('/acceptUserUsers');

					console.log($location.path());
				}
			);
		}
	}	
);

