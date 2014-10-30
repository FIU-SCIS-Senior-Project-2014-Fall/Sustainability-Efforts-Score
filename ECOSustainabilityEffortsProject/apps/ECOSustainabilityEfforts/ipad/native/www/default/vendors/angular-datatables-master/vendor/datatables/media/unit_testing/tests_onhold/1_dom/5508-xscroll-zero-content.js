
/* JavaScript content from vendors/angular-datatables-master/vendor/datatables/media/unit_testing/tests_onhold/1_dom/5508-xscroll-zero-content.js in folder common */
// DATA_TEMPLATE: dom_data
oTest.fnStart( "5508 - Table container width doesn't change when filtering applied to scrolling table" );

$(document).ready( function () {
	$('#example').dataTable( {
		"sScrollY": "300px",
		"bPaginate": false
	} );
	
	oTest.fnTest( 
		"Width of container 800px on init with scroll",
		null,
		function () { return $('div.dataTables_scrollBody').width() == 800; }
	);
	
	oTest.fnTest( 
		"Unaltered when filter applied",
		function () { $('#example').dataTable().fnFilter('123'); },
		function () { return $('div.dataTables_scrollBody').width() == 800; }
	);
	
	oTest.fnComplete();
} );