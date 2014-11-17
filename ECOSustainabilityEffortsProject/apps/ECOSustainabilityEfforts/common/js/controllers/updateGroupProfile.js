app.controller(
	'updateGroupProfileController',
	function($scope, getGroupProfileFactory, updateGroupProfileFactory, globalVariablesFactory, getCountriesFactory, getStatesFactory, $timeout){
		console.log('updateGroupProfileController');
			
		$scope.init = function(){
			console.log('getting user profile');
			
			getGroupProfileFactory().then(
				function(session){
					$scope.group = session.invocationResult.resultSet[0];
					$scope.country = $scope.group.countryID;
					$scope.state = $scope.group.stateID;
					console.log($scope.group);
				},
				function(error){
					console.log('Error');
					
					$scope.errorMessages = 'Could Not Load Session';
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
		
		$scope.updateGroupProfile = function(){
			console.log('saving group profile');
			
			//validate address!!!

			console.log($scope.group);
			console.log($scope.country);
			
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
			if($scope.group.zipcode == undefined)
				$scope.group.zipcode = null;
			if($scope.group.geoTag == undefined)
				$scope.group.geoTag = 0;
			else $scope.group.geoTag = 1;
			if($scope.group.radius == undefined)
				$scope.group.radius = null;

			updateGroupProfileFactory($scope.group.groupID, $scope.group.groupName, $scope.group.email, 
									$scope.group.address1, $scope.group.address2, $scope.group.city, 
									$scope.state, $scope.country, $scope.group.zipcode, 
									$scope.group.geoTag, $scope.group.geoTagRadius).then(		
				
				function(session){
					//since group name is unique, db will throw error if dupe group name is created!!!! CHECK!!!!
					$scope.successMessages = 'Group profile Updated!';
					$scope.errorMessages = null;
				},
				function(error){
					console.log('Error');	
					$scope.successMessages = null;
					$scope.errorMessages = 'There was a problem updating the profile. Please try again.';
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



