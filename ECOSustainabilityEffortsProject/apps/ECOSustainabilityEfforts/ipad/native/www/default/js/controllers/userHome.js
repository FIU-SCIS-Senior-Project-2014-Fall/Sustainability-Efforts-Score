
/* JavaScript content from js/controllers/userHome.js in folder common */
app.controller(
	'userHomeController',
	function($scope, getUserDetailsFactory)
	{
		console.log('userHomeController');
			
		$scope.init = function()
		{
			console.log('init');
			
			getUserDetailsFactory().then
			(
				function(session)
				{
					console.log('getUserDetailsFactory onSuccess');
					
					$scope.user = session.invocationResult.resultSet;

					console.log($scope.user);
				},
				function(error)
				{
					console.log('getUserDetailsFactory onFailure');
				}
			);
		}

		$scope.init();
	}			
);