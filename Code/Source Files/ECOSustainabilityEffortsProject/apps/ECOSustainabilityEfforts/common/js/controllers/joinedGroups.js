app.controller(
	'joinedGroupsController',
	function($rootScope, $scope, $location, $timeout, getGroupsMemberOfFactory, DTOptionsBuilder){
		console.log('joinedGroupsController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder
								.newOptions()
								.withOption('responsive', true)
								.withBootstrap();
			
			console.log('call getGroupsMemberOfFactory');
			
			getGroupsMemberOfFactory().then (
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
			
			console.log($location.path());
			
			if($scope.selectedGroup){
				console.log($scope.selectedGroup);
				
				$rootScope.groupUsers_group = $scope.selectedGroup;

				$timeout(
					function() {
						$location.path('/joinedGroupsUsers');
	
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
					5000
				);
				
			}
				
		}
	}	
	
	
);


