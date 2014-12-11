app.controller(
	'joinGroupsController',
	function($rootScope, $scope, $location, $timeout, getGroupsNotMemberOfFactory, createUserGroupRequestFactory, DTOptionsBuilder){
		console.log('joinGroupsController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder
								.newOptions()
								.withOption('responsive', true)
								.withBootstrap();
			
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
			
			if($scope.selectedGroup){
				console.log($scope.selectedGroup.groupID);
			
				createUserGroupRequestFactory($scope.selectedGroup.groupID).then (
					function(session) {
						console.log('getGroupsNotMemberOfFactory onSuccess');
					},
					function(error) {
						console.log('getGroupsNotMemberOfFactory onFailure');
					}
				);

				$scope.successMessages = 'Request sent!';

				$timeout(
					function() {
				        $scope.successMessages = null;
	
				        $scope.errorMessages = null;
				      }, 
				      3000
					);
			} else {
				$scope.errorMessages = 'Please select a group.';

				$timeout(
					function() {
				        $scope.successMessages = null;
				        
				        $scope.errorMessages = null;
					}, 
					3000
				);
			}
		}
		
		$scope.requestGroupUsers = function() {
			console.log('requestGroupUsers');
			
			if($scope.selectedGroup){
				console.log($scope.selectedGroup);

				$rootScope.joinGroupsUsers_group = $scope.selectedGroup;
				
				$timeout(
					function() {
						$location.path('/joinGroupsUsers');
	
						console.log($location.path());
					}
				);
			}else {
				$scope.errorMessages = 'Please select a group.';
				
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

