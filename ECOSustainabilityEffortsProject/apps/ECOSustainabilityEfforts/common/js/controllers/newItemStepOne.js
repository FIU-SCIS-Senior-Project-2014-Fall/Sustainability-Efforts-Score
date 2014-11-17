app.controller(
	'newItemStepOneController',
	function($scope, $location, $timeout, globalVariablesFactory) {
		console.log('newItemStepOneController');
		
		$scope.init = function(){
			$scope.barcode = '';
		}
		
		$scope.init();
			
		$scope.next = function()	{
			console.log('next');
			
			console.log('name: ' + $scope.name);
			
			console.log('description: ' + $scope.description);
			
			console.log('barcode: ' + $scope.barcode);
			
			globalVariablesFactory.sharedObject.newItemDuplicatesController_name = $scope.name;

			globalVariablesFactory.sharedObject.newItemDuplicatesController_description = $scope.description;

			globalVariablesFactory.sharedObject.newItemDuplicatesController_barcode = $scope.barcode;

			$timeout(
				function() {
					$location.path('/newItemDuplicates');
	
					console.log($location.path());
				}
			);
		};
	}
	
);