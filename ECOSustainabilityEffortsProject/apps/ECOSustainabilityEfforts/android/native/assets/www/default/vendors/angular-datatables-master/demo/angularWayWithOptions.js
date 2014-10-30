
/* JavaScript content from vendors/angular-datatables-master/demo/angularWayWithOptions.js in folder common */
/**
 * @author l.lin
 * @created 17/07/14 17:04
 */
(function() {
    'use strict';
    angular.module('datatablesSampleApp').controller('angularWayWithOptionsCtrl', function ($scope, $resource, DTOptionsBuilder, DTColumnDefBuilder) {
        $scope.persons = $resource('data.json').query();
        $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);
        $scope.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0),
            DTColumnDefBuilder.newColumnDef(1).notVisible(),
            DTColumnDefBuilder.newColumnDef(2).notSortable()
        ];
    });
})();
