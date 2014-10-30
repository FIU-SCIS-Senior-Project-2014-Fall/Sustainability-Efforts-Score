
/* JavaScript content from vendors/angular-datatables-master/vendor/datatables/media/unit_testing/tests_onhold/5_ajax_objects/bServerSide.js in folder common */
// DATA_TEMPLATE: empty_table
oTest.fnStart( "bServerSide" );

/* Not interested in server-side processing here other than to check that it is off */

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
		"aoColumns": [
			{ "mData": "engine" },
			{ "mData": "browser" },
			{ "mData": "platform" },
			{ "mData": "version" },
			{ "mData": "grade" }
		]
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnWaitTest( 
		"Server side is off by default",
		null,
		function () { return oSettings.oFeatures.bServerSide == false; }
	);
	
	oTest.fnComplete();
} );