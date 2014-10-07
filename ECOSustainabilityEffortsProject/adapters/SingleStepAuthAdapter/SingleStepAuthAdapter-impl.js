var session = [];
var user;

function onAuthRequired(headers, errorMessage){
	errorMessage = errorMessage ? errorMessage : null;
	
	return {
		authRequired: true,
		errorMessage: errorMessage
	};
}

function submitNewUser(firstname, lastname, username, password, email){
	WL.Logger.warn("submitNewUser");
	
	WL.Server.invokeSQLStoredProcedure({
		procedure : "CreateNewUser",
		parameters : [firstname, lastname, username, password, email]
	});

	return {data: 0};
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
		
		user = 	username;

		WL.Server.setActiveUser("SingleStepAuthRealm", userIdentity);
		
		return { 
			authRequired: false 
		};
	}

	return onAuthRequired(null, "Invalid login credentials");
}

function getSessionData(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "GetUserDetails",
		parameters : [user]
	});
}

function onLogout(){
	WL.Logger.debug("Logged out");

	WL.Server.setActiveUser("SingleStepAuthRealm", null);
}
