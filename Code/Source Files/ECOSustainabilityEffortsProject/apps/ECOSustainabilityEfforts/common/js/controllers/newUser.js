app.controller(
	'newUserController',
	function($scope, $location, $timeout, createUserFactory) {
		console.log('newUserController');
		
		$scope.init = function () {
			$scope.newUser = '';

			$scope.newUser.userName = '';
			$scope.newUser.firstName = '';
			$scope.newUser.lastName = '';
			$scope.newUser.email = '';
			$scope.newUser.password = '';
		}
		
		$scope.init();
		
		$scope.submitNewUser = function(firstName, lastName, userName, password, email)	{
			console.log('submit new user');

			console.log($scope.newUser.userName);
			
			console.log($scope.newUser.firstName);
			
			console.log($scope.newUser.lastName);
			
			console.log($scope.newUser.email);
			
			console.log($scope.newUser.password);			
			
			console.log(firstName);
			
			console.log(lastName);
			
			console.log(userName);
			
			console.log(password);
			
			console.log(email);

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
				
			$timeout(
				function() {
					$scope.newUser.userName = '';
					$scope.newUser.firstName = '';
					$scope.newUser.lastName = '';
					$scope.newUser.email = '';
					$scope.newUser.password = '';
					
					$scope.newUserNameForm.$setPristine(true);

					$scope.successMessages = null;
					$scope.errorMessages = null;
			      }, 
			      5000
			);
		};
		
	}
	
);