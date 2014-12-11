app.controller(
	'newGroupController',
	function($scope, $timeout, getUserDetailsFactory, createNewGroupFactory, getGmapLatLngFactory, globalVariablesFactory, getCountriesFactory, getStatesFactory, $timeout){
		console.log('newGroupController');
			
		$scope.init = function(){
			console.log('init');

			console.log('call getCountriesFactory');
			
			getCountriesFactory().then(
				function(session){
					console.log('getCountriesFactory onSuccess');
					
					$scope.countries = session.invocationResult.resultSet;
					
					console.log($scope.countries);
				},
				function(error){
					console.log('getCountriesFactory onFailure');
					
					$scope.errorMessages = 'Could not load countries.';
					
					clearMessages();
				}
			
			);
		};
		
		$scope.init();

		clearMessages = function() {
			$timeout(
				function() {
					$scope.group.name = '';
					$scope.group.email = '';
					$scope.group.address1 = '';
					$scope.group.address2 = '';
					$scope.group.city ='';
					$scope.group.zipCode ='';
					$scope.group.geoTag=0;
					$scope.group.radius='';
					$scope.group.lat=null;
					$scope.country=null;
					$scope.state=null;
	
					$scope.groupNameFieldForm.$setPristine();
					$scope.groupEmailFieldForm.$setPristine();
					$scope.geoTagFieldForm.$setPristine();
					
					$scope.init();
					$scope.getStates(-1);
					
			        $scope.successMessages = null;
					
			        $scope.errorMessages = null;
				}, 
				5000
			);
		}
		
		$scope.createNewGroupProfile = function () {
			console.log('createNewGroupProfile');
			
			console.log('call createNewGroupProfileFactory');

			createNewGroupFactory(
					$scope.group.name, $scope.group.email, 
					$scope.group.address1, $scope.group.address2, $scope.group.city, 
					$scope.state.state_id, $scope.country.countries_id, $scope.group.zipCode, 
					$scope.group.geoTag, $scope.group.radius, $scope.group.lat, $scope.group.lng
			).then(		
				function(session){
					console.log('createNewGroupFactory onSuccess');
					
					$scope.errorMessages = null;
					
					$scope.successMessages = 'Group has been created!';

					clearMessages();
				},
				function(error){
					console.log('createNewGroupFactory onFailure');
					
					$scope.successMessages = null;
					
					$scope.errorMessages = 'There was a problem creating the group. Please try again.';
					
					clearMessages();
				}
			);

		}
		
		$scope.submitNewGroupProfile = function(){
			console.log('submitNewGroupProfile');
			
			console.log($scope.group);

			if(!$scope.group.address1)
				$scope.group.address1 = null;
			
			if(!$scope.group.address2)
				$scope.group.address2 = null;
			
			if(!$scope.group.city)
				$scope.group.city = null;
			
			if(!$scope.state) {
				$scope.state = {
					state_id: null
				};		
			}

			if(!$scope.country) {
				$scope.country = {
					countries_id: null	
				};
			}
			
			if(!$scope.group.zipCode)
				$scope.group.zipCode = null;
			
			if(!$scope.group.geoTag)
				$scope.group.geoTag = 0;
			else 
				$scope.group.geoTag = 1;
			
			if(!$scope.group.radius)
				$scope.group.radius = null;
			
			
			if ($scope.group.geoTag) {
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
						$scope.group.lat = $scope.location.lat;
						$scope.group.lng = $scope.location.lng;
						
						$scope.createNewGroupProfile();
					},
					function(error){
						console.log('getGmapLatLngFactory onFailure');
						
						$scope.errorMessages = 'There was a problem updating the profile.';
	
						clearMessages();				
					}
				);
			} else {
				$scope.createNewGroupProfile();
			}
		}
		
		$scope.getStates = function(country){
			console.log('getStates');
			
			console.log('call getStatesFactory');
			
			getStatesFactory(country).then(
				function(session){
					console.log('getStatesFactory onSuccess');
					
					$scope.states = session.invocationResult.resultSet;

					console.log($scope.states);
				},
				function(error){
					console.log('getStatesFactory onFailure');
					
					$scope.errorMessages = 'There was a problem loading states.';
					
					clearMessages();
				}
		
			);

		}
	}	
);

