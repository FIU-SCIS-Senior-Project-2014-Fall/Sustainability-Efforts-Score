app.controller(
	'viewContestActivityController',
	function($rootScope, $scope, getContestActivityFactory, getContestWinnerFactory, DTOptionsBuilder){
		console.log('viewContestActivityController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder
								.newOptions()
								.withOption('responsive', true)
								.withBootstrap();
			
			console.log('call getContestActivityFactory');
			
			console.log($rootScope.contestsActivity_contest);
			
			getContestActivityFactory($rootScope.contestsActivity_contest.contestID).then (
				function(session) {
					console.log('getContestActivityFactory onSuccess');
					
					console.log(session);
					
					$scope.contestActivity = session.invocationResult.resultSet;
					
					console.log('$rootScope.contestsActivity_contest.active ' + $rootScope.contestsActivity_contest.active);
					if($rootScope.contestsActivity_contest.active == 'Active') $scope.winner = '';
					else{
						getContestWinnerFactory($rootScope.contestsActivity_contest.contestID).then (
								function(session) {
									console.log('getContestWinnerFactory onSuccess');
									
									console.log(session);
									
									$scope.contestWinner = session.invocationResult.resultSet[0];
									console.log($scope.contestWinner);
									
									if($scope.contestWinner) $scope.winner = ': ' + $scope.contestWinner.firstName + ' ' + $scope.contestWinner.lastName;
									
									console.log($scope.contestWinner);
								},
								function(error) {
									console.log('getContestWinnerFactory onFailure');
								}
							);
						console.log($scope.winner);
					}
					
					console.log($scope.contestActivity);
				},
				function(error) {
					console.log('getContestActivityFactory onFailure');
				}
			);
		}
		
		$scope.init();
		
	}	
);
