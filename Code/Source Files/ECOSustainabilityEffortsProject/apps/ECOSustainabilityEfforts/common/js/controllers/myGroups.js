app.controller(
	'myGroupsController',
	function($rootScope, $scope, $location, $timeout, DTOptionsBuilder, getGroupsOwnerOfFactory){
		console.log('myGroupsController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder
								.newOptions()
								.withOption('responsive', true)
								.withBootstrap();
			
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
			
			if ($scope.selectedGroup) {
				
				console.log($scope.selectedGroup.groupID);
				
				console.log($location.path());

				$rootScope.joinedGroupUsers_group = $scope.selectedGroup;
				
				$timeout(
					function() {
						$location.path('/myGroupsUsers');

						console.log($location.path());
					}
				);
			} else {
				$scope.errorMessages = 'Please select a group!'

				$timeout(
						function() {
							$scope.errorMessages = null;
					      }, 
					      5000
				);
			}
			
		}
		
		$scope.updateGroupProfile = function(group) {
			console.log('updateGroupProfile');
			
			if ($scope.selectedGroup) {
				console.log($scope.selectedGroup.groupID);
				
				$rootScope.updateGroupProfile_group = $scope.selectedGroup;
				
				console.log($location.path());

				$timeout(
					function() {
						$location.path('/updateGroupProfile');

						console.log($location.path());
					}
				);
			} else {
				$scope.errorMessages = 'Please select a group!'

				$timeout(
						function() {
							$scope.errorMessages = null;
					      }, 
					      5000
				);
			}
		}

	}	
);

