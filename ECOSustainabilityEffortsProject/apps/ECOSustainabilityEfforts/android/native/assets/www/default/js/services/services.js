
/* JavaScript content from js/services/services.js in folder common */
app.factory ( 
	"globalVariablesFactory",
	function() {
		return {
			sharedObject: {
				groupID: null,
				myGroupID: null,
				
				newItemDuplicatesController_name: null,
				newItemDuplicatesController_description: null,
				newItemDuplicatesController_barcode: null,

				newItemStepTwoController_name: null,
				newItemStepTwoController_description: null,
				newItemStepTwoController_barcode: null,
				
				acceptUserUsers_group: null
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
		return function(firstName, lastName, userName, password, email)
		{
			console.log("createUserFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "createUser",
				parameters: [firstName, lastName, userName, password, email]
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
				adapter : "ECOSustainabilityEffortsSQLAdapter",
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
		return function(userid, username, fname, lname, email, password)
		{
			console.log("updateUserProfileFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "updateUserProfile",
				parameters: [userid, username, fname, lname, email, password]
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
		return function(groupname, email, address1, address2, city, state, 
							 country, zip, geoTag, radius)
		{
			console.log("createNewGroupFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "createNewGroupProfile",
				parameters: [groupname, email, address1, address2, city, state, 
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
		return function(groupid, groupname, email, address1, address2, city, state, 
							 country, zip, geoTag, radius)
		{
			console.log("updateGroupProfileFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "updateGroupProfile",
				parameters: [groupid, groupname, email, address1, address2, city, state, 
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
				adapter : "ECOSustainabilityEffortsSQLAdapter",
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
		return function()
		{
			console.log("getGroupsMemberOfFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getGroupsMemberOf",
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
	"getGroupsFactory",
	function($q)
	{
		return function()
		{
			console.log("getGroupsFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getGroups",
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
								console.log("getGroupsFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getGroupsFactory onError");

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
		return function()
		{
			console.log("getGroupsNotMemberOfFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getGroupsNotMemberOf",
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
		return function()
		{
			console.log("getGroupsOwnerOfFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getGroupsOwnerOf",
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
				adapter : "ECOSustainabilityEffortsSQLAdapter",
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
				adapter : "ECOSustainabilityEffortsSQLAdapter",
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
		return function(countryID)
		{
			console.log("getStatesFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getStateList",
				parameters: [countryID]
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
								console.log("state list onError");

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

// Material related functions

app.factory
(
	"createMaterialFactory",
	function($q, $timeout)
	{
		return function(name, description, measure)
		{
			console.log("createMaterialFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "createMaterial",
				parameters: [name, description, measure]
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
								console.log("createMaterialFactory onSuccess");
								
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
								console.log("createMaterialFactory onFailure");

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
	"getMaterialsFactory",
	function($q, $timeout)
	{
		return function(name, description, measure)
		{
			console.log("getMaterialsFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getMaterials",
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
								console.log("getMaterialsFactory onSuccess");
								
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
								console.log("getMaterialsFactory onFailure");

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

// Dashboard

app.factory
(
	"getGroupsOverallActivityFactory",
	function($q)
	{
		return function()
		{
			console.log("getGroupsOverallActivityFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getGroupsOverallActivity",
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
								console.log("recycling activity onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("recycling activity onError");

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
	"getYTDGroupsOverallActivityFactory",
	function($q)
	{
		return function()
		{
			console.log("getYTDGroupsOverallActivityFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getYTDGroupsOverallActivity",
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
								console.log("ytd recycling activity onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("ytd recycling activity onError");

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
	"getUsersOverallScoreboardFactory",
	function($q)
	{
		return function()
		{
			console.log("getUsersOverallScoreboardFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getUsersOverallScoreboard",
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
								console.log("user scoreboard onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("user scoreboard onError");

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
	"getGroupsOverallScoreboardFactory",
	function($q)
	{
		return function()
		{
			console.log("getGroupsOverallScoreboardFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getGroupsOverallScoreboard",
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
								console.log("user scoreboard onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("user scoreboard onError");

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

// Item related functions

app.factory
(
	"getTotalGroupsFactory",
	function($q)
	{
		return function()
		{
			console.log("getTotalGroupsFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getTotalGroups",
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
								console.log("getTotalGroupsFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getTotalGroupsFactory onError");

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
	"getTotalUsersFactory",
	function($q)
	{
		return function()
		{
			console.log("getTotalUsersFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getTotalUsers",
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
								console.log("getTotalUsersFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getTotalUsersFactory onError");

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
	"getTotalRecyclingActionsFactory",
	function($q)
	{
		return function()
		{
			console.log("getTotalRecyclingActionsFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getTotalRecyclingActions",
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
								console.log("getTotalRecyclingActionsFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getTotalRecyclingActionsFactory onError");

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
	"getItemsFactory",
	function($q, $timeout)
	{
		return function()
		{
			console.log("getItemsFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getItems",
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
								console.log("getItemsFactory onSuccess");
								
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
								console.log("getItemsFactory onFailure");

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
	"getItemDuplicatesFactory",
	function($q, $timeout)
	{
		return function(name, description)
		{
			console.log("getItemDuplicatesFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getItemDuplicates",
				parameters: [name, description]
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
								console.log("getItemDuplicatesFactory onSuccess");
								
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
								console.log("getItemDuplicatesFactory onFailure");

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

// Item_To_Material_Makeup related functions

app.factory
(
	"createItemFactory",
	function($q, $timeout)
	{
		return function(name, description, barcode, materials)
		{
			console.log("createItemFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "createItem",
				parameters: [name, description, barcode, materials]
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
								console.log("createItemFactory onSuccess");
								
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
								console.log("createItemFactory onFailure");

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

//Contest related functions

app.factory
(
	"getCreateContestGroupsFactory",
	function($q, $timeout)
	{
		return function()
		{
			console.log("getCreateContestGroupsFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getCreateContestGroups",
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
								console.log("getCreateContestGroupsFactory onSuccess");
								
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
								console.log("getCreateContestGroupsFactory onFailure");

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
	"createNewContestFactory",
	function($q, $timeout)
	{
		return function(contestName, prize, groups, contestType, threshold, ends, material, boundary, dateFrom, dateTo)
		{
			console.log("createNewContestFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "createNewContest",
				parameters: [contestName, prize, groups, contestType, threshold, ends, material, boundary, dateFrom, dateTo]
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
								console.log("createNewContestFactory onSuccess");
								
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
								console.log("createNewContestFactory onFailure");

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
	"getBoundariesFactory",
	function($q, $timeout)
	{
		return function()
		{
			console.log("getBoundariesFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getBoundaries",
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
								console.log("getBoundariesFactory onSuccess");
								
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
								console.log("getBoundariesFactory onFailure");

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
	"getContestTypeFactory",
	function($q, $timeout)
	{
		return function()
		{
			console.log("getContestTypeFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getContestType",
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
								console.log("getContestTypeFactory onSuccess");
								
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
								console.log("getContestTypeFactory onFailure");

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
	"getContestEndsFactory",
	function($q, $timeout)
	{
		return function()
		{
			console.log("getContestEndsFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getContestEnds",
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
								console.log("getContestEndsFactory onSuccess");
								
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
								console.log("getContestEndsFactory onFailure");

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

// recycling_action related functions

app.factory
(
	"createRecyclingActionFactory",
	function($q, $timeout)
	{
		return function(itemID, groupID, lat, lng, quantity)
		{
			console.log("createRecyclingActionFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "createRecyclingAction",
				parameters: [itemID, groupID, lat, lng, quantity]
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
								console.log("createItemFactory onSuccess");
								
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
								console.log("createItemFactory onFailure");

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

// user_role related functions

app.factory
(
	"getUserRoleFactory",
	function($q, $timeout)
	{
		return function()
		{
			console.log("getUserRoleFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getUserRole",
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
								console.log("getUserRoleFactory onSuccess");
								
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
								console.log("getUserRoleFactory onFailure");

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

// user_group_request related functions

app.factory
(
	"createUserGroupRequestFactory",
	function($q, $timeout)
	{
		return function(groupID)
		{
			console.log("createUserGroupRequestFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "createUserGroupRequest",
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
								console.log("createUserGroupRequestFactory onSuccess");
								
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
								console.log("createUserGroupRequestFactory onFailure");

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
	"acceptUserGroupRequestFactory",
	function($q, $timeout)
	{
		return function(groupID, userID)
		{
			console.log("acceptUserGroupRequestFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "acceptUserGroupRequest",
				parameters: [groupID, userID]
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
								console.log("acceptUserGroupRequestFactory onSuccess");
								
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
								console.log("acceptUserGroupRequestFactory onFailure");

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
	"rejectUserGroupRequestFactory",
	function($q, $timeout)
	{
		return function(groupID, userID)
		{
			console.log("rejectUserGroupRequestFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "rejectUserGroupRequestFactory",
				parameters: [groupID, userID]
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
								console.log("rejectUserGroupRequestFactory onSuccess");
								
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
								console.log("rejectUserGroupRequestFactory onFailure");

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

// accept_user_groups_view related functions

app.factory
(
	"getAcceptUserGroupsViewFactory",
	function($q, $timeout)
	{
		return function()
		{
			console.log("getAcceptUserGroupsViewFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getAcceptUserGroupsView",
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
								console.log("getAcceptUserGroupsViewFactory onSuccess");
								
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
								console.log("getAcceptUserGroupsViewFactory onFailure");

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

// accept_user_users_view related functions

app.factory
(
	"getAcceptUserUsersViewFactory",
	function($q, $timeout)
	{
		return function(groupID)
		{
			console.log("getAcceptUserUsersViewFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getAcceptUserUsersView",
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
								console.log("getAcceptUserUsersViewFactory onSuccess");
								
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
								console.log("getAcceptUserUsersViewFactory onFailure");

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

