app.controller(
	'homeController',
	function($scope, getSessionData)
	{
		alert("homeController", $scope);

		$scope.loadUserHome = function()
		{
			alert("loadUserHome");

			$scope.errorMsg = "";

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
		};
	}		
);

