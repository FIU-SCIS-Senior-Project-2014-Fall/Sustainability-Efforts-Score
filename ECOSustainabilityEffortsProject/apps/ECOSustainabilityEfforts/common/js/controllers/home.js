app.controller(
	'homeController',
	function($scope, $location, getSessionDataFactory)
	{
		console.log('homeController', $scope);

		$scope.loadUserHome = function()
		{
			console.log('loadUserHome');

			$scope.errorMsg = '';

			getSessionDataFactory().then
			(
				function(session)
				{
					console.log('Got Session', session);
					
					$scope.session = session;
					
					$scope.errorMsg = '';
					
					$location.path('/userHome');
					
					$scope.$apply();

				},
				function(error)
				{
					alert('Error');
					
					$scope.errorMsg = 'Could Not Load Session';
				}
			);
		};
	}		
);

