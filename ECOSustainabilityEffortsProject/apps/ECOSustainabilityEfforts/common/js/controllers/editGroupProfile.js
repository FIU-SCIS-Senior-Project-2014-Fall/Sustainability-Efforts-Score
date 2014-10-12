

app.controller(
	'editGroupProfileController',
	function($scope, getSessionDataFactory){
		console.log('editGroupProfileController');
			
		$scope.init = function(){

		};
		
		$scope.saveGroupProfile = function(){
			console.log('edit group profile');
			
			alert('Save clicked!');
		}
	}	
);