
/* JavaScript content from vendors/angular-datatables-master/demo/withColVis.js in folder common */
/**
 * @author l.lin
 * @created 17/07/14 17:04
 */
(function() {
    'use strict';
    angular.module('datatablesSampleApp').controller('withColVisCtrl', function ($scope, DTOptionsBuilder, DTColumnBuilder) {
        $scope.dtOptions = DTOptionsBuilder.fromSource('data.json')
            .withPaginationType('full_numbers')
            // Active ColVis plugin
            .withColVis()
            // Add a state change function
            .withColVisStateChange(function(iColumn, bVisible) {
                console.log('The column' + iColumn + ' has changed its status to ' + bVisible)
            })
            // Exclude the last column from the list
            .withColVisOption('aiExclude', [2]);
        $scope.dtColumns = [
            DTColumnBuilder.newColumn('id').withTitle('ID'),
            DTColumnBuilder.newColumn('firstName').withTitle('First name'),
            DTColumnBuilder.newColumn('lastName').withTitle('Last name')
        ];
    });
})();