
app.controller( 
	'userScoreboardController', 
	function( $scope, $rootScope, $location, getUsersOverallScoreboardFactory, userScoreboardGetSelectedGroupFactory, userScoreboardGetSelectedUserFactory ) {
		$rootScope.initUserScoreboard = function(){
			
			$rootScope.userBoarddQty = 10;

			$rootScope.userScoreboard = null;
			getUsersOverallScoreboardFactory().then(
		      function(userScoreboardSession){
		        console.log('getUserOverallScoreboard onSuccess');
		        $rootScope.userScoreboard = userScoreboardSession.invocationResult.resultSet;
		        console.log($rootScope.userScoreboard);
		        
		      },
		      function(error){
		        console.log('getUserOverallScoreboard onFailure');
		      } 
		    );
		}
		$rootScope.initUserScoreboard();

		$scope.onSelect = function (item, model, label) {
		    $scope.$item = item;
		    $scope.$model = model;
		    $scope.$label = label;
		    $rootScope.userScoreboard = []; 
		    $rootScope.userScoreboard.push(item);
		};
		
		$rootScope.userScoreboardRefresh = function( ){
			if($rootScope.mainItemFiltered.item.type){
				if($rootScope.mainItemFiltered.item.type == 'group'){
					$rootScope.userScoreboard =null;
					$rootScope.userScoreboardGetSelectedGroup();
				}else if($rootScope.mainItemFiltered.item.type == 'user'){
					$rootScope.userScoreboard =null;
					$rootScope.userScoreboardGetSelectedUser();
				}
			}else{
				$rootScope.userScoreboard =null;
				$rootScope.initUserScoreboard();
			}
		}
		
		
		$rootScope.userScoreboardGetSelectedGroup = function(){
			if($rootScope.mainItemFiltered.item.groupID){
				$rootScope.userScoreboard=null;
				userScoreboardGetSelectedGroupFactory($rootScope.mainItemFiltered.item.groupID).then(
				      function(session){
				        console.log('userScoreboardGetSelectedGroupFactory onSuccess');
				        $rootScope.userScoreboard = session.invocationResult.resultSet;
				        console.log($rootScope.userScoreboard);
				        
				      },
				      function(error){
				        console.log('userScoreboardGetSelectedGroupFactory onFailure');
				      } 
				    );
			}
		}
		
		$rootScope.userScoreboardGetSelectedUser = function(){
			if($rootScope.mainItemFiltered.item.userID){
				$rootScope.userScoreboard=null;
				userScoreboardGetSelectedUserFactory($rootScope.mainItemFiltered.item.userID).then(
				      function(session){
				        console.log('userScoreboardGetSelectedUser onSuccess');
				        $rootScope.userScoreboard = session.invocationResult.resultSet;
				        
				      },
				      function(error){
				        console.log('userScoreboardGetSelectedUser onFailure');
				      } 
				    );
			}
		}
			
 
});
app.controller( 
		'groupScoreboardController', 
		function( $scope, $rootScope, $location, getGroupsOverallScoreboardFactory, groupScoreboardGetSelectedGroupFactory, groupScoreboardGetSelectedUserFactory) {
			
			$rootScope.initGroupScoreboard = function(){
				$rootScope.groupBoardQty = 10;
				$rootScope.groupScoreboard = null;
				getGroupsOverallScoreboardFactory().then(
				
			      function(groupScoreboardSession){
			        console.log('getUserOverallScoreboard onSuccess');
			        $rootScope.groupScoreboard = groupScoreboardSession.invocationResult.resultSet;
			        console.log($rootScope.groupScoreboard);
			        
			      },
			      function(error){
			        console.log('getUserOverallScoreboard onFailure');
			      } 
			    );
			}
			$rootScope.initGroupScoreboard();

			$scope.onSelect = function (item, model, label) {
			    $scope.$item = item;
			    $scope.$model = model;
			    $scope.$label = label;
			    $rootScope.groupScoreboard = []; 
			    $rootScope.groupScoreboard.push(item);
			};
			
			$rootScope.groupScoreboardRefresh = function( ){
				if($rootScope.mainItemFiltered.item.type){
					if($rootScope.mainItemFiltered.item.type == 'group'){
						$rootScope.groupScoreboard = null;
						$rootScope.groupScoreboardGetSelectedGroup();
					}else if($rootScope.mainItemFiltered.item.type == 'user'){
						$rootScope.groupScoreboard =null;
						$rootScope.groupScoreboardGetSelectedUser();
					}
				}else{
					$rootScope.groupScoreboard =null;
					console.log('filtered group score board  refresh');
					$rootScope.initGroupScoreboard();
				}
			}

			$rootScope.groupScoreboardGetSelectedGroup = function(){
				if($rootScope.mainItemFiltered.item.groupID){
					$rootScope.groupScoreboard=null;
					console.log($rootScope.mainItemFiltered.item.groupID);
					groupScoreboardGetSelectedGroupFactory($rootScope.mainItemFiltered.item.groupID).then(
					      function(session){
					        console.log('groupScoreboardGetSelectedGroupFactory onSuccess');
					        $rootScope.groupScoreboard = session.invocationResult.resultSet;
					        
					      },
					      function(error){
					        console.log('groupScoreboardGetSelectedGroupFactory onFailure');
					      } 
					    );
				}
				
			}
			
			$rootScope.groupScoreboardGetSelectedUser = function(){
				if($rootScope.mainItemFiltered.item.userID){
					$rootScope.groupScoreboard=null;
					console.log($rootScope.mainItemFiltered.item.userID);
					groupScoreboardGetSelectedUserFactory($rootScope.mainItemFiltered.item.userID).then(
					      function(session){
					        console.log('groupScoreboardGetSelectedGroupFactory onSuccess');
					        $rootScope.groupScoreboard = session.invocationResult.resultSet;
					        
					      },
					      function(error){
					        console.log('groupScoreboardGetSelectedGroupFactory onFailure');
					      } 
					    );
				}
				
			}
	 
	});

app.controller( 
		'itemsBoardController', 
		function( $scope, $rootScope, $location, getRecycledItemsDashboardFactory, itemsBoardGetSelectedGroupFactory, itemsBoardGetSelectedUserFactory) {
			
			$rootScope.initItemsScoreboard = function(){
				$rootScope.itemsBoardQty = 10;
				$rootScope.itemsBoard = null;
				getRecycledItemsDashboardFactory().then(
				
			      function(session){
			        console.log('getRecycledItemsDashboard onSuccess');
			        $rootScope.itemsBoard = session.invocationResult.resultSet;
			        
			      },
			      function(error){
			        console.log('getRecycledItemsDashboard onFailure');
			      } 
			    );
			}
			$rootScope.initItemsScoreboard();
			
			$scope.onSelect = function (item, model, label) {
			    $scope.$item = item;
			    $scope.$model = model;
			    $scope.$label = label;
			    $rootScope.itemsBoard = []; 
			    $rootScope.itemsBoard.push(item);
			};
			
			$rootScope.itemsBoardRefresh = function( ){
				if($rootScope.mainItemFiltered.item.type){
					if($rootScope.mainItemFiltered.item.type == 'group'){
					    $rootScope.itemsBoard = null;
						$rootScope.itemsBoardGetSelectedGroup();
					}else if($rootScope.mainItemFiltered.item.type == 'user'){
						$rootScope.itemScoreboard =null;
						$rootScope.itemsBoardGetSelectedUser();
					}
				}else{
				    $rootScope.itemsBoard = null;
					console.log('item  board refresh');
					$rootScope.initItemsScoreboard();
				}
			}
			$rootScope.itemsBoardGetSelectedGroup = function(){
				
				if($rootScope.mainItemFiltered.item.groupID){
					$rootScope.itemsBoard=null;
					console.log($rootScope.mainItemFiltered.item.groupID);
					itemsBoardGetSelectedGroupFactory($rootScope.mainItemFiltered.item.groupID).then(
					      function(session){
					        console.log('itemsBoardGetSelectedGroupFactory onSuccess');
					        $rootScope.itemsBoard = session.invocationResult.resultSet;
					        
					      },
					      function(error){
					        console.log('itemsBoardGetSelectedGroupFactory onFailure');
					      } 
					    );
				}
				
			}
			
			$rootScope.itemsBoardGetSelectedUser = function(){
				
				if($rootScope.mainItemFiltered.item.userID){
					$rootScope.itemsBoard=null;
					console.log($rootScope.mainItemFiltered.item.userID);
					itemsBoardGetSelectedUserFactory($rootScope.mainItemFiltered.item.userID).then(
					      function(session){
					        console.log('itemsBoardGetSelectedGroupFactory onSuccess');
					        $rootScope.itemsBoard = session.invocationResult.resultSet;
					        
					      },
					      function(error){
					        console.log('itemsBoardGetSelectedGroupFactory onFailure');
					      } 
					    );
				}
				
			}
				
	 
	});



