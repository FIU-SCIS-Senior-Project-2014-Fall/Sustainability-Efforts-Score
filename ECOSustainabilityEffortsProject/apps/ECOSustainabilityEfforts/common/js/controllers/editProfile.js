

app.controller(
	'editProfileController',
	function($scope, getSessionDataFactory){
		console.log('editProfileController');
			
		$scope.init = function(){
			console.log('getting user profile');
			
			getSessionDataFactory().then(
				function(session){
					
					$scope.userSession = session.invocationResult.resultSet[0];
						
				},
				function(error){
					console.log('Error');
					
					$scope.errorMsg = 'Could Not Load Session';
				}
			);
		};
		
		$scope.init();
		
		
		$scope.saveUserProfile = function(){
			console.log('saving user profile');
			
			var invocationData = 
			{
				adapter : "EditProfileAdapter",
				procedure: "saveUserProfile",
				parameters: [$scope.userSession.UserName, $scope.userSession.FirstName, $scope.userSession.LastName, $scope.userSession.Email, $scope.userSession.Password]
			};
			
			WL.Client.invokeProcedure(
				invocationData,{
					onSuccess : 
						$.proxy(
							function(session){
								console.log("save profile success");
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error){
								alert("save profile error");
							},
							this
						)
				}
			);
			
			alert('Profile Saved!');
		}
	}	
);

