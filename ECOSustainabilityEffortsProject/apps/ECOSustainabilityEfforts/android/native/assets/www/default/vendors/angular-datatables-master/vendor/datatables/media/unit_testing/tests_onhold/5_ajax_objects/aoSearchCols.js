
/* JavaScript content from vendors/angular-datatables-master/vendor/datatables/media/unit_testing/tests_onhold/5_ajax_objects/aoSearchCols.js in folder common */
// DATA_TEMPLATE: empty_table
oTest.fnStart( "aoSearchCols" );

/* We could be here forever testing this one, so we test a limited subset on a couple of colums */

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
		"Default should be to have a empty colums array",
		null,
		function () {
			var bReturn = 
				oSettings.aoPreSearchCols[0].sSearch == 0 && !oSettings.aoPreSearchCols[0].bRegex &&
				oSettings.aoPreSearchCols[1].sSearch == 0 && !oSettings.aoPreSearchCols[1].bRegex &&
				oSettings.aoPreSearchCols[2].sSearch == 0 && !oSettings.aoPreSearchCols[2].bRegex &&
				oSettings.aoPreSearchCols[3].sSearch == 0 && !oSettings.aoPreSearchCols[3].bRegex &&
				oSettings.aoPreSearchCols[4].sSearch == 0 && !oSettings.aoPreSearchCols[4].bRegex;
			return bReturn;
		}
	);
	
	
	oTest.fnWaitTest( 
		"Search on a single column - no regex statement given",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
				"aoColumnDefs": [
					{ "mData": "engine", "aTargets": [0] },
					{ "mData": "browser", "aTargets": [1] },
					{ "mData": "platform", "aTargets": [2] },
					{ "mData": "version", "aTargets": [3] },
					{ "mData": "grade", "aTargets": [4] }
				],
				"aoSearchCols": [
					null,
					{ "sSearch": "Mozilla" },
					null,
					{ "sSearch": "1" },
					null
				]
			} );
		},
		function () { return $('#example_info').html() == "Showing 1 to 9 of 9 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnWaitTest( 
		"Search on two columns - no regex statement given",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
				"aoColumnDefs": [
					{ "mData": "engine", "aTargets": [0] },
					{ "mData": "browser", "aTargets": [1] },
					{ "mData": "platform", "aTargets": [2] },
					{ "mData": "version", "aTargets": [3] },
					{ "mData": "grade", "aTargets": [4] }
				],
				"aoSearchCols": [
					null,
					{ "sSearch": "Mozilla" },
					null,
					{ "sSearch": "1.5" },
					null
				]
			} );
		},
		function () { return $('#example tbody tr:eq(0) td:eq(3)').html() == "1.5"; }
	);
	
	oTest.fnWaitTest( 
		"Search on single column - escape regex false",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
				"aoColumnDefs": [
					{ "mData": "engine", "aTargets": [0] },
					{ "mData": "browser", "aTargets": [1] },
					{ "mData": "platform", "aTargets": [2] },
					{ "mData": "version", "aTargets": [3] },
					{ "mData": "grade", "aTargets": [4] }
				],
				"aoSearchCols": [
					{ "sSearch": ".*ML", "bEscapeRegex": false },
					null,
					null,
					null,
					null
				]
			} );
		},
		function () { return $('#example_info').html() == "Showing 1 to 3 of 3 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnWaitTest( 
		"Search on two columns - escape regex false on first, true on second",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
				"aoColumnDefs": [
					{ "mData": "engine", "aTargets": [0] },
					{ "mData": "browser", "aTargets": [1] },
					{ "mData": "platform", "aTargets": [2] },
					{ "mData": "version", "aTargets": [3] },
					{ "mData": "grade", "aTargets": [4] }
				],
				"aoSearchCols": [
					{ "sSearch": ".*ML", "bEscapeRegex": false },
					{ "sSearch": "3.3", "bEscapeRegex": true },
					null,
					null,
					null
				]
			} );
		},
		function () { return $('#example tbody tr:eq(0) td:eq(1)').html() == "Konqureror 3.3"; }
	);
	
	oTest.fnWaitTest( 
		"Search on two columns (no records) - escape regex false on first, true on second",
		function () {
			oSession.fnRestore();
			oTable = $('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
				"aoColumnDefs": [
					{ "mData": "engine", "aTargets": [0] },
					{ "mData": "browser", "aTargets": [1] },
					{ "mData": "platform", "aTargets": [2] },
					{ "mData": "version", "aTargets": [3] },
					{ "mData": "grade", "aTargets": [4] }
				],
				"aoSearchCols": [
					{ "sSearch": ".*ML", "bEscapeRegex": false },
					{ "sSearch": "Allan", "bEscapeRegex": true },
					null,
					null,
					null
				]
			} );
		},
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == "No matching records found"; }
	);
	
	oTest.fnComplete();
} );