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

function onAuthRequired(headers, errorMessage){
	errorMessage = errorMessage ? errorMessage : null;
	
	return {
		authRequired: true,
		errorMessage: errorMessage
	};
}

function submitAuthentication(username, password){
	WL.Logger.warn("submitAuthentication");
	
	var isValidUser = WL.Server.invokeSQLStoredProcedure({
		procedure : "isValidUser",
		parameters : [username, password]
	});
	
	WL.Logger.warn(isValidUser);
	
	if (isValidUser.resultSet[0].Result == 1){

		var userIdentity = {
				userId: username,
				displayName: username 
		};
		
		userIdentity.attributes = 	WL.Server.invokeSQLStoredProcedure({
										procedure : "GetUserDetails",
										parameters : [username]
									});

		WL.Server.setActiveUser("SingleStepAuthRealm", userIdentity);
		
		return { 
			authRequired: false 
		};
	}

	return onAuthRequired(null, "Invalid login credentials");
}

function getSecretData(){
	return {
		secretData: "A very very very very secret data"
	};
}

function onLogout(){
	WL.Logger.debug("Logged out");

	WL.Server.setActiveUser("SingleStepAuthRealm", null);
}
