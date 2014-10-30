

app.controller(
	'editProfileController',
	function($scope, getUserDetailsFactory, updateUserProfileFactory){
		console.log('editProfileController');
			
		$scope.init = function(){
			console.log('getting user profile');
			
			getUserDetailsFactory().then(
				function(session){
					
					$scope.userSession = session.invocationResult.resultSet[0];
						
				},
				function(error){
					$scope.errorMessages = 'There was a problem with your profile. Please try again.';
				}
			);
		};
		
		$scope.init();
		
		$scope.updateUserProfile = function(){
			
			console.log('updating user profile');
			
			updateUserProfileFactory($scope.userSession.userName, $scope.userSession.firstName, $scope.userSession.lastName, $scope.userSession.email, $scope.userSession.password).then
			(
				function(session){
					$scope.successMessages = 'Profile has been updated!';
					$scope.errorMessages = null;
				},
				function(error){
					$scope.successMessages = null;	
					$scope.errorMessages = 'There was a problem updating your profile. Please try again.';
				}
			);
			
			$timeout(function() {
		        $scope.successMessages = null;
		        $scope.errorMessages = null;
		      }, 3000);
			
		}
	}	
);

