
/* JavaScript content from vendors/angular-datatables-master/vendor/datatables/media/unit_testing/tests_onhold/4_server-side/sAjaxSource.js in folder common */
// DATA_TEMPLATE: empty_table
oTest.fnStart( "sAjaxSource" );

/* Sanitfy check really - all the other tests blast this */

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"bServerSide": true,
		"sAjaxSource": "../../../examples/server_side/scripts/server_processing.php"
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnWaitTest( 
		"Server side is off by default",
		null,
		function () { 
			return oSettings.sAjaxSource == "../../../examples/server_side/scripts/server_processing.php";
		}
	);
	
	oTest.fnComplete();
} );