
/* JavaScript content from js/services/services.js in folder common */
app.factory ( 
	"globalVariablesFactory",
	function() {
		return {
			sharedObject: {
				groupID: null,
				myGroupID: null
			} 
		}
	}
);

// User related functions

app.factory
(
	"createUserFactory",
	function($q, $timeout)
	{
		return function(firstName, lastName, userName, email, password)
		{
			console.log("createUserFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "SingleStepAuthAdapter",
				procedure: "createUser",
				parameters: [firstName, lastName, userName, email, password]
			};
			
			WL.Client.invokeProcedure
			(
				invocationData,
				{
					onSuccess : 
						$.proxy
						(
							function(session)
							{
								console.log("createUserFactory onSuccess");
								
								$timeout(
									function() {
										deferred.resolve(session);
									}
								);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("createUserFactory onFailure");

								$timeout(
									function() {
										deferred.reject(error);
									}
								);
							},
							this
						)
				}
			);
			
			return deferred.promise;
		};
	}
);

app.factory
(
	"getUserDetailsFactory",
	function($q, $timeout)
	{
		return function()
		{
			console.log("getUserDetailsFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "SingleStepAuthAdapter",
				procedure: "getUserDetails",
				parameters: []
			};
			
			WL.Client.invokeProcedure
			(
				invocationData,
				{
					onSuccess : 
						$.proxy
						(
							function(session)
							{
								console.log("getUserDetailsFactory onSuccess");
								
								$timeout(
									function() {
										deferred.resolve(session);
									}
								);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getUserDetailsFactory onError");

								$timeout(
									function() {
										deferred.reject(error);
									}
								);
							},
							this
						)
				}
			);
			
			return deferred.promise;
		};
	}
);


app.factory
(
	"updateUserProfileFactory",
	function($q)
	{
		return function(username, fname, lname, email, password)
		{
			console.log("updateUserProfileFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "SingleStepAuthAdapter",
				procedure: "updateUserProfile",
				parameters: [username, fname, lname, email, password]
			};
			
			WL.Client.invokeProcedure
			(
				invocationData,
				{
					onSuccess : 
						$.proxy
						(
							function(session)
							{
								console.log("updateUserProfileFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("updateUserProfileFactory onError");

								deferred.reject(error);
							},
							this
						)
				}
			);
			
			return deferred.promise;
		};
	}
);


// Group related functions

app.factory
(
	"createNewGroupFactory",
	function($q)
	{
		return function(groupname, userid, email, address1, address2, city, state, 
							 country, zip, geoTag, radius)
		{
			console.log("createNewGroupFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "SingleStepAuthAdapter",
				procedure: "createNewGroupProfile",
				parameters: [groupname, userid, email, address1, address2, city, state, 
							 country, zip, geoTag, radius]
			};
			
			WL.Client.invokeProcedure
			(
				invocationData,
				{
					onSuccess : 
						$.proxy
						(
							function(session)
							{
								console.log("create group onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("create group onError");

								deferred.reject(error);
							},
							this
						)
				}
			);
			
			return deferred.promise;
		};
	}
);

app.factory
(
	"updateGroupProfileFactory",
	function($q)
	{
		return function(groupid, groupname, userid, email, address1, address2, city, state, 
							 country, zip, geoTag, radius)
		{
			console.log("updateGroupProfileFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "SingleStepAuthAdapter",
				procedure: "updateGroupProfile",
				parameters: [groupid, groupname, userid, email, address1, address2, city, state, 
							 country, zip, geoTag, radius]
			};
			
			WL.Client.invokeProcedure
			(
				invocationData,
				{
					onSuccess : 
						$.proxy
						(
							function(session)
							{
								console.log("create group onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("create group onError");

								deferred.reject(error);
							},
							this
						)
				}
			);
			
			return deferred.promise;
		};
	}
);

app.factory
(
	"getGroupProfileFactory",
	function($q, globalVariablesFactory)
	{
		return function()
		{
			console.log("getGroupProfileFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "SingleStepAuthAdapter",
				procedure: "getGroupProfile",
				parameters: [globalVariablesFactory.sharedObject.myGroupID]
			};
			
			WL.Client.invokeProcedure
			(
				invocationData,
				{
					onSuccess : 
						$.proxy
						(
							function(session)
							{
								console.log("getGroupProfile onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getGroupProfile onError");

								deferred.reject(error);
							},
							this
						)
				}
			);
			
			return deferred.promise;
		};
	}
);

app.factory
(
	"getGroupsMemberOfFactory",
	function($q)
	{
		return function(userID)
		{
			console.log("getGroupsMemberOfFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "SingleStepAuthAdapter",
				procedure: "getGroupsMemberOf",
				parameters: [userID]
			};
			
			WL.Client.invokeProcedure
			(
				invocationData,
				{
					onSuccess : 
						$.proxy
						(
							function(session)
							{
								console.log("getGroupsMemberOf onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getGroupsMemberOf onError");

								deferred.reject(error);
							},
							this
						)
				}
			);
			
			return deferred.promise;
		};
	}
);

app.factory
(
	"getGroupsNotMemberOfFactory",
	function($q)
	{
		return function(userID)
		{
			console.log("getGroupsNotMemberOfFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "SingleStepAuthAdapter",
				procedure: "getGroupsNotMemberOf",
				parameters: [userID]
			};
			
			WL.Client.invokeProcedure
			(
				invocationData,
				{
					onSuccess : 
						$.proxy
						(
							function(session)
							{
								console.log("getGroupsNotMemberOfFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getGroupsNotMemberOfFactory onFailure");

								deferred.reject(error);
							},
							this
						)
				}
			);
			
			return deferred.promise;
		};
	}
);

app.factory
(
	"getGroupsOwnerOfFactory",
	function($q)
	{
		return function(userID)
		{
			console.log("getGroupsOwnerOfFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "SingleStepAuthAdapter",
				procedure: "getGroupsOwnerOf",
				parameters: [userID]
			};
			
			WL.Client.invokeProcedure
			(
				invocationData,
				{
					onSuccess : 
						$.proxy
						(
							function(session)
							{
								console.log("getGroupsOwnerOfFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getGroupsOwnerOfFactory onFailure");

								deferred.reject(error);
							},
							this
						)
				}
			);
			
			return deferred.promise;
		};
	}
);

app.factory
(
	"getGroupUsersFactory",
	function($q, globalVariablesFactory)
	{
		return function(groupID)
		{
			console.log("getGroupUsersFactory");

			var deferred = $q.defer();
			
			var groupID = globalVariablesFactory.sharedObject.groupID;
			
			console.log(groupID);

			var invocationData = 
			{
				adapter : "SingleStepAuthAdapter",
				procedure: "getGroupUsers",
				parameters: [groupID]
			};
			
			WL.Client.invokeProcedure
			(
				invocationData,
				{
					onSuccess : 
						$.proxy
						(
							function(session)
							{
								console.log("getGroupUsersFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getGroupUsersFactory onFailure");

								deferred.reject(error);
							},
							this
						)
				}
			);
			
			return deferred.promise;
		};
	}
);


//Miscellaneous

app.factory
(
	"getCountriesFactory",
	function($q)
	{
		return function()
		{
			console.log("getCountriesFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "SingleStepAuthAdapter",
				procedure: "getCountryList",
				parameters: []
			};
			
			WL.Client.invokeProcedure
			(
				invocationData,
				{
					onSuccess : 
						$.proxy
						(
							function(session)
							{
								console.log("country list onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("country list onError");

								deferred.reject(error);
							},
							this
						)
				}
			);
			
			return deferred.promise;
		};
	}
);

app.factory
(
	"getStatesFactory",
	function($q)
	{
		return function()
		{
			console.log("getStatesFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "SingleStepAuthAdapter",
				procedure: "getStateList",
				parameters: []
			};
			
			WL.Client.invokeProcedure
			(
				invocationData,
				{
					onSuccess : 
						$.proxy
						(
							function(session)
							{
								console.log("state list onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("state lits onError");

								deferred.reject(error);
							},
							this
						)
				}
			);
			
			return deferred.promise;
		};
	}
);