
app.controller( 
	'statsController', 
	function( $scope, $rootScope, $location, getTotalUsersFactory, getTotalGroupsFactory, getTotalRecyclingActionsFactory, 
			getTotalRecyclingActionsSelectedGroupFactory, getTotalUsersSelectedGroupFactory,
			getTotalRecyclingActionsSelectedUserFactory, getTotalGroupsSelectedUserFactory) {
		$rootScope.initStats = function(){
			$rootScope.totalGroups = null;
			$rootScope.totalUsers = null;
			$rootScope.totalItems = null;
			getTotalUsersFactory().then(
			
		      function(session){
		        console.log('getTotalUsers onSuccess');
		        $rootScope.totalUsers = session.invocationResult.resultSet[0];
		        console.log($rootScope.totalUsers);
		      },
		      function(error){
		        console.log('getTotalUsers onFailure');
		      } 
		    );
			
			getTotalGroupsFactory().then(
					
		      function(session){
		        console.log('getTotalGroups onSuccess');
		        $rootScope.totalGroups = session.invocationResult.resultSet[0];
		        console.log($rootScope.totalGroups);
		        
		      },
		      function(error){
		        console.log('getTotalGroups onFailure');
		      } 
		    );
			
			getTotalRecyclingActionsFactory().then(
		      function(session){
		        console.log('getTotalGroups onSuccess');
		        $rootScope.totalItems = session.invocationResult.resultSet[0];
		        console.log($rootScope.totalItems);
		        
		      },
		      function(error){
		        console.log('getTotalGroups onFailure');
		      } 
		    );
		}
		$rootScope.initStats();
		
		$rootScope.statsRefresh= function(){
			if($rootScope.mainItemFiltered.item.type){
				if($rootScope.mainItemFiltered.item.type == 'group'){
					$rootScope.totalUsers.total = null;
					$rootScope.totalGroups.total = null;
					$rootScope.totalItems.total = null;
					$rootScope.statsGetSelectedGroup();
				}else if($rootScope.mainItemFiltered.item.type == 'user'){
					$rootScope.totalUsers.total = null;
					$rootScope.totalGroups.total = null;
					$rootScope.totalItems.total = null;
					$rootScope.statsGetSelectedUser();
				}
			}else{
				$rootScope.totalUsers.total = null;
				$rootScope.totalGroups.total = null;
				$rootScope.totalItems.total = null;
				$rootScope.initStats();
			}
			
	}

		$rootScope.statsGetSelectedGroup = function(){
			if($rootScope.mainItemFiltered.item.groupID){
				getTotalUsersSelectedGroupFactory($rootScope.mainItemFiltered.item.groupID).then(
						
			      function(session){
			          $rootScope.totalUsers = session.invocationResult.resultSet[0];
			        
			      },
			      function(error){
			        console.log('getTotalUsersSelectedGroupFactory onFailure');
			      } 
			    );
				
				$rootScope.totalGroups.total = 1;
				
				getTotalRecyclingActionsSelectedGroupFactory($rootScope.mainItemFiltered.item.groupID).then(
			      function(itemsSession){
			        console.log('getTotalRecyclingActionsSelectedGroupFactory onSuccess');
			        $rootScope.totalItems = itemsSession.invocationResult.resultSet[0];
			        
			      },
			      function(error){
			        console.log('getTotalRecyclingActionsSelectedGroupFactory onFailure');
			      } 
			    );
			}
			
		};
		$rootScope.statsGetSelectedUser = function(){
			if($rootScope.mainItemFiltered.item.userID){
				
				getTotalGroupsSelectedUserFactory($rootScope.mainItemFiltered.item.userID).then(
						
			      function(session){
			          console.log('getTotalGroupsSelectedUserFactory onSuccess');
			          $rootScope.totalGroups = session.invocationResult.resultSet[0];
			        
			      },
			      function(error){
			        console.log('getTotalGroupsSelectedUserFactory onFailure');
			      } 
			    );
				
				$rootScope.totalUsers.total = 1;
				
				getTotalRecyclingActionsSelectedUserFactory($rootScope.mainItemFiltered.item.userID).then(
			      function(itemsSession){
			        console.log('getTotalGroupsSelectedUserFactory onSuccess');
			        $rootScope.totalItems = itemsSession.invocationResult.resultSet[0];
			      },
			      function(error){
			        console.log('getTotalGroupsSelectedUserFactory onFailure');
			      } 
			    );
			}
			
		};

			
 
});