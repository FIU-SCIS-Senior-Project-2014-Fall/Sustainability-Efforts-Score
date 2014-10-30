
/* JavaScript content from js/controllers/updateGroupProfile.js in folder common */

app.controller(
	'updateGroupProfileController',
	function($scope, getGroupProfileFactory, updateGroupProfileFactory, globalVariablesFactory){
		console.log('updateGroupProfileController');
			
		$scope.init = function(){
			console.log('getting user profile');
			
			getGroupProfileFactory().then(
				function(session){
					$scope.group = session.invocationResult.resultSet[0];
					console.log($scope.group.zipcode);
				},
				function(error){
					console.log('Error');
					
					$scope.errorMessages = 'Could Not Load Session';
				}
			);
		};
		
		$scope.init();
		
		$scope.updateGroupProfile = function(){
			console.log('saving group profile');
			
			//validate address!!!

			console.log($scope.group);
			console.log($scope.group.zipcode);
			
			if($scope.group.address1 == undefined)
				$scope.group.address1 = null;
			if($scope.group.address2 == undefined)
				$scope.group.address2 = null;
			if($scope.group.city == undefined)
				$scope.group.city = null;
			if($scope.group.stateID == undefined)
				$scope.group.stateID = null;
			if($scope.group.countryID == undefined)
				$scope.group.countryID = null;
			if($scope.group.zipcode == undefined)
				$scope.group.zipcode = null;
			if($scope.group.geoTag == undefined)
				$scope.group.geoTag = 0;
			else $scope.group.geoTag = 1;
			if($scope.group.radius == undefined)
				$scope.group.radius = null;
			

			updateGroupProfileFactory($scope.group.groupID, $scope.group.groupName, $scope.group.userID, $scope.group.email, 
									$scope.group.address1, $scope.group.address2, $scope.group.city, 
									$scope.group.stateID, $scope.group.countryID, $scope.group.zipcode, 
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
	}	
);


