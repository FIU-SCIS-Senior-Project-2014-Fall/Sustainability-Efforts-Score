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

function createNewGroupProfile(groupName, email, address1, address2, city, stateID, countryID, zip, geoTag, radius, lat, lng) {
	WL.Logger.warn('createNewGroupProfile');

	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'createNewGroupProfile',
		parameters : [groupName, user.userID, email, address1, address2, city, stateID, countryID, zip, geoTag, radius, lat, lng]
	});
}

function updateGroupProfile(groupid, groupname, email, address1, address2, city, stateID, countryID, zip, geoTag, radius, lat, lng) {
	WL.Logger.warn('updateGroupProfile');
		
	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'updateGroupProfile',
		parameters : [groupid, groupname, email, address1, address2, city, stateID, countryID, zip, geoTag, radius, lat, lng]
	});
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

// joined_group_users_view related functions

function getJoinedGroupUsersView(groupID) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getJoinedGroupUsersView",
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

function getRecycledItemsDashboard(){
	WL.Logger.warn('getting recycled items dashboard');
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getRecycledItemsDashboard",
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
function createNewContest(contestName, prize, groups, threshold, ends, material, boundary, radius, dateFrom, dateTo){
	WL.Logger.warn(contestName);
	WL.Logger.warn(prize);
	WL.Logger.warn(groups);
	WL.Logger.warn(threshold);
	WL.Logger.warn(ends);
	WL.Logger.warn(material);
	WL.Logger.warn(boundary);
	WL.Logger.warn(radius);
	WL.Logger.warn(dateFrom);
	WL.Logger.warn(dateTo);
	
    if(groups.length < 1 || !contestName ||  !groups || !threshold || !material || !dateFrom || !dateTo){
    	return {result: "error", error: "true"};
    }
    
    var getContestID = WL.Server.invokeSQLStoredProcedure({
	    procedure : "createNewContest",
	 	parameters : [contestName, prize, threshold, 1, material, boundary, radius, dateFrom, dateTo, user.userID, 1]
	 });
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


function getContestEnds(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getContestEnds",
		parameters : []
	});
}

function getContests(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getContests",
		parameters : []
	});
}

function getContestActivity(contestID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getContestActivity",
		parameters : [contestID]
	});
}

function getContestWinner(contestID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getContestWinner",
		parameters : [contestID]
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
	
	WL.Logger.warn(lat);

	WL.Logger.warn(lng);

	WL.Logger.warn(quantity);

	if (
			(lat) &&  
			(lng) 
	) {
		WL.Logger.warn('defined path');
		
		var recActionID = WL.Server.invokeSQLStoredProcedure({
			procedure : "createRecyclingAction",
			parameters : [itemID, user.userID, groupID, lat, lng, dateTime, quantity]
		});
	} else {
		WL.Logger.warn('undefined path');
		
		var recActionID = WL.Server.invokeSQLStoredProcedure({
			procedure : "createRecyclingAction",
			parameters : [itemID, user.userID, groupID, null, null, dateTime, quantity]
		});
	}
	

	//contest logic
	WL.Logger.warn('groupID ' + groupID);
	var contests =  WL.Server.invokeSQLStoredProcedure({
	    procedure : "getActiveContestsForGroup",
	 	parameters : [groupID]
	 });
	WL.Logger.warn('length ' + contests.resultSet.length);
	
	WL.Logger.warn('itemID ' + itemID);
	var actionMaterial =  WL.Server.invokeSQLStoredProcedure({
	    procedure : "getRecyclingActionMaterials",
	 	parameters : [itemID]
	 });
	WL.Logger.warn('actMaterial ' + actionMaterial.resultSet.length);
	
	
	//if materials matching
	var validContests = [];
	for(var i = 0; i < contests.resultSet.length; i++){
		WL.Logger.warn('contest mat id');
		WL.Logger.warn(contests.resultSet[i].materialID);
		for(var j = 0; j < actionMaterial.resultSet.length; j++){
			if(actionMaterial.resultSet[j].materialID == contests.resultSet[i].materialID){
				WL.Logger.warn('act mat id');
				WL.Logger.warn(actionMaterial.resultSet[j].materialID);
				if(contests.resultSet[i].boundaryTypeID == 2){//location type
					if(!lat || !lng){
						continue;
					}
					var groupConfig =  WL.Server.invokeSQLStoredProcedure({
					    procedure : "getGroupProfile",
					 	parameters : [groupID]
					 });
					if(groupConfig.resultSet[0].lat && groupConfig.resultSet[0].lng && (groupConfig.resultSet[0].lat - lat)*(groupConfig.resultSet[0].lat - lat) + 
							(groupConfig.resultSet[0].lng - lng)*(groupConfig.resultSet[0].lng - lng) > 
								contests.resultSet[i].radius*contests.resultSet[i].radius){
						continue;
					}
				}
				validContests.push(contests.resultSet[i]);
				WL.Logger.warn(validContests.length);
				
			}
		}
	}


	WL.Logger.warn(validContests.length);
	var winner = "false";
	var won_contests = [];
	for(var i = 0; i < validContests.length; i++){
		//add recycling action to action_to_contest
		WL.Logger.warn(validContests[i]);
		var actionToContest =  WL.Server.invokeSQLStoredProcedure({
		    procedure : "createActionToContest",
		 	parameters : [recActionID.resultSet[0].lastRecAction, validContests[i].contestID, user.userID, quantity]
		 });
		WL.Logger.warn(actionToContest.resultSet);
		
		//if contest type is first user, check if this user is winner
		if(validContests[i].contestEndsName == "First User Reaches Threshold"){
			var reachedThreshold =  WL.Server.invokeSQLStoredProcedure({
			    procedure : "getContestUserReachedThreshold",
			 	parameters : [validContests[i].contestID, user.userID]
			 });
			WL.Logger.warn(reachedThreshold.resultSet);
			if(reachedThreshold.resultSet[0].reachedThreshold >= validContests[i].threshold){
				var closeContest =  WL.Server.invokeSQLStoredProcedure({
				    procedure : "closeContest",
				 	parameters : [validContests[i].contestID, user.userID, actionToContest.resultSet[0].lastActionToContest]
				 });
				winner = "true";
				won_contests.push(validContests[i].contestName);
			}
		}
	}
	
	return {result: "success", winner: winner, won_contests: won_contests};
	
	
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

// group_role related

function getGroupRoles(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroupRoles",
		parameters : []
	});
}

// user_to_group related functions

function updateUserToGroup(groupid, userid, userRoleID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "updateUserToGroup",
		parameters : [groupid, userid, userRoleID]
	});
}

//Groups Filter Dashboard related funcitons
function getGroupstoFilterDashboard(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroupstoFilterDashboard",
		parameters : []
	});
}

function userScoreboardGetSelectedGroup(groupID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "userScoreboardGetSelectedGroup",
		parameters : [groupID]
	});
}

function groupScoreboardGetSelectedGroup(groupID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "groupScoreboardGetSelectedGroup",
		parameters : [groupID]
	});
}

function itemsBoardGetSelectedGroup(groupID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "itemsBoardGetSelectedGroup",
		parameters : [groupID]
	});
}

function getTotalUsersSelectedGroup(groupID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getTotalUsersSelectedGroup",
		parameters : [groupID]
	});
}

function getTotalRecyclingActionsSelectedGroup(groupID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getTotalRecyclingActionsSelectedGroup",
		parameters : [groupID]
	});
}

function getYTDSelectedGroupOverallActivity(groupID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getYTDSelectedGroupOverallActivity",
		parameters : [groupID]
	});
}

function getUsersActivitySelectedGroup(groupID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getUsersActivitySelectedGroup",
		parameters : [groupID]
	});
}

//Users Filter Dashboard functions
function getUserstoFilterDashboard(){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getUserstoFilterDashboard",
		parameters : []
	});
}

function getTotalGroupsSelectedUser(userID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getTotalGroupsSelectedUser",
		parameters : [userID]
	});
}

function getTotalRecyclingActionsSelectedUser(userID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getTotalRecyclingActionsSelectedUser",
		parameters : [userID]
	});
}

function userScoreboardGetSelectedUser(userID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "userScoreboardGetSelectedUser",
		parameters : [userID]
	});
}

function groupScoreboardGetSelectedUser(userID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "groupScoreboardGetSelectedUser",
		parameters : [userID]
	});
}

function itemsBoardGetSelectedUser(userID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "itemsBoardGetSelectedUser",
		parameters : [userID]
	});
}

function getYTDSelectedUserOverallActivity(userID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getYTDSelectedUserOverallActivity",
		parameters : [userID]
	});
}

function getGroupsActivitySelectedUser(userID){
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getGroupsActivitySelectedUser",
		parameters : [userID]
	});
}