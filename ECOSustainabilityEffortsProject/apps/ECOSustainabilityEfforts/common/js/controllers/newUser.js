app.controller(
	'newUserController',
	function($scope, $location, $timeout, createUserFactory) {
		console.log('newUserController');
			
		$scope.submitNewUser = function(firstName, lastName, userName, email, password)	{
			console.log('submit new user');
			
			console.log('firstName: ' + firstName);
			
			console.log('lastName: ' + lastName);

			console.log('userName: ' + userName);

			console.log('email: ' + email);

			console.log('password: ' + password);

			createUserFactory(firstName, lastName, userName,  password, email).then (
				function(session) {
					console.log('createUserFactory onSuccess');
					
					$scope.session = session;
					
					$scope.errorMsg = '';
					
					$timeout(
						function() {
								$location.path('/login');
						}
					);
				},
				function(error)	{
					console.log('createUserFactory onFailure');
					
					$scope.errorMsg = 'Could Not Create User';
				}
			);
		};
	}
	
);