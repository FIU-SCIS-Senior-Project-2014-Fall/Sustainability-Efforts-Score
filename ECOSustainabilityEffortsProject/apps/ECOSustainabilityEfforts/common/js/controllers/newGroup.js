

app.controller(
	'newGroupController',
	function($scope, getSessionDataFactory){
		console.log('newGroupController');
			
		$scope.init = function(){

		};
		
		$scope.saveGroupProfile = function(){
			console.log('saving group profile');
			
			alert('Save clicked!');
		}
	}	
);

