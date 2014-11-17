app.controller(
	'loginController',
	function($scope, $location, $timeout, getUserDetailsFactory)
	{
		console.log('loginController');
		
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