app.controller(
	'materialsController',
	function($scope, getMaterialsFactory, DTOptionsBuilder){
		console.log('materialsController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder
								.newOptions()
								.withOption('responsive', true)
								.withBootstrap();
			
			console.log('call getMaterials');
			
			getMaterialsFactory().then (
				function(session) {
					console.log('getMaterials onSuccess');
					
					console.log(session);
					
					$scope.materials = session.invocationResult.resultSet;
					
					console.log($scope.materials);
				},
				function(error) {
					console.log('getMaterials onFailure');
				}
			);
		}
		
		$scope.init();
	}	
);


