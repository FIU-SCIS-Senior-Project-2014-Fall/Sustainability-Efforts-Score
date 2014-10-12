app.controller(
	'newUserController',
	function($scope, $location, submitNewUserFactory)
	{
		console.log('newUserController');
			
		$scope.submitNewUser = function(firstName, lastName, userName, email, password)
		{
			console.log('submit new user');
			
			console.log('firstName: ' + firstName);
			
			console.log('lastName: ' + lastName);

			console.log('userName: ' + userName);

			console.log('email: ' + email);

			console.log('password: ' + password);

			submitNewUserFactory(firstName, lastName, userName,  password, email).then
			(
				function(session)
				{
					console.log('User Created');
					
					$scope.session = session;
					
					$scope.errorMsg = '';
					
					$location.path('/login');

					$scope.$apply();
				},
				function(error)
				{
					console.log('Error');
					
					$scope.errorMsg = 'Could Not Create User';
				}
			);
		};
	}
	
);