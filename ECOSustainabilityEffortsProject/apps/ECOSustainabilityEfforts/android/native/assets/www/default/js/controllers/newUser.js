
/* JavaScript content from js/controllers/newUser.js in folder common */
app.controller(
	'newUserController',
	function($scope, $location, $timeout, createUserFactory) {
		console.log('newUserController');
			
		$scope.submitNewUser = function(firstName, lastName, userName, password, email)	{
			console.log('submit new user');

			createUserFactory(firstName, lastName, userName,  password, email).then (
				
				function(session){
					console.log('createUserFactory onSuccess');
					$scope.session = session;
					$scope.successMessages = 'User Account has been created! Please log in to start saving the planet!';
					$scope.errorMessages = null;
				},
				function(error){
					console.log('createUserFactory onFailure');
					$scope.successMessages = null;	
					$scope.errorMessages = 'There was a problem creating your account. Please try again.';
				}
			);
				
			$timeout(function() {
		        $scope.successMessages = null;
		        $scope.errorMessages = null;
		      }, 5000);
		};
		
	}
	
);