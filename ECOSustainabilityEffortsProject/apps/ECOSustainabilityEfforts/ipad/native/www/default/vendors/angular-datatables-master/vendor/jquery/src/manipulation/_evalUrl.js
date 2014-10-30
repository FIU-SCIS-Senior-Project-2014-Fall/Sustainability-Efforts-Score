
/* JavaScript content from vendors/angular-datatables-master/vendor/jquery/src/manipulation/_evalUrl.js in folder common */
define([
	"../ajax"
], function( jQuery ) {

jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};

return jQuery._evalUrl;

});
