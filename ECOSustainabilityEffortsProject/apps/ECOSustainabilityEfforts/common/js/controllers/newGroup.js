

app.controller(
	'newGroupController',
	function($scope, $timeout, getUserDetailsFactory, createNewGroupFactory, globalVariablesFactory, getCountriesFactory, getStatesFactory, $timeout){
		console.log('newGroupController');
			
		$scope.init = function(){
			console.log('getting user profile');
			
			getUserDetailsFactory().then(
				function(session){					
					$scope.userSession = session.invocationResult.resultSet[0];						
				},
				function(error){
					console.log('Error');					
					$scope.errorMessages = 'There was a problem loading the group information. Please try again';
				}
			);

			getCountriesFactory().then(
					
				function(session){
					console.log('loading countries');
					$scope.countries = session.invocationResult.resultSet;
					console.log($scope.countries);
					console.log('countries loaded');
				},
				function(error){
					$scope.errorMessages = 'could not load countries';
				}
			
			);
		};
		
		$scope.init();
		
		$scope.createNewGroupProfile = function(){
			console.log('saving group profile');
			
			//validate address!!!

			console.log($scope.group);
			console.log($scope.userSession);
			
			if($scope.group.address1 == undefined)
				$scope.group.address1 = null;
			if($scope.group.address2 == undefined)
				$scope.group.address2 = null;
			if($scope.group.city == undefined)
				$scope.group.city = null;
			if($scope.state == undefined)
				$scope.state = null;
			if($scope.country == undefined)
				$scope.country = null;
			if($scope.group.zip == undefined)
				$scope.group.zip = null;
			if($scope.group.geoTag == undefined)
				$scope.group.geoTag = 0;
			else $scope.group.geoTag = 1;
			if($scope.group.radius == undefined)
				$scope.group.radius = null;

			createNewGroupFactory($scope.group.name, $scope.group.email, 
									$scope.group.address1, $scope.group.address2, $scope.group.city, 
									$scope.state, $scope.country, $scope.group.zip, 
									$scope.group.geoTag, $scope.group.radius).then(		
					function(session){
						$scope.errorMessages = null;
						$scope.successMessages = 'Group has been created!';
					},
					function(error){
						$scope.successMessages = null;	
						$scope.errorMessages = 'There was a problem creating the group. Please try again.';
					}
			);
			
			$timeout(function() {
		        $scope.successMessages = null;
		        $scope.errorMessages = null;
		      }, 3000);

		}
		
		$scope.getStates = function(country){
			getStatesFactory(country).then(
				function(session){
					console.log('loading states');
					$scope.states = session.invocationResult.resultSet;
					console.log($scope.states);
					console.log('states loaded');
				},
				function(error){
					$scope.errorMessages = 'could not load states';
				}
		
			);

		}
	}	
);

