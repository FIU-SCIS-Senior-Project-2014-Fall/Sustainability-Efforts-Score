app.controller(
	'recycleController',
	function($scope, $timeout, $location, DTOptionsBuilder, getGroupsMemberOfFactory, getItemsFactory, createRecyclingActionFactory){
		console.log('recycleController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder
								.newOptions()
								.withOption('responsive', true)
								.withBootstrap();
			
			$scope.quantity = 1;
			
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

			// Try HTML5 geolocation
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition (
					function(position) {
						console.log('getCurrentPosition Success');
						
						$timeout(
								function() {
									$scope.latitude = position.coords.latitude;
									$scope.longitude = position.coords.longitude; 
		}
						);
					}, 
					function() {
						console.log('getCurrentPosition Failed');
					}
				);
			}
		}
		
		$scope.init();
		
		$scope.clickGroup = function(group) {
			console.log('clickGroup');

			console.log(group);
			
			$scope.selectedGroup = group;

			$scope.selectedGroupName = group.groupName;
		}

		$scope.clickItem = function(item) {
			console.log('clickItem');

			console.log(item);
			
			$scope.selectedItem = item;

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
			if ($scope.selectedGroup) {
				;
			} else {
				$scope.errorMessages = 'Please select a group!'

				$timeout(
						function() {
							$scope.errorMessages = null;
					      }, 
					      5000
				);
			}
			
			if ($scope.selectedItem) {
				;
			} else {
				$scope.errorMessages = 'Please select an item!'
	
				$timeout(
						function() {
							$scope.errorMessages = null;
					      }, 
					      5000
				);
			}
			
			if ($scope.selectedGroup && $scope.selectedItem) {
				$scope.successMessages = null;
				$scope.errorMessages = null;

				console.log($scope.selectedGroup.groupID);
				
				if ($scope.latitude && $scope.longitude) {
					createRecyclingActionFactory($scope.selectedItem.itemID, $scope.selectedGroup.groupID, $scope.latitude, $scope.longitude,$scope.quantity).then (
						function(session) {
							
							console.log('getting session result');

							$scope.recycleResult = session.invocationResult;
							
								$scope.successMessages = 'Congratulations on recycling this item! ';
								console.log($scope.successMessages );
								console.log($scope.recycleResult.winner);
								if($scope.recycleResult.winner){
									for(var i =0; i<$scope.recycleResult.won_contests.length; i++ ){
										$scope.successMessages = $scope.successMessages + 'You have won contest '+ $scope.recycleResult.won_contests[i] + '! ';
									}
								}
							
								$timeout(
										function() {
											$scope.successMessages = null;
									      }, 
									      5000
								);
							},
							function(error) {
								console.log('getGroupsMemberOfFactory onFailure');

								$scope.errorMessages = 'Failed to recycle this item!'
	
								$timeout(
									function() {
										$scope.errorMessages = null;
									}, 
									5000
								);
							}
					);
				} else {
					createRecyclingActionFactory($scope.selectedItem.itemID, $scope.selectedGroup.groupID, null, null, $scope.quantity).then (
							function(session) {
								console.log('getGroupsMemberOfFactory onSuccess');
								
								console.log(session);
								
								console.log($scope.groups);
	
							$scope.successMessages = 'Congratulations on recycling this item!'

							$timeout(
									function() {
										$scope.successMessages = null;
								      }, 
								      5000
							);
						},
						function(error) {
							console.log('getGroupsMemberOfFactory onFailure');

							$scope.errorMessages = 'Failed to recycle this item!'

							$timeout(
								function() {
									$scope.errorMessages = null;
								}, 
								5000
							);
						}
				);
			} 
		}
	}	
	}	
);


