app.controller(
  'userHomeController',
  function($scope, getUserDetailsFactory) {
    console.log('userHomeController');
      
    $scope.init = function(){
      console.log('init');
      
      getUserDetailsFactory().then(
        function(session){
          console.log('getUserDetailsFactory onSuccess');
          
          $scope.user = session.invocationResult.resultSet;
        },
        function(error){
          console.log('getUserDetailsFactory onFailure');
        }
      );
      
    }

    $scope.init();  
    
  }  
);
