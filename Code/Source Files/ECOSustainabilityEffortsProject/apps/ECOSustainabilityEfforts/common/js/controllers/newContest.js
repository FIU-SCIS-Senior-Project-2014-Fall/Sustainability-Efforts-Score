
app.controller(
		'newContestController',
		function($scope, $timeout, createNewContestFactory, getCreateContestGroupsFactory, getGroupsFactory, getMaterialsFactory, getBoundariesFactory, getContestEndsFactory){
	      console.log('newContestController');

		  $scope.init = function() {
			    $scope.dateFrom = new Date();
			    $scope.dateFrom.setDate($scope.dateFrom.getDate() + 1);
			    $scope.dateTo = new Date();
			    $scope.dateTo.setDate($scope.dateFrom.getDate() + 1);
			    
			    var minFrom = new Date();
			    minFrom.setDate(minFrom.getDate() + 1);
				$scope.minDateFrom = $scope.minDateFrom ? null : minFrom;
				var minTo = new Date();
				minTo.setDate(minTo.getDate() + 2);
				$scope.minDateTo = $scope.minDateTo ? null : minTo;
				
			    $scope.dateOptions = {
				    formatYear: 'yyyy',
				    startingDay: 1
				};

			    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
				$scope.format = $scope.formats[3];
				
				$scope.contestEnds = 1;
				
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
							$scope.materials = session.invocationResult.resultSet;
						},
						function(error){
							$scope.errorMessages = 'could not get materials';
						}
				);
				
				getBoundariesFactory().then(
						function(session){
							$scope.boundaries = session.invocationResult.resultSet;
						},
						function(error){
							$scope.errorMessages = 'could not get boundaries';
						}
				);
				
				/*getContestEndsFactory().then(
						function(session){
							$scope.contestEnds = session.invocationResult.resultSet;
						},
						function(error){
							$scope.errorMessages = 'could not get contest ends';
						}
				);*/
			
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
				if($scope.selectedAvailableGroup && $scope.selectedMainGroup && $scope.selectedAvailableGroup[0].groupID == $scope.selectedMainGroup.groupID){
					return;
				}
				if(selected && listTo){
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
					$scope.selectedAvailableGroup=null;
					$scope.selectedGroups=null;
				
				}
		  };
		  
		  $scope.addAllToOtherGroups = function(all, selGroups){
				console.log('moving all  group');
				if(all && selGroups){
					for(var i = 0 ; i < all.length; i++){
						selGroups.push(all[i]);
					}
					while( all.length > 0){
						all.pop();
					}
					console.log('move all  group');
				}
		  };
		  
		  $scope.createContest = function(){
			  if($scope.selectedMainGroup){
				  if(!$scope.contestName || !$scope.threshold || !$scope.material || !$scope.dateFrom || 
						  !$scope.dateTo){
					  $scope.errorMessages = "Please select an option for every field.";
						$timeout(function() {
					        $scope.successMessages = null;
					        $scope.errorMessages = null;
					      }, 3000);
						return;
				  }
				  $scope.selectedContestGroups.push($scope.selectedMainGroup);
				  var start = new Date($scope.dateFrom);
				  var newDateFrom = start.getFullYear() + "-" + (start.getMonth()+1) + "-" + start.getDate() + " " + start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds();
				  var end = new Date($scope.dateTo);
				  var newDateTo = end.getFullYear() + "-" + (end.getMonth()+1) + "-" + end.getDate() + " " + end.getHours() + ":" + end.getMinutes() + ":" + end.getSeconds();
				    	
				  if(!$scope.boundaryType){ 
					  boundary = null;
				  }else {
					  boundary = $scope.boundaryType.boundaryID;
					 
				  }
				  
				  createNewContestFactory($scope.contestName, $scope.prize, $scope.selectedContestGroups, $scope.threshold, 
						  $scope.contestEnds, $scope.material.materialID, boundary, $scope.radius, newDateFrom, newDateTo).then(
						function(session){
							console.log('creating contest');
							console.log(session.invocationResult);
							if(session.invocationResult.error == "true"){
								$scope.errorMessages = "Could not create contest. Null values not allowed.";
								  $timeout(function() {
								        $scope.successMessages = null;
								        $scope.errorMessages = null;
								      }, 3000);
								  return;
							}
							$scope.successMessages = "Contest successfully created!";
							console.log('contest created');
							  $scope.selectedAvailableGroup=null;
							  $scope.selectedGroups=[];
							  $scope.selectedMainGroup = null;
							  $scope.selectedContestGroups=[];
							  $scope.radius = 1;
							  $scope.init();
							  $scope.contestName = '';
							  $scope.prize = '';
							  $scope.threshold = 1;
							  $scope.contestNameForm.$setPristine();
							  $scope.mainGroupForm.$setPristine();
							  $scope.materialForm.$setPristine();
							  //$scope.dateFromForm.$setPristine();
							  //$scope.dateToForm.$setPristine();
							  //$scope.contestEndsForm.$setPristine();
							  $scope.thresholdForm.$setPristine();
							  $scope.boundaryTypeForm.$setPristine();
							  
						},
						function(error){
							$scope.errorMessages = "Contest could not be created. Please try again";
						}
					);

			  }else{
				  $scope.errorMessages="Please select a main group.";
			  }
			  
			  $timeout(function() {
		        $scope.successMessages = null;
		        $scope.errorMessages = null;
		      }, 3000);
		  }
		
	}	
);

         