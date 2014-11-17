app.controller(
	'newItemStepTwoController',
	function($scope, $location, globalVariablesFactory, getMaterialsFactory, createItemFactory, DTOptionsBuilder) {
		console.log('newItemStepTwoController');
			
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder.newOptions().withOption('responsive', true);
			
			$scope.name = globalVariablesFactory.sharedObject.newItemStepTwoController_name;

			$scope.description = globalVariablesFactory.sharedObject.newItemStepTwoController_description;
			
			$scope.barcode = globalVariablesFactory.sharedObject.newItemStepTwoController_barcode;
			
			console.log('call getMaterialsFactory');
			
			getMaterialsFactory().then (
				function(session) {
					console.log('getMaterials onSuccess');
					
					console.log(session);
					
					$scope.materials = session.invocationResult.resultSet;
					
					angular.forEach(
						$scope.materials, 
						function(value, key) {
							value.quantity = 0;
						}
					)
					
					console.log($scope.materials);
				},
				function(error) {
					console.log('getMaterials onFailure');
				}
			);
		}
		
		$scope.init();

		$scope.submitNewItem = function()	{
			console.log('submitNewItem');
			
			createItemFactory($scope.name, $scope.description, $scope.barcode, $scope.materials).then (
				function(session) {
					console.log('createItemFactory onSuccess');

					$scope.successMessages = 'Successfully created item';
					$scope.errorMessages = null;
				},
				function(error) {
					console.log('createItemFactory onFailure');

					$scope.successMessages = null;
					$scope.errorMessages = 'Failed to created item';
				}
				
			);

			$timeout(
				function() {
			        $scope.successMessages = null;
			        $scope.errorMessages = null;
				}, 
				3000
			);
		};
	}
	
);