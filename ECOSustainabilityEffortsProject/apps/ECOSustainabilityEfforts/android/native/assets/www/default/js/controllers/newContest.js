
/* JavaScript content from js/controllers/newContest.js in folder common */

app.controller(
		'newContestController',
		function($scope, $timeout, createNewContestFactory, getCreateContestGroupsFactory, getGroupsFactory, getMaterialsFactory, getBoundariesFactory, getContestTypeFactory, getContestEndsFactory){
	      console.log('newContestController');

		  $scope.init = function() {
			    $scope.dateFrom = new Date();
			    $scope.dateTo = new Date();
			    $scope.dateTo.setDate($scope.dateFrom.getDate() + 1);

				$scope.minDateFrom = $scope.minDateFrom ? null : new Date();
				var minTo = new Date();
				minTo.setDate(minTo.getDate() + 1);
				$scope.minDateTo = $scope.minDateTo ? null : minTo;
				
			    $scope.dateOptions = {
				    formatYear: 'yyyy',
				    startingDay: 1
				};

			    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
				$scope.format = $scope.formats[3];
				
				getCreateContestGroupsFactory().then(
						
					function(session){
						console.log('loading contest groups');
						$scope.contestGroups = session.invocationResult.resultSet;
						console.log($scope.contestGroups);
						console.log('contest groups loaded');
					},
					function(error){
						$scope.errorMessages = 'could not load contest groups';
					}
				
				);
				
				getGroupsFactory().then(
						
					function(session){
						console.log('loading all groups');
						$scope.availableGroups = session.invocationResult.resultSet;
						console.log('all groups loaded');
						$scope.selectedContestGroups = [];
					},
					function(error){
						$scope.errorMessages = 'could not load all groups';
					}
				
				);
				
				getMaterialsFactory().then(
						function(session){
							console.log('getting materials');
							$scope.materials = session.invocationResult.resultSet;
							console.log('materials loaded');
						},
						function(error){
							$scope.errorMessages = 'could not get materials';
						}
				);
				
				getBoundariesFactory().then(
						function(session){
							console.log('getting boundaries');
							$scope.boundaries = session.invocationResult.resultSet;
							console.log('boundaries loaded');
						},
						function(error){
							$scope.errorMessages = 'could not get boundaries';
						}
				);
				getContestTypeFactory().then(
						function(session){
							console.log('getting contest type');
							$scope.contestTypes = session.invocationResult.resultSet;
							console.log('contest type loaded');
						},
						function(error){
							$scope.errorMessages = 'could not get contest type';
						}
				);
				
				getContestEndsFactory().then(
						function(session){
							console.log('getting contest ends');
							$scope.contestEnds = session.invocationResult.resultSet;
							console.log('contest ends loaded');
						},
						function(error){
							$scope.errorMessages = 'could not get contest ends';
						}
				);
			
	      };
		  $scope.init();


		  
		  $scope.openFrom = function($event) {
		    $event.preventDefault();
		    $event.stopPropagation();

		    $scope.openedFrom = true;
		  };
			  
		  $scope.openTo = function($event) {
			  console.log('clicked');
		    $event.preventDefault();
		    $event.stopPropagation();

		    $scope.openedTo = true;
		  };
		  
		  $scope.updateListContestGroups = function(selGroup){
			console.log('updating list groups');
			
			getGroupsFactory().then(	
				function(session){
					console.log('loading all groups');
					$scope.allGroups = session.invocationResult.resultSet;
					$scope.availableGroups = [];
					
					for(var i = 0; i < $scope.allGroups.length; i++ ){
						if($scope.allGroups[i].groupID != selGroup.groupID){
							$scope.availableGroups.push($scope.allGroups[i]);
						}
					}
					
					while($scope.selectedContestGroups.length){
						$scope.selectedContestGroups.pop();
						
					}
					console.log('list groups updated');
				},
				function(error){
					$scope.errorMessages = 'could not load all groups';
				}
			
			);
			  
		  };
		  $scope.addToOtherGroups = function(selected, listTo, listFrom){
				console.log('moving selected  group');
				if(selected == undefined || listTo == undefined){
					$scope.errorMessages = 'Something went wrong. Please try again.';
					$timeout(function() {
				        $scope.successMessages = null;
				        $scope.errorMessages = null;
				      }, 3000);
					return;
				}
				for(var i = 0 ; i < selected.length; i++){
					console.log(selected[i]);
					listTo.push(selected[i]);
				}
				
				for(var i = 0 ; i < listFrom.length; i++){
					for(var j = 0 ; j < selected.length; j++){
						if(selected[j].groupID == listFrom[i].groupID){
							listFrom.splice(i, 1);
						}
					}
				}
				console.log('moved selected  group');
				
				
		  };
		  
		  $scope.addAllToOtherGroups = function(all, selGroups){
				console.log('moving all  group');
				if(all == undefined || selGroups == undefined){
					$scope.errorMessages = 'Something went wrong. Please try again.';
					$timeout(function() {
				        $scope.successMessages = null;
				        $scope.errorMessages = null;
				      }, 3000);
					return;
				}
				for(var i = 0 ; i < all.length; i++){
					selGroups.push(all[i]);
				}
				while( all.length > 0){
					all.pop();
				}
				console.log('move all  group');
		  };
		  
		  $scope.createContest = function(){

			  $scope.selectedContestGroups.push($scope.selectedMainGroup);
			  var start = new Date($scope.dateFrom);
			  var newDateFrom = start.getFullYear() + "-" + (start.getMonth()+1) + "-" + start.getDate() + " " + start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds();
			  var end = new Date($scope.dateTo);
			  var newDateTo = end.getFullYear() + "-" + (end.getMonth()+1) + "-" + end.getDate() + " " + end.getHours() + ":" + end.getMinutes() + ":" + end.getSeconds();
			    
			  if($scope.selectedContestGroups.length < 1 || $scope.contestName == undefined || $scope.prize == undefined || $scope.contestType == undefined ||  $scope.threshold == undefined || 
					  $scope.ends == undefined || $scope.material == undefined || $scope.boundaryType == undefined || $scope.dateFrom == undefined || 
					  $scope.dateTo == undefined){
				  $scope.errorMessages = "Please select an option for every field.";
					$timeout(function() {
				        $scope.successMessages = null;
				        $scope.errorMessages = null;
				      }, 3000);
					return;
			  }
			    	
			  createNewContestFactory($scope.contestName, $scope.prize, $scope.selectedContestGroups, $scope.contestType.contestTypeID, $scope.threshold, 
					  $scope.ends.contestEndsID, $scope.material.materialID, $scope.boundaryType.boundaryID, newDateFrom, newDateTo).then(
					function(session){
						console.log('creating contest');
						$scope.successMessages = "Contest successfully created!";
						if(session.result)
						console.log('contest created');
					},
					function(error){
						$scope.errorMessages = "Contest counld not be created. Please try again";
					}
				);
			  
				$timeout(function() {
			        $scope.successMessages = null;
			        $scope.errorMessages = null;
			      }, 3000);
		  };
		
	}	
);

         