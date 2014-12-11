app.controller(
	'viewContestsController',
	function($rootScope, $scope, $location, $timeout, getContestsFactory, DTOptionsBuilder){
		console.log('viewContestsController');
		
		$scope.init = function() {
			$scope.dtOptions = DTOptionsBuilder
								.newOptions()
								.withOption('responsive', true)
								.withBootstrap();
			
			console.log('call getContestsFactory');
			
			getContestsFactory().then (
				function(session) {
					console.log('getContestsFactory onSuccess');
					
					console.log(session);
					
					$scope.contests = session.invocationResult.resultSet;
					
					for(var i = 0; i< $scope.contests.length; i++){
						if($scope.contests[i].active)
							$scope.contests[i].active = 'Active';
						else $scope.contests[i].active = 'Finished';
						
						if($scope.contests[i].boundaryTypeID == 2)
							$scope.contests[i].boundaryName = 'Location';
						else $scope.contests[i].boundaryName = 'N/A';
					}
					
					console.log($scope.contests);
				},
				function(error) {
					console.log('getContestsFactory onFailure');
				}
			);
		}
		
		$scope.init();
		
		$scope.clickContest = function(contest) {
			console.log('clickContest');

			console.log(contest);
			
			$scope.selectedContest = contest;

			$scope.selectedContestName = contest.contestName;
		}
		
		$scope.requestContestActivity = function() {
			console.log('requestContestActivity');
			
			console.log($location.path());
			
			if($scope.selectedContest){
				console.log($scope.selectedContest);
				
				$rootScope.contestsActivity_contest = $scope.selectedContest;

				$timeout(
					function() {
						$location.path('/viewContestActivity');
	
						console.log($location.path());
					}
				);
			}else {
				$scope.errorMessages = 'Please select a contest.';
				
				$timeout(
					function() {
				        $scope.successMessages = null;
				        
				        $scope.errorMessages = null;
					}, 
					5000
				);
				
			}
				
		}
	}	
	
	
);


