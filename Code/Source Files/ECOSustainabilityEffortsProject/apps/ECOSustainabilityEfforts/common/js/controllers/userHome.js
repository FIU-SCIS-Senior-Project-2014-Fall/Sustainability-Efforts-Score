app.controller(
  'userHomeController',
  function($scope, $rootScope, $modal, $log, getUserDetailsFactory, getGroupstoFilterDashboardFactory, getUserstoFilterDashboardFactory) {
    console.log('userHomeController');
      
    $scope.init = function(){
      console.log('init');
      $rootScope.mainItemFiltered = {item: ''};;
      getUserDetailsFactory().then(
        function(session){
          console.log('getUserDetailsFactory onSuccess');
          
          $scope.user = session.invocationResult.resultSet;
        },
        function(error){
          console.log('getUserDetailsFactory onFailure');
        }
      );
      getGroupstoFilterDashboardFactory().then(
	      function(session){
	        console.log('getGroupstoFilterDashboardFactory HELLO onSuccess');

	        $scope.groupsFilter = session.invocationResult.resultSet;
	        console.log('');
	        for(var i = 0; i < $scope.groupsFilter.length; i++){
	        	console.log($scope.groupsFilter[i]);
	        	$scope.groupsFilter[i].type = 'group';
	        }
	        
	      },
	      function(error){
	        console.log('getGroupstoFilterDashboardFactory onFailure');
	      } 
	    );
      getUserstoFilterDashboardFactory().then(
    	      function(session){
    	        console.log('getUserstoFilterDashboardFactory onSuccess');
    	        
    	        $scope.usersFilter = session.invocationResult.resultSet;
    	        for(var i = 0; i < $scope.usersFilter.length; i++){
    	        	$scope.usersFilter[i].type = 'user';
    	        }
    	        
    	      },
    	      function(error){
    	        console.log('getUserstoFilterDashboardFactory onFailure');
    	      } 
    	    );
      
    }

    $scope.init(); 

    $scope.open = function (size) {

      var modalInstanceFilter = $modal.open({
        templateUrl: 'filterModal.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
        	groupsFilter: function () {
            return $scope.groupsFilter;
          },
          	usersFilter: function () {
          	return $scope.usersFilter;
      }
        }
      });

      modalInstanceFilter.result.then(function (selectedItem) {
        $scope.selectedItem = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
    
    $rootScope.reloadDashboard = function(){
    	$rootScope.mainItemFiltered = {item: ''};
    	$rootScope.initPieChart();
    	$rootScope.initBarChart();
    	$rootScope.initStats();
    	$rootScope.initUserScoreboard();
    	$rootScope.initGroupScoreboard();
    	$rootScope.initItemsScoreboard();
    }
    
    $rootScope.filterDashboard = function(){
    	if($rootScope.mainItemFiltered.item.type){
			if($rootScope.mainItemFiltered.item.type == 'group'){
				$rootScope.statsGetSelectedGroup();
				$rootScope.pieChartGetSelectedGroup();
				$rootScope.barChartGetSelectedGroup();
				$rootScope.groupScoreboardGetSelectedGroup();
				$rootScope.userScoreboardGetSelectedGroup();
				$rootScope.itemsBoardGetSelectedGroup();
			}else if($rootScope.mainItemFiltered.item.type == 'user'){
				$rootScope.statsGetSelectedUser();
				$rootScope.pieChartGetSelectedUser();
				$rootScope.barChartGetSelectedUser();
				$rootScope.groupScoreboardGetSelectedUser();
				$rootScope.userScoreboardGetSelectedUser();
				$rootScope.itemsBoardGetSelectedUser();
			}
		}
    }
    
    $rootScope.refreshDashboard = function(){
		if($rootScope.mainItemFiltered.item.type){
	    	$rootScope.statsRefresh();
		   	$rootScope.pieChartRefresh();
			$rootScope.barChartRefresh();
	    	$rootScope.userScoreboardRefresh();
	    	$rootScope.groupScoreboardRefresh();
	    	$rootScope.itemsBoardRefresh();
		}else{
			$rootScope.reloadDashboard();
		}
 
    }
  
  
  });


