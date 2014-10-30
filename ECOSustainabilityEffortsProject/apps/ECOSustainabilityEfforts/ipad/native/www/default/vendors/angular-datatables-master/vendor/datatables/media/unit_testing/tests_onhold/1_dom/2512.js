
/* JavaScript content from vendors/angular-datatables-master/vendor/datatables/media/unit_testing/tests_onhold/1_dom/2512.js in folder common */
// DATA_TEMPLATE: 2512
oTest.fnStart( "Check filtering with BR and HTML entity" );


$(document).ready( function () {
	$('#example').dataTable();
	
	/* Basic checks */
	oTest.fnTest( 
		"Check filtering",
		function () { $('#example').dataTable().fnFilter('testsearchstring'); },
		function () { return $('#example tbody tr').length == 1; }
	);
	
	
	oTest.fnComplete();
} );