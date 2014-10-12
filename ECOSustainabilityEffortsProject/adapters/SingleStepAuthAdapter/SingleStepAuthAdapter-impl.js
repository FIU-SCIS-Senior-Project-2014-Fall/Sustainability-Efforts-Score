var user;

// Authentication related functions

function onAuthRequired(headers, errorMessage){
	errorMessage = errorMessage ? errorMessage : null;
	
	return {
		authRequired: true,
		errorMessage: errorMessage
	};
}

function submitAuthentication(username, password){
	WL.Logger.warn("submitAuthentication");
	
	var getUserIDResult = WL.Server.invokeSQLStoredProcedure({
		procedure : "getUserID",
		parameters : [username, password]
	});
	
	WL.Logger.warn(getUserIDResult);
	
	if (
		getUserIDResult.isSuccessful == true && 
		(typeof getUserIDResult.resultSet[0].userID !== 'undefined' || getUserIDResult.resultSet[0].userID != null)
	) {
		WL.Logger.warn("getUserIDResult.isSuccessful");

		WL.Logger.warn(getUserIDResult);
		
		WL.Logger.warn(getUserIDResult.resultSet[0]);
	
		if (getUserIDResult.resultSet[0].userID != 0){
			getUserDetailsResult = WL.Server.invokeSQLStoredProcedure({
				procedure : "getUserDetails",
				parameters : [getUserIDResult.resultSet[0].userID]
			});
			
			if (
				getUserDetailsResult.isSuccessful = true && 
				(typeof getUserDetailsResult.resultSet[0].userID !== 'undefined' || getUserDetailsResult.resultSet[0].userID != null)
			) {
				WL.Logger.warn("getUserDetailsResult.isSuccessful");
				
				WL.Logger.warn(getUserDetailsResult);
				
				user = getUserDetailsResult.resultSet[0];
		
				WL.Logger.warn(user);
		
				WL.Logger.warn(user.userID);
				
				WL.Logger.warn(user.userName);
				
				var userIdentity = {
						userId: user.userGuid,
						displayName: user.userName 
				};
				
				WL.Server.setActiveUser("SingleStepAuthRealm", userIdentity);
				
				return { 
					authRequired: false 
				};
			}
		}
	}

	return onAuthRequired(null, "Invalid login credentials");
}

function onLogout(){
	WL.Server.setActiveUser("SingleStepAuthRealm", null);

	WL.Logger.warn("Logged out");
}

// User related functions

function createUser(firstname, lastname, username, password, email){
	WL.Logger.warn("createUser");
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "createUser",
		parameters : [firstname, lastname, username, password, email]
	});
}

function getUserDetails(){
	WL.Logger.warn("getUserDetails")
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getUserDetails",
		parameters : [user.userID]
	});
}

function updateUserProfile(username, fname, lname, email, password) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "updateUserProfile",
		parameters : [username, fname, lname, email, password]
	});
}

// Group related functions

function createNewGroupProfile(groupName, adminID, email, address1, address2, city, state, country, zip, geoTag, radius) {
	WL.Logger.warn("creating new group profile");
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "createNewGroupProfile",
		parameters : [groupName, adminID, email, address1, address2, city, state, country, zip, geoTag, radius]
	});
}

function updateGroupProfile(groupid, groupname, userid, email, address1, address2, city, state, country, zip, geoTag, radius) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "updateGroupProfile",
		parameters : [groupid, groupname, userid, email, address1, address2, city, state, country, zip, geoTag, radius]
	});
}

function getGroupProfile(groupID) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroupProfile",
		parameters : [groupID]
	});
}

function getGroupsMemberOf(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroupsMemberOf",
		parameters : [user.userID]
	});
}

function getGroupsNotMemberOf(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroupsNotMemberOf",
		parameters : [user.userID]
	});
}

function getGroupsOwnerOf(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroupsOwnerOf",
		parameters : [user.userID]
	});
}

function getGroupUsers(groupID) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroupUsers",
		parameters : [groupID]
	});
}

// Forms related functions

function getStateList(country) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getStateList",
		parameters : [country]
	});
}

function getCountryList() {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getCountryList",
		parameters : []
	});
}
