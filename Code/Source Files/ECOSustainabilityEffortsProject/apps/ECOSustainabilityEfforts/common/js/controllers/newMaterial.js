app.controller(
	'newMaterialController',
	function($scope, $timeout, createMaterialFactory) {
		console.log('newMaterialController');
			
		$scope.submitNewMaterial = function(name, description, measure)	{
			console.log('submitNewMaterial');
			
			console.log('name: ' + name);
			
			console.log('description: ' + description);

			console.log('measure: ' + measure);

			createMaterialFactory(name, description, measure).then (
				function(session) {
					console.log('createMaterialFactory onSuccess');
					
					$scope.successMessages = 'Successfullly created material!';	

					$timeout(
							function() {
								$scope.newMaterial.name = '';
								$scope.newMaterial.description = '';
								$scope.newMaterial.measure = '';

								$scope.newNameInputFieldForm.$setPristine();
								$scope.newMeasureInputFieldForm.$setPristine();

								$scope.successMessages = null;
							}, 
							5000
					);
				},
				function(error)	{
					console.log('createMaterialFactory onFailure');
					
					$scope.errorMessages = 'Failed to created material!';

					$timeout(
							function() {
								$scope.errorMessages = null;
							}, 
							5000
					);
				}
			);
		};
	}
	
);