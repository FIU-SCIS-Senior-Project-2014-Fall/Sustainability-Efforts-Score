app.controller(
	'userHomeController',
	function($scope, getSessionData)
	{
		alert("userHomeController");
			
		$scope.init = function()
		{
			alert("init");
			
			getSessionData().then
			(
				function(session)
				{
					alert("Got Session ",session);
					
					$scope.session = session;
					
					$scope.errorMsg = "";
				},
				function(error)
				{
					alert("Error");
					
					$scope.errorMsg = "Could Not Load Session";
				}
			);
		}

		$scope.init();
	}			
);