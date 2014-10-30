
/* JavaScript content from vendors/angular-datatables-master/vendor/jquery/src/effects/animatedSelector.js in folder common */
define([
	"../core",
	"../selector",
	"../effects"
], function( jQuery ) {

jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};

});
