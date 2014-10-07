function wlCommonInit(){
	console.log("wlCommonInit()");
	
	// Special case for Windows Phone 8 only.
	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
	    path = "/www/default/";
	}
	
	console.log("Loading Angular");

	angular.element(document).ready
	(
			function() {
				angular.bootstrap(document, ['App']);
			}
	);
}
