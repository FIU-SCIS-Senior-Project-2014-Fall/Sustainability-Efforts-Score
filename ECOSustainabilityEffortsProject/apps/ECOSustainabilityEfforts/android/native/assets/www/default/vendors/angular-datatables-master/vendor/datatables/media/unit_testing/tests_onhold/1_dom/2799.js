
/* JavaScript content from vendors/angular-datatables-master/vendor/datatables/media/unit_testing/tests_onhold/1_dom/2799.js in folder common */
// DATA_TEMPLATE: two_tables
oTest.fnStart( "Initialise two tables" );

$(document).ready( function () {
	$('table.display').dataTable();
	
	oTest.fnTest( 
		"Check that initialisation was okay",
		null,
		function () { return true; }
	);
	
	oTest.fnComplete();
} );