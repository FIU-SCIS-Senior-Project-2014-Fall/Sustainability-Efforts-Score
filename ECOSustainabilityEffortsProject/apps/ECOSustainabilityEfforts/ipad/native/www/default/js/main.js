
/* JavaScript content from js/main.js in folder common */
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

/* JavaScript content from js/main.js in folder ipad */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}