/*
 *
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.

 */

var pagesHistory = [];
var currentPage = {};
var path = "";

function wlCommonInit(){
	alert("wlCommonInit");
	
	WL.Logger.debug("wlCommonInit");
	
	// Special case for Windows Phone 8 only.
	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
	    path = "/www/default/";
	}
	
	$("#pagePort").load(path + "pages/HomePage.html", function(){
		
		$.getScript(path + "js/HomePage.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	
	});
}

$('#signinbutton').bind('click', function () {
    alert("signinbutton.click");
	
	var invocationData = {
			adapter: "DummyAdapter",
			procedure: "getSecretData",
			parameters: []
	};
	
	WL.Client.invokeProcedure(invocationData, {
		onSuccess: getSecretDataSuccess,
		onFailure: getSecretDataFailure
	});
});

currentPage.getSecretData = function (){
	alert("getSecretData");

	var invocationData = {
			adapter: "DummyAdapter",
			procedure: "getSecretData",
			parameters: []
	};
	
	WL.Client.invokeProcedure(invocationData, {
		onSuccess: getSecretDataSuccess,
		onFailure: getSecretDataFailure
	});
};

currentPage.getSecretDataSuccess = function (response){
	alert("getSecretData_Callback response :: " + JSON.stringify(response));
};

currentPage.getSecretDataFailure = function (response){
	alert("getSecretDataFailure");

	WL.SimpleDialog.show("Form Based Authentication", "Service not available. Try again later.", 
			[{
				text : 'Reload',
				handler : WL.Client.reloadApp 
			},
			{
				text: 'Close',
				handler : function() {}
			}]
	);
};
