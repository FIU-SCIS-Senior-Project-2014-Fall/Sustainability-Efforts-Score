// Tests here

describe('Controller: dashboard', function() {
  var scope, restService, $location;
  
  beforeEach(function() {
    var mockRestService = {};
    module('app', function($provide) {
      $provide.value('restService', mockRestService);
    });
    
    inject(function($q) {
      mockRestService.data = [
        {
          id: 0,
          name: 'Angular'
        },
        {
          id: 1,
          name: 'Ember'
        },
        {
          id: 2,
          name: 'Backbone'
        },
        {
          id: 3,
          name: 'React'
        }
      ];
      
      mockRestService.getAll = function() {
        var defer = $q.defer();
        
        defer.resolve(this.data);
        
        return defer.promise;
      };
      
      mockRestService.create = function(name) {
        var defer = $q.defer();
        
        var id = this.data.length;
        
        var item = {
          id: id,
          name: name
        };
        
        this.data.push(item);
        defer.resolve(item);
        
        return defer.promise;
      };
    });
  });
  
  beforeEach(inject(function($controller, $rootScope, _$location_, _restService_) {
    scope = $rootScope.$new();
    $location = _$location_;
    restService = _restService_;
    
    $controller('ListLibrariesCtrl', {$scope: scope, $location: $location, restService: restService });
    
    scope.$digest();
  }));
  
  it('should contain all groups activity at startup', function() {
    expect(scope.libraries).toEqual([
      {
        id: 0,
        name: 'Angular'
      },
      {
        id: 1,
        name: 'Ember'
      },
      {
        id: 2,
        name: 'Backbone'
      },
      {
        id: 3,
        name: 'React'
      }
    ]);
  });

    it('should contain ytd groups activity at startup', function() {
    expect(scope.libraries).toEqual([
      {
        id: 0,
        name: 'Angular'
      },
      {
        id: 1,
        name: 'Ember'
      },
      {
        id: 2,
        name: 'Backbone'
      },
      {
        id: 3,
        name: 'React'
      }
    ]);
  });

  it('should contain widgets info  at startup', function() {
    expect(scope.libraries).toEqual([
      {
        id: 0,
        name: 'Angular'
      },
      {
        id: 1,
        name: 'Ember'
      },
      {
        id: 2,
        name: 'Backbone'
      },
      {
        id: 3,
        name: 'React'
      }
    ]);
  });
  it('should filter by user', function() {
    expect(scope.libraries).toEqual([
      {
        id: 0,
        name: 'Angular'
      },
      {
        id: 1,
        name: 'Ember'
      },
      {
        id: 2,
        name: 'Backbone'
      },
      {
        id: 3,
        name: 'React'
      }
    ]);
  });
  it('should filter by group', function() {
    expect(scope.libraries).toEqual([
      {
        id: 0,
        name: 'Angular'
      },
      {
        id: 1,
        name: 'Ember'
      },
      {
        id: 2,
        name: 'Backbone'
      },
      {
        id: 3,
        name: 'React'
      }
    ]);
  });

});