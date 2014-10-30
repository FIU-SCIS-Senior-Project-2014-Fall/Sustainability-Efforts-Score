
/* JavaScript content from js/controllers/home.js in folder common */
app.controller(
	'homeController',
	function($scope, $location, $timeout, getUserDetailsFactory)
	{
		console.log('homeController', $scope);

		$scope.loadUserHome = function()
		{
			console.log('loadUserHome');

			getUserDetailsFactory().then
			(
				function(session)
				{
					console.log('getUserDetailsFactory onSuccess');
					
					$scope.session = session;
					
					console.log($location.path());

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
	}		
);

