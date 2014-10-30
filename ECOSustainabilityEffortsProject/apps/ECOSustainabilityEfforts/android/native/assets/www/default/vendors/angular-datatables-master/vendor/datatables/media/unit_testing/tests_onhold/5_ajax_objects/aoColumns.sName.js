
/* JavaScript content from vendors/angular-datatables-master/vendor/datatables/media/unit_testing/tests_onhold/5_ajax_objects/aoColumns.sName.js in folder common */
// DATA_TEMPLATE: empty_table
oTest.fnStart( "aoColumns.sName" );

/* This has no effect at all in DOM methods - so we just check that it has applied the name */

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
		"aoColumns": [
			{ "mData": "engine" },
			{ "mData": "browser" },
			{ "mData": "platform" },
			{ "mData": "version", "sName": 'unit test' },
			{ "mData": "grade" }
		]
	} );
	var oSettings = oTable.fnSettings();
	
	oTest.fnWaitTest( 
		"Names are stored in the columns object",
		null,
		function () { return oSettings.aoColumns[3].sName =="unit test"; }
	);
	
	
	oTest.fnComplete();
} );