var app = angular.module('app', []);

app.factory('restService', function() {
  return {
    getAll: function() {
      // We do a $http call to retrieve the stuff
    },
    create: function(itemName) {
      // We do a $http post to send the new one
    }
  }
});

app.controller('ListLibrariesCtrl', function($scope, $location, restService) {
  restService.getAll().then(function(items) {
    $scope.libraries = items;
  });
  
  $scope.create = function() {
    restService.create($scope.newItemName).then(function(item) {
      $scope.libraries.push(item);
    });
  };
  
  $scope.goToDetails = function(library) {
    $location.path('/libraries/' + library.id + '/details');
  };
});