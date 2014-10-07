
function saveUserProfile(username, fname, lname, email, password) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "save_user_profile",
		parameters : [username, fname, lname, email, password]
	});
}
