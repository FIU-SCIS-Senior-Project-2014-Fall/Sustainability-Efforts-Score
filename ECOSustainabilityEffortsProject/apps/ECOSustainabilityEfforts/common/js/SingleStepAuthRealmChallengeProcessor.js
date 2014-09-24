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

var singleStepAuthRealmChallengeHandler = WL.Client.createChallengeHandler("SingleStepAuthRealm");

singleStepAuthRealmChallengeHandler.isCustomResponse = function(response) {
	alert("isCustomResponse");
	
	if (!response || !response.responseJSON	|| response.responseText === null) {
		return false;
	}
	if (typeof(response.responseJSON.authRequired) !== 'undefined'){
		return true;
	} else {
		return false;
	}
};

singleStepAuthRealmChallengeHandler.handleChallenge = function(response){
	alert("handleChallenge");

	var authRequired = response.responseJSON.authRequired;

	if (authRequired == true){
		$("#pagePort").load(path + "pages/LoginPage.html");

		if (response.responseJSON.errorMessage)
	    	alert(response.responseJSON.errorMessage);
		
	} else if (authRequired == false){
		$("#pagePort").load(path + "pages/UserHomePage.html");
		
		singleStepAuthRealmChallengeHandler.submitSuccess();
	}
};


$("#pagePort").on('click', '#AuthSubmitButton', function () {
	alert("AuthSubmitButton.click");

	var username = $("#AuthUsername").val();
	var password = $("#AuthPassword").val();

	alert(username + ":" + password);

	var invocationData = {
		adapter : "SingleStepAuthAdapter",
		procedure : "submitAuthentication",
		parameters : [ username, password ]
	};

	singleStepAuthRealmChallengeHandler.submitAdapterAuthentication(invocationData, {});
});

$("#pagePort").on('click', '#AuthCancelButton', function () {
	alert("AuthCancelButton.click");

	$("#pagePort").load(path + "pages/LoginPage.html");

	singleStepAuthRealmChallengeHandler.submitFailure();
});
