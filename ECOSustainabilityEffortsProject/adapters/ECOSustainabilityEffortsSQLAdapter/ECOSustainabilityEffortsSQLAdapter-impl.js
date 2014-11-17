var user;

var userRole;

function pad2(n) {  // always returns a string
    return (n < 10 ? '0' : '') + n;
}

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
			(getUserIDResult.isSuccessful == true) && 
			(getUserIDResult.resultSet[0].userID)
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
				(getUserDetailsResult.isSuccessful = true) && 
				(getUserDetailsResult.resultSet[0].userID)
			) {
				WL.Logger.warn("getUserDetailsResult.isSuccessful");
				
				WL.Logger.warn(getUserDetailsResult);
				
				user = getUserDetailsResult.resultSet[0];
		
				WL.Logger.warn(user);
		
				WL.Logger.warn(user.userID);
				
				WL.Logger.warn(user.userName);
				
				WL.Server.setActiveUser("ECOSustainabilityEffortsAuthRealm", null);

				var userIdentity = {
						userId: user.userGuid,
						displayName: user.userName 
				};
				
				WL.Server.setActiveUser("ECOSustainabilityEffortsAuthRealm", userIdentity);
				
				return { 
					authRequired: false 
				};
			}
		}
	}

	return onAuthRequired(null, "Invalid login credentials");
}

function onLogout(){
	WL.Server.setActiveUser("ECOSustainabilityEffortsAuthRealm", null);

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
	
	// TODO: refresh local user variable with below information when this stored procedure is called

	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getUserDetails",
		parameters : [user.userID]
	});
}

function updateUserProfile(userid, username, fname, lname, email, password) {
	WL.Logger.warn("updateUserProfile")
	if(user.userID == userid){ 
		return WL.Server.invokeSQLStoredProcedure({
			procedure : "updateUserProfile",
			parameters : [user.userID, username, fname, lname, email, password]
		});
	}
}

// Group related functions

function createNewGroupProfile(groupName, email, address1, address2, city, state, country, zip, geoTag, radius) {
	WL.Logger.warn("creating new group profile");
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "createNewGroupProfile",
		parameters : [groupName, user.userID, email, address1, address2, city, state, country, zip, geoTag, radius]
	});
}

function updateGroupProfile(groupid, groupname, userid, email, address1, address2, city, state, country, zip, geoTag, radius) {
	WL.Logger.warn("updating group profile");
	if(user.userID == userid){
		if(groupid == null || groupid == undefined || groupname == null || groupname == undefined || email == null || email == undefined)
			//DO SOMETHING- CREATE STANDARD RESPONSE
		WL.Logger.warn("updating group profile for authorized user");
		var ownerOf = WL.Server.invokeSQLStoredProcedure({
			procedure : "getGroupsOwnerOf",
			parameters : [userid]
		});
		var groupOwner = 0;
		for (var i = 0; i < ownerOf.length; i++) {
			if(ownerOf[i] == groupid){
				groupOwner = 1;
				break;
			}
		}
		if(groupOwner == 1){
			return WL.Server.invokeSQLStoredProcedure({
				procedure : "updateGroupProfile",
				parameters : [groupid, groupname, userid, email, address1, address2, city, state, country, zip, geoTag, radius]
			});
		}
	}
}

function getGroupProfile(groupID) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroupProfile",
		parameters : [groupID]
	});
}

function getGroups() {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroups",
		parameters : []
	});
}

function getGroupsMemberOf(){
	var groupsMemberOf = WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroupsMemberOf",
		parameters : [user.userID]
	});
	
	for(var i=0; i < groupsMemberOf.resultSet.length; i++){
		if(groupsMemberOf.resultSet[i].country){
			var country = WL.Server.invokeSQLStoredProcedure({
				procedure : "getCountryByID",
				parameters : [groupsMemberOf.resultSet[i].country]
			});

			groupsMemberOf.resultSet[i].countryName = country.resultSet[0].countries_name;
		} else {
			groupsMemberOf.resultSet[i].countryName = 'N/A';
		}
		
		if(groupsMemberOf.resultSet[i].state){
			var state = WL.Server.invokeSQLStoredProcedure({
				procedure : "getStateByID",
				parameters : [groupsMemberOf.resultSet[i].state]
			});

			groupsMemberOf.resultSet[i].stateName = state.resultSet[0].state_name;
		} else {
			groupsMemberOf.resultSet[i].stateName = 'N/A';
		}
	}

	return groupsMemberOf;
}

function getGroupsNotMemberOf(){
	var groupsNotMemberOf = WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroupsNotMemberOf",
		parameters : [user.userID]
	});
	
	for(var i=0; i < groupsNotMemberOf.resultSet.length; i++){
		if(groupsNotMemberOf.resultSet[i].country){
			var country = WL.Server.invokeSQLStoredProcedure({
				procedure : "getCountryByID",
				parameters : [groupsNotMemberOf.resultSet[i].country]
			});

			groupsNotMemberOf.resultSet[i].countryName = country.resultSet[0].countries_name;
		} else {
			groupsNotMemberOf.resultSet[i].countryName = 'N/A';
		}
		
		if(groupsNotMemberOf.resultSet[i].state){
			var state = WL.Server.invokeSQLStoredProcedure({
				procedure : "getStateByID",
				parameters : [groupsNotMemberOf.resultSet[i].state]
			});

			groupsNotMemberOf.resultSet[i].stateName = state.resultSet[0].state_name;
		} else {
			groupsNotMemberOf.resultSet[i].stateName = 'N/A';
		}

	}
	return groupsNotMemberOf;
}

function getGroupsOwnerOf(){
	var groupsOwnerOf = WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroupsOwnerOf",
		parameters : [user.userID]
	});
	
	for(var i=0; i < groupsOwnerOf.resultSet.length; i++){
		if(groupsOwnerOf.resultSet[i].country != null){
			var country = WL.Server.invokeSQLStoredProcedure({
				procedure : "getCountryByID",
				parameters : [groupsOwnerOf.resultSet[i].country]
			});
			
			groupsOwnerOf.resultSet[i].countryName = country.resultSet[0].countries_name;
		} else {
			groupsOwnerOf.resultSet[i].countryName = 'N/A';
		}
		
		if(groupsOwnerOf.resultSet[i].state != null){
			var state = WL.Server.invokeSQLStoredProcedure({
				procedure : "getStateByID",
				parameters : [groupsOwnerOf.resultSet[i].state]
			});

			groupsOwnerOf.resultSet[i].stateName = state.resultSet[0].state_name;
		} else {
			groupsOwnerOf.resultSet[i].stateName = 'N/A';
		}

	}
	return groupsOwnerOf;

}

function getGroupUsers(groupID) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroupUsers",
		parameters : [groupID]
	});
}

// Forms related functions

function getStateList(countryID) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getStateList",
		parameters : [countryID]
	});
}

function getStateByID(stateID) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getStateByID",
		parameters : [stateID]
	});
}

function getCountryList() {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getCountryList",
		parameters : []
	});
}

function getCountryByID(countryID) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getCountryByID",
		parameters : [countryID]
	});
}

//Material related functions

function createMaterial(name, description, measure){
	WL.Logger.warn("createMaterial");
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "createMaterial",
		parameters : [name, description, measure]
	});
}

function getMaterials() {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getMaterials",
		parameters : []
	});
}

//Item related functions

function getItemDuplicates(name, description) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getItemDuplicates",
		parameters : [name, description]
	});
}

function getItems() {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getItems",
		parameters : []
	});
}

function createItem(name, description, barcode, materials) {
	WL.Logger.warn("createItem");

	WL.Logger.warn(name);
	
	WL.Logger.warn(description);
	
	WL.Logger.warn(barcode);
	
	WL.Logger.warn(materials);

	var getCreateItemResult = WL.Server.invokeSQLStoredProcedure({
		procedure : "createItem",
		parameters : [name, description, barcode]
	});

	WL.Logger.warn(getCreateItemResult);

	WL.Logger.warn(materials);

	for (var i = 0; i < materials.length; i++) {
		var material = materials[i];
		
		WL.Logger.warn(getCreateItemResult.resultSet[0].itemID);
		
		WL.Logger.warn(material);

		if (material.quantity > 0) {
			WL.Server.invokeSQLStoredProcedure({
				procedure : "createItemToMaterialMakeup",
				parameters : [getCreateItemResult.resultSet[0].itemID, material.materialID, material.quantity]
			});
		}
	}
	
	return {result: "success"};
}

// Dashboard 

function getGroupsOverallActivity(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroupsOverallActivity",
		parameters : []
	});
}


function getYTDGroupsOverallActivity(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getYTDGroupsOverallActivity",
		parameters : []
	});
}

// Dashboard

function getUsersOverallScoreboard(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getUsersOverallScoreboard",
		parameters : []
	});
}

function getGroupsOverallScoreboard(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroupsOverallScoreboard",
		parameters : []
	});
}

function getTotalUsers(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getTotalUsers",
		parameters : []
	});
}

function getTotalGroups(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getTotalGroups",
		parameters : []
	});
}

function getTotalRecyclingActions(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getTotalRecyclingActions",
		parameters : []
	});
}

//Contest
function getCreateContestGroups(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getCreateContestGroups",
		parameters : [user.userID]
	});
}
function createNewContest(contestName, prize, groups, contestType, threshold, ends, material, boundary, dateFrom, dateTo){
    if(groups.length < 1 || contestName == undefined || prize == undefined ||  groups == undefined || contestType == undefined || threshold == undefined ||
    		ends == undefined || material == undefined || boundary == undefined || dateFrom == undefined || dateTo  == undefined){
    	return {result: "error"};
    }
    
    var getContestID = WL.Server.invokeSQLStoredProcedure({
	    procedure : "createNewContest",
	 	parameters : [contestName, prize, contestType, threshold, ends, material, boundary, dateFrom, dateTo, user.userID]
	 });
    WL.Logger.warn();
    WL.Logger.warn(getContestID);
    WL.Logger.warn(getContestID.resultSet[0].contestID);
	for(var i = 0; i < groups.length; i++){
	     WL.Logger.warn(groups[i].groupID);
		 WL.Server.invokeSQLStoredProcedure({
		    procedure : "setContestToGroup",
		 	parameters : [getContestID.resultSet[0].contestID, groups[i].groupID]
		 });
	}
	
	return {result: "success"};
}

function getBoundaries(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getBoundaries",
		parameters : []
	});
}

function getContestType(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getContestType",
		parameters : []
	});
}

function getContestEnds(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getContestEnds",
		parameters : []
	});
}

// Recycling Action related functions

function createRecyclingAction(itemID, groupID, lat, lng, quantity) {
	WL.Logger.warn("createRecyclingAction");

	var currentdate = new Date(); 

	var dateTime = String(
						currentdate.getFullYear() + 
						pad2((currentdate.getMonth()+1)) + 
						pad2(currentdate.getDate()) +
						pad2(currentdate.getHours()) +  
						pad2(currentdate.getMinutes()) +
						pad2(currentdate.getSeconds())
	);

	WL.Logger.warn(itemID);

	WL.Logger.warn(groupID);

	WL.Logger.warn(dateTime);
	
	WL.Logger.warn(quantity);

	if (
			(lat) &&  
			(lng) 
	) {
		WL.Logger.warn('defined path');
		
		return WL.Server.invokeSQLStoredProcedure({
			procedure : "createRecyclingAction",
			parameters : [itemID, user.userID, groupID, lat, lng, dateTime, quantity]
		});
	} else {
		WL.Logger.warn('undefined path');
		
		return WL.Server.invokeSQLStoredProcedure({
			procedure : "createRecyclingAction",
			parameters : [itemID, user.userID, groupID, null, null, dateTime, quantity]
		});
	}
}

// user_role related

function getUserRole(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getUserRole",
		parameters : [user.userRoleID]
	});
}

// user_group_request related functions

function createUserGroupRequest(groupID){
	WL.Logger.warn("createUserGroupRequest");
	
	var currentdate = new Date(); 

	var dateTime = String(
						currentdate.getFullYear() + 
						pad2((currentdate.getMonth()+1)) + 
						pad2(currentdate.getDate()) +
						pad2(currentdate.getHours()) +  
						pad2(currentdate.getMinutes()) +
						pad2(currentdate.getSeconds())
	);

	return WL.Server.invokeSQLStoredProcedure({
		procedure : "createUserGroupRequest",
		parameters : [groupID, user.userID, dateTime]
	});
}

function acceptUserGroupRequest(groupID, userID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "acceptUserGroupRequest",
		parameters : [groupID, userID]
	});
}

function rejectUserGroupRequest(groupID, userID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "rejectUserGroupRequest",
		parameters : [groupID, userID]
	});
}

// accept_user_groups_view related functions

function getAcceptUserGroupsView(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getAcceptUserGroupsView",
		parameters : [user.userID]
	});
}

//accept_user_users_view related functions

function getAcceptUserUsersView(groupID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getAcceptUserUsersView",
		parameters : [groupID]
	});
}

