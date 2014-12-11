app.controller(
	'homeController',
	function($scope, $location, $timeout, createUserFactory, getUserDetailsFactory)
	{
		console.log('homeController');

		$scope.init = function () {
		}
		
		$scope.init();
		
		$scope.submitNewUser = function(firstName, lastName, userName, password, email)	{
			console.log('submit new user');

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

					$scope.newUserNameForm.$setPristine();
					$scope.newFirstNameForm.$setPristine();
					$scope.newLastNameForm.$setPristine();
					$scope.newEmailForm.$setPristine();
					$scope.newPasswordForm.$setPristine();

					$scope.successMessages = null;
					$scope.errorMessages = null;
			      }, 
			      5000
			);
		};

		$scope.loadUserHome = function(aUserName, aPassword)
		{
			console.log('loadUserHome');

			$scope.userName = aUserName;

			$scope.password = aPassword;
			
			getUserDetailsFactory().then
			(
				function(session)
				{
					console.log('getUserDetailsFactory onSuccess');

					$timeout(
						function() {
							$location.path('/userHome');

							console.log($location.path());
						}
					);
				},
				function(error)
				{
					console.log('getUserDetailsFactory onFailure');
				}
			);
		};

		$scope.isCustomResponse = function(response)
		{
			console.log('isCustomResponse', response);
			
			if (!response || !response.responseJSON	|| response.responseText === null) {
				return false;
			}

			if (typeof(response.responseJSON.authRequired) != 'undefined'){
				$scope.errorLoginMsg = response.responseJSON.errorMessage;
				
				return true;
			} else {
				return false;
			}
		};
	
		$scope.submitLogin = function()
		{
			console.log('submit login');
			
			console.log('userName: ' + $scope.userName);
			
			console.log('password: ' + $scope.password);

			var options = {
		    	parameters:[$scope.userName, $scope.password],	
		    	adapter: 'ECOSustainabilityEffortsSQLAdapter',
		    	procedure: 'submitAuthentication'
		    };
			
			this.sampleAppRealmChallengeHandler.submitAdapterAuthentication(options,{});
		};

		$scope.handleChallenge = function(response)
		{
			console.log('Handle Challenge', response);
			
			var authRequired = response.responseJSON.authRequired;
			
			if (authRequired == true)
			{
				console.log('Authentication Required');
				
				if ($location.path() == '/') {
					console.log('User already on login screen!');
					
					console.log('userName: ' + $scope.userName);
					
					console.log('password: ' + $scope.password);
					
					$scope.submitLogin($scope.userName, $scope.password);					
				} else {
					console.log('User NOT on login screen!');

					console.log($location.path());

					$timeout(
						function() {
							$location.path('/');
	
							console.log($location.path());
						}
					);
				}
			} 
			else if (authRequired == false)
			{
				console.log('Authentication Not Required');
				
				$timeout(
					function() {
						$location.path('/userHome');

						console.log($location.path());
					}
				);

				return false;
			}
		};
		
		$scope.submitLogout = function()
		{
			console.log('submit logout');
			
			WL.Client.logout
			(
				'ECOSustainabilityEffortsAuthRealm', 
				{
					onSuccess:
						function()
						{
							console.log($location.path());
							
							$timeout(
								function() {
									$location.path('/');

									console.log($location.path());
								}
							);
						}
				}
			)			
		}
		
		$scope.sampleAppRealmChallengeHandler = WL.Client.createChallengeHandler('ECOSustainabilityEffortsSQLAdapter-securityTest');
		$scope.sampleAppRealmChallengeHandler.isCustomResponse = $scope.isCustomResponse;
		$scope.sampleAppRealmChallengeHandler.handleChallenge = $scope.handleChallenge;
	}		
		
);

