
app.controller(
  'ModalInstanceCtrl', function ($scope, $rootScope, $modalInstance, groupsFilter, usersFilter){

  $scope.groupsFilter = groupsFilter;
  $scope.usersFilter = usersFilter;
  $scope.selectedItem = {item: ''};

  $scope.ok = function () {
	  if($scope.selectedItem.item.type){
		    $rootScope.mainItemFiltered = $scope.selectedItem;
		    $rootScope.filterDashboard();
	  }
	  $modalInstance.close($scope.selectedItem.item);
  };

  $scope.cancel = function () {
	  
    $modalInstance.dismiss('cancel');
	  }
	  
  });