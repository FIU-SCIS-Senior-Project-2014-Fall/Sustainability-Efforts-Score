app.controller(
	'userHomeController',
	function($scope, getSessionDataFactory)
	{
		console.log('userHomeController');
			
		$scope.init = function()
		{
			console.log('init');
			
			getSessionDataFactory().then
			(
				function(session)
				{
					console.log('Got Session',session);
					
					$scope.session = session;
					
					$scope.errorMsg = '';
					
					
				},
				function(error)
				{
					alert.log('Error');
					
					$scope.errorMsg = 'Could Not Load Session';
				}
			);
		}

		$scope.init();
	}			
);