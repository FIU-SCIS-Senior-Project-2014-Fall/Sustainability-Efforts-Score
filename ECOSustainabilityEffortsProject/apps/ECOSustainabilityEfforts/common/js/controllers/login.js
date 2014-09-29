app.controller(
	'loginController',
	function($scope, $location)
	{
		alert("loginController");
		
		$scope.isCustomResponse = function(response)
		{
			alert("isCustomResponse", response);
			
			if (!response || !response.responseJSON	|| response.responseText === null) {
				return false;
			}
			if (typeof(response.responseJSON.authRequired) !== 'undefined'){
				$scope.errorLoginMsg=response.responseJSON.errorMessage;
				return true;
			} else {
				return false;
			}
		};
	
		$scope.handleChallenge = function(response)
		{
			alert("Handle Challenge",response);
			
			var authRequired = response.responseJSON.authRequired;
			
			if (authRequired == true)
			{
				alert("Authentication Required");
				
				alert($location.path());
				
				$location.path('/login');
				
				if (!$scope.$$phase) 
				{
					$scope.$apply();
				}
			} 
			else if (authRequired == false)
			{
				alert("Authentication Not Required");
				
				$location.path('/userHome');
				
				if (!$scope.$$phase) 
				{
					$scope.$apply();
				}

				return false;
			}
		};
		
		$scope.submitLogin = function(userName, password)
		{
			alert("submit login");
			
			alert("userName: " + userName);
			
			alert("password: " + password);

			var options = {
		    	parameters:[userName, password],	
		    	adapter: 'SingleStepAuthAdapter',
		    	procedure: 'submitAuthentication'
		    };
			
			this.sampleAppRealmChallengeHandler.submitAdapterAuthentication(options,{});
		};

		$scope.submitLogout = function()
		{
			alert("submit login");
			
			WL.Client.logout
			(
				'SingleStepAuthRealm', 
				{
					onSuccess:
						function()
						{
							$location.path('/');
						
							if (!$scope.$$phase) 
							{
								$scope.$apply();
							}
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
				alert("Key Pressed", $event);

				$scope.submitLogin();
			}
		};
	}
);