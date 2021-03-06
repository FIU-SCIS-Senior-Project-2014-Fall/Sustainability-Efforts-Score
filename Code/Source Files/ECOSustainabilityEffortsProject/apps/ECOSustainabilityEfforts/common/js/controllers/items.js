app.controller(
	'itemsController',
	function($scope, getItemsFactory, DTOptionsBuilder){
		console.log('itemsController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder
								.newOptions()
								.withOption('responsive', true)
								.withBootstrap();
			
			console.log('call getItems');
			
			getItemsFactory().then (
				function(session) {
					console.log('getItems onSuccess');
					
					console.log(session);
					
					$scope.items = session.invocationResult.resultSet;
					
					console.log($scope.materials);
				},
				function(error) {
					console.log('getItems onFailure');
				}
			);
		}
		
		$scope.init();
	}	
);


