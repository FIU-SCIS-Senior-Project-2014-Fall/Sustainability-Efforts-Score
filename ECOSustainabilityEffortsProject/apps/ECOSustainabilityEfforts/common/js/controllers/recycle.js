app.controller(
	'recycleController',
	function($scope, DTOptionsBuilder, getGroupsMemberOfFactory, getItemsFactory, createRecyclingActionFactory){
		console.log('recycleController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder.newOptions().withOption('responsive', true);
			
			$scope.quantity = '1';
			
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

			console.log('call getItemsFactory');
			
			getItemsFactory().then (
				function(session) {
					console.log('getItemsFactory onSuccess');
					
					console.log(session);
					
					$scope.items = session.invocationResult.resultSet;
					
					console.log($scope.groups);
				},
				function(error) {
					console.log('getItemsFactory onFailure');
				}
			);
		}
		
		$scope.init();
		
		$scope.clickGroup = function(group) {
			console.log('clickGroup');

			console.log(group);
			
			$scope.selectedGroupID = group.groupID;

			$scope.selectedGroupName = group.groupName;
		}

		$scope.clickItem = function(item) {
			console.log('clickItem');

			console.log(item);
			
			$scope.selectedItemID = item.itemID;

			$scope.selectedItemName = item.name;
		}
		
		$scope.quantityMinus = function() {
			console.log('quantityMinus');
			
			if ($scope.quantity > 1) {
				$scope.quantity = $scope.quantity - 1;
			}
		}

		$scope.quantityPlus = function() {
			console.log('quantityPlus');
			
			$scope.quantity = $scope.quantity + 1;
		}
		
		$scope.submitNewRecyclingAction = function () {
			createRecyclingActionFactory($scope.selectedItemID, $scope.selectedGroupID, null, null, $scope.quantity).then (
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
	}	
);


