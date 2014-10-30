
/* JavaScript content from vendors/angular-datatables-master/vendor/datatables/media/unit_testing/tests_onhold/1_dom/2840-restore-table-width.js in folder common */
// DATA_TEMPLATE: dom_data
oTest.fnStart( "2840 - Restore table width on fnDestroy" );

$(document).ready( function () {
	document.cookie = "";
	$('#example').dataTable( {
		"sScrollX": "100%",
		"sScrollXInner": "110%"
	} );
	$('#example').dataTable().fnDestroy();
	
	oTest.fnTest( 
		"Width after destroy",
		null,
		function () { return $('#example').width() == "800"; }
	);
	
	oTest.fnComplete();
} );