
/* JavaScript content from js/controllers/newItemDuplicates.js in folder common */
app.controller(
	'newItemDuplicatesController',
	function($scope, $location, $timeout, getItemDuplicatesFactory, DTOptionsBuilder, globalVariablesFactory){
		console.log('newItemDuplicatesController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder.newOptions().withOption('responsive', true);
			
			console.log('call getItemDuplicates');
			
			getItemDuplicatesFactory(globalVariablesFactory.sharedObject.newItemDuplicatesController_name, globalVariablesFactory.sharedObject.newItemDuplicatesController_description).then (
				function(session) {
					console.log('getItemDuplicates onSuccess');
					
					console.log(session);
					
					$scope.items = session.invocationResult.resultSet;
					
					console.log($scope.groups);
				},
				function(error) {
					console.log('getItemDuplicates onFailure');
				}
			);
		}
		
		$scope.notDuplicate = function () {
			globalVariablesFactory.sharedObject.newItemStepTwoController_name = globalVariablesFactory.sharedObject.newItemDuplicatesController_name;
			
			globalVariablesFactory.sharedObject.newItemStepTwoController_description = globalVariablesFactory.sharedObject.newItemDuplicatesController_description;
			
			globalVariablesFactory.sharedObject.newItemStepTwoController_barcode = globalVariablesFactory.sharedObject.newItemDuplicatesController_barcode;

			$timeout(
				function() {
					$location.path('/newItemStepTwo');
	
					console.log($location.path());
				}
			);
		}
		
		$scope.init();
	}	
);


