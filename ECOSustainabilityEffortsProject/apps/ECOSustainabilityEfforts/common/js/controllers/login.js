app.controller(
	'loginController',
	function($scope, $location, $timeout)
	{
		console.log('loginController');
		
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
	
		$scope.handleChallenge = function(response)
		{
			console.log('Handle Challenge', response);
			
			var authRequired = response.responseJSON.authRequired;
			
			if (authRequired == true)
			{
				console.log('Authentication Required');
				
				console.log($location.path());
				
				$timeout(
					function() {
						$location.path('/login');

						console.log($location.path());
					}
				);
			} 
			else if (authRequired == false)
			{
				console.log('Authentication Not Required');
				
				console.log($location.path());
				
				$timeout(
					function() {
						$location.path('/userHome');

						console.log($location.path());
					}
				);

				return false;
			}
		};
		
		$scope.submitLogin = function(userName, password)
		{
			console.log('submit login');
			
			console.log('userName: ' + userName);
			
			console.log('password: ' + password);

			var options = {
		    	parameters:[userName, password],	
		    	adapter: 'SingleStepAuthAdapter',
		    	procedure: 'submitAuthentication'
		    };
			
			this.sampleAppRealmChallengeHandler.submitAdapterAuthentication(options,{});
		};

		$scope.submitLogout = function()
		{
			console.log('submit logout');
			
			WL.Client.logout
			(
				'SingleStepAuthRealm', 
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
		
		$scope.sampleAppRealmChallengeHandler = WL.Client.createChallengeHandler('SingleStepAuthAdapter-securityTest');
		$scope.sampleAppRealmChallengeHandler.isCustomResponse = $scope.isCustomResponse;
		$scope.sampleAppRealmChallengeHandler.handleChallenge = $scope.handleChallenge;
		
		$scope.keyPress = function event($event)
		{
			if($event.which == 13)
			{
				console.log('Key Pressed', $event);

				$scope.submitLogin();
			}
		};
	}
);