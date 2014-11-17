
/* JavaScript content from js/controllers/newMaterial.js in folder common */
app.controller(
	'newMaterialController',
	function($scope, createMaterialFactory) {
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
					$scope.errorMessages = null;
				},
				function(error)	{
					console.log('createMaterialFactory onFailure');
					
					$scope.successMessages = null;	
					$scope.errorMessages = 'Failed to created material!';
				}
			);
		};
	}
	
);