app.controller(
	'updateGroupProfileController',
	function($rootScope, $scope, $timeout, getGroupProfileFactory, getGmapLatLngFactory, getCountriesFactory, getStatesFactory, updateGroupProfileFactory){
		console.log('updateGroupProfileController');

		$scope.getCountries = function() {
			console.log('getCountries');
			
			console.log('call getCountriesFactory');

			getCountriesFactory().then(
				function(session){
					console.log('getCountriesFactory onSuccess');
					
					$scope.countries = session.invocationResult.resultSet;
					
					console.log($scope.countries);

					if ($scope.group.countryID) {
						console.log('found $scope.group.countryID');
						
						console.log($scope.countries.length);
						
						for (var i = 0; i < $scope.countries.length; i++) {
							if($scope.countries[i].countries_id == $scope.group.countryID){
								$scope.country = $scope.countries[i];
								
								console.log($scope.country);
	
								$scope.getStates($scope.group.countryID);
								
								break;
							}
						}
					}
				},
				function(error){
					console.log('getCountriesFactory onFailure');

					$scope.errorMessages = 'could not load countries';

					$timeout(
						function() {
							$scope.successMessages = null;
							
					        $scope.errorMessages = null;
						}, 
						5000
					);
				}
			
			);
		}

		$scope.getStates = function(countryID){
			console.log('getStates');
			
			console.log('call getStatesFactory');
			
			getStatesFactory(countryID).then(
				function(session){
					console.log('getStatesFactory onSuccess');

					$scope.states = session.invocationResult.resultSet;

					console.log($scope.states);

					if ($scope.group.stateID) {
						console.log('found $scope.group.stateID');
						
						console.log($scope.states.length);
						
						for (var i = 0; i < $scope.states.length; i++) {
							if($scope.states[i].state_id == $scope.group.stateID){
								$scope.state = $scope.states[i];
	
								console.log($scope.state);
								
								break;
							}
						}
					}
				},
				function(error){
					console.log('getStatesFactory onFailure');
					
					$scope.errorMessages = 'There was a problem loading states.';

					clearMessages();
				}
			);
		}
		
		$scope.init = function(){
			console.log('init');
			
			console.log('call getGroupProfileFactory');
			
			console.log($rootScope.updateGroupProfile_group.groupID);
			
			getGroupProfileFactory($rootScope.updateGroupProfile_group.groupID).then(
				function(session){
					console.log('getGroupProfileFactory onSuccess');

					$scope.group = session.invocationResult.resultSet[0];
					
					console.log($scope.group);

					$scope.getCountries();
				},
				function(error){
					console.log('getGroupProfileFactory onFailure');
					
					$scope.errorMessages = 'Could Not Load Session.';
				}
			);
		};
		
		$scope.init();
		
		clearMessages = function() {
			$timeout(
				function() {
			        $scope.successMessages = null;
					
			        $scope.errorMessages = null;				}, 
				5000
			);
		}

		$scope.updateGroupProfile = function(){
			console.log('updateGroupProfile');
			
			console.log($scope.group);
			
			// TODO: validate address!!!
			var address = '';
			
			if ($scope.group.address1)
				address = address + $scope.group.address1 + ' ';

			if ($scope.group.address2)
				address = address + $scope.group.address2;
			
			if ($scope.group.city)
				address = address + ', ' + $scope.group.city;
			
			if ($scope.group.state)
				address = address + ', ' + $scope.group.state.state_name;
				
			if ($scope.group.zipCode)
				address = address + ', '  + $scope.group.zipCode;

			console.log(address);
				
			console.log('call getGmapLatLngFactory');
			
			getGmapLatLngFactory(address).then(
				function(session){
					console.log('getGmapLatLngFactory onSucess');
					
					$scope.location = session.invocationResult;
					
					console.log($scope.location);

					if(!$scope.group.address1)
						$scope.group.address1 = null;
					
					if(!$scope.group.address2)
						$scope.group.address2 = null;
					
					if(!$scope.group.city)
						$scope.group.city = null;
					
					if(!$scope.state)
						$scope.state = null;
					
					if(!$scope.country)
						$scope.country = null;
					
					if(!$scope.group.zipCode)
						$scope.group.zipCode = null;
					
					if(!$scope.group.geoTag)
						$scope.group.geoTag = 0;
					else 
						$scope.group.geoTag = 1;
					
					if(!$scope.group.radius)
						$scope.group.radius = null;
					
					if(!$scope.location.lat)
						$scope.location.lat = null;

					if(!$scope.location.lng)
						$scope.location.lng = null;

					updateGroupProfileFactory(
						$scope.group.groupID, $scope.group.groupName, $scope.group.email, 
						$scope.group.address1, $scope.group.address2, $scope.group.city, 
						$scope.state.state_id, $scope.country.countries_id, $scope.group.zipCode, $scope.group.geoTag, 
						$scope.group.geoTagRadius, $scope.location.lat, $scope.location.lng
					).then(		
						function(session){
							console.log('updateGroupProfileFactory onSucess');
							
							// TODO: since group name is unique, db will throw error if dupe group name is created!!!! CHECK!!!!
							
							$scope.successMessages = 'Group profile Updated!';
							
							$scope.errorMessages = null;

							clearMessages();
						},
						function(error){
							console.log('updateGroupProfileFactory onFailure');
							
							$scope.successMessages = null;
							
							$scope.errorMessages = 'There was a problem updating the group profile.';

							clearMessages();				
						}
					);
				
				},
				function(error){
					console.log('getGmapLatLngFactory onFailure');
					
					$scope.errorMessages = 'There was a problem updating the profile.';

					clearMessages();				
				}
			);
		}
	}	
);



