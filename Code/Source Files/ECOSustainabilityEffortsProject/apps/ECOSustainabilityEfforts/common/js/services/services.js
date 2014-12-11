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

// ECOSustainabilityEffortsGeoCodingAdapter related functions

app.factory
(
	"getGmapLatLngFactory",
	function($q)
	{
		return function(address)
		{
			console.log("createUserFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsGeoCodingAdapter",
				procedure: "getGmapLatLng",
				parameters: [address]
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
								console.log("getGmapLatLngFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getGmapLatLngFactory onFailure");

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

// User related functions

app.factory
(
	"createUserFactory",
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("createUserFactory onFailure");

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
	"getUserDetailsFactory",
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getUserDetailsFactory onError");

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
		return function(groupname, email, address1, address2, city, stateID, countryID, zipCode, geoTag, radius, lat, lng)
		{
			console.log("createNewGroupFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "createNewGroupProfile",
				parameters: [groupname, email, address1, address2, city, stateID, countryID, zipCode, geoTag, radius, lat, lng]
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
		return function(groupid, groupname, email, address1, address2, city, stateID, countryID, zipCode, geoTag, radius, lat, lng)
		{
			console.log("updateGroupProfileFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "updateGroupProfile",
				parameters: [groupid, groupname, email, address1, address2, city, stateID, countryID, zipCode, geoTag, radius, lat, lng]
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
								console.log("updateGroupProfileFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("updateGroupProfileFactory onError");

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
	function($q)
	{
		return function(groupID)
		{
			console.log("getGroupProfileFactory");

			console.log(groupID);

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getGroupProfile",
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
	function($q)
	{
		return function(groupID)
		{
			console.log("getGroupUsersFactory");

			var deferred = $q.defer();
			
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
								console.log("getCountriesFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getCountriesFactory onFailure");

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
								console.log("getStatesFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getStatesFactory onError");

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
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("createMaterialFactory onFailure");

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
	"getMaterialsFactory",
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getMaterialsFactory onFailure");

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

app.factory
(
	"getRecycledItemsDashboardFactory",
	function($q)
	{
		return function()
		{
			console.log("getRecycledItemsDashboardFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getRecycledItemsDashboard",
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
								console.log("getRecycledItemsDashboardFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getRecycledItemsDashboardFactory onError");

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
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getItemsFactory onFailure");

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
	"getItemDuplicatesFactory",
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getItemDuplicatesFactory onFailure");

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

// Item_To_Material_Makeup related functions

app.factory
(
	"createItemFactory",
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("createItemFactory onFailure");

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

//Contest related functions

app.factory
(
	"getCreateContestGroupsFactory",
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getCreateContestGroupsFactory onFailure");

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
	"createNewContestFactory",
	function($q)
	{
		return function(contestName, prize, groups, threshold, ends, material, boundary, radius, dateFrom, dateTo)
		{
			console.log("createNewContestFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "createNewContest",
				parameters: [contestName, prize, groups, threshold, ends, material, boundary, radius, dateFrom, dateTo]
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("createNewContestFactory onFailure");

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
	"getBoundariesFactory",
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getBoundariesFactory onFailure");

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
	"getContestEndsFactory",
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getContestEndsFactory onFailure");

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
	"getContestsFactory",
	function($q)
	{
		return function()
		{
			console.log("getContestsFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getContests",
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
								console.log("getContestsFactory onSuccess");
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getContestsFactory onFailure");

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
	"getContestActivityFactory",
	function($q)
	{
		return function(contestID)
		{
			console.log("getContestActivityFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getContestActivity",
				parameters: [contestID]
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
								console.log("getContestActivityFactory onSuccess");
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getContestActivityFactory onFailure");

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
	"getContestWinnerFactory",
	function($q)
	{
		return function(contestID)
		{
			console.log("getContestWinnerFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getContestWinner",
				parameters: [contestID]
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
								console.log("getContestWinnerFactory onSuccess");
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getContestWinnerFactory onFailure");

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

// recycling_action related functions

app.factory
(
	"createRecyclingActionFactory",
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("createItemFactory onFailure");

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

// user_role related functions

app.factory
(
	"getUserRoleFactory",
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getUserRoleFactory onFailure");

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

// user_group_request related functions

app.factory
(
	"createUserGroupRequestFactory",
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("createUserGroupRequestFactory onFailure");

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
	"acceptUserGroupRequestFactory",
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("acceptUserGroupRequestFactory onFailure");

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
	"rejectUserGroupRequestFactory",
	function($q)
	{
		return function(groupID, userID)
		{
			console.log("rejectUserGroupRequestFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "rejectUserGroupRequest",
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("rejectUserGroupRequestFactory onFailure");

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

// accept_user_groups_view related functions

app.factory
(
	"getAcceptUserGroupsViewFactory",
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getAcceptUserGroupsViewFactory onFailure");

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

// accept_user_users_view related functions

app.factory
(
	"getAcceptUserUsersViewFactory",
	function($q)
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
								
										deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getAcceptUserUsersViewFactory onFailure");

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

// user_to_group related functions

app.factory
(
	"updateUserToGroupFactory",
	function($q)
	{
		return function(groupid, userid, userRoleID)
		{
			console.log("updateUserToGroupFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "updateUserToGroup",
				parameters: [groupid, userid, userRoleID]
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
								console.log("updateJoinedGroupUserFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("updateJoinedGroupUserFactory onError");

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

// group_role related functions

app.factory
(
	"getGroupRolesFactory",
	function($q)
	{
		return function()
		{
			console.log("getGroupRolesFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getGroupRoles",
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
								console.log("getGroupRolesFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getGroupRolesFactory onFailure");

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

// joined_group_users_view related functions

app.factory
(
	"getJoinedGroupUsersViewFactory",
	function($q)
	{
		return function(groupID)
		{
			console.log("getJoinedGroupUsersViewFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getJoinedGroupUsersView",
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
								console.log("getJoinedGroupUsersViewFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								console.log("getJoinedGroupUsersViewFactory onFailure");

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

// Groups Filter Dashboard related functions

app.factory
(
	"getGroupstoFilterDashboardFactory",
	function($q, $timeout)
	{
		return function()
		{
			console.log("getGroupstoFilterDashboardFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getGroupstoFilterDashboard",
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
								console.log("getGroupstoFilterDashboardFactory onSuccess");
								
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
								console.log("getGroupstoFilterDashboardFactory onFailure");

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
	"userScoreboardGetSelectedGroupFactory",
	function($q, $timeout)
	{
		return function(groupID)
		{
			console.log("userScoreboardGetSelectedGroupFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "userScoreboardGetSelectedGroup",
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
								console.log("userScoreboardGetSelectedGroupFactory onSuccess");
								
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
								console.log("userScoreboardGetSelectedGroupFactory onFailure");

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
	"groupScoreboardGetSelectedGroupFactory",
	function($q, $timeout)
	{
		return function(groupID)
		{
			console.log("groupScoreboardGetSelectedGroupFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "groupScoreboardGetSelectedGroup",
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
								console.log("groupScoreboardGetSelectedGroupFactory onSuccess");
								
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
								console.log("groupScoreboardGetSelectedGroupFactory onFailure");

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
	"itemsBoardGetSelectedGroupFactory",
	function($q, $timeout)
	{
		return function(groupID)
		{
			console.log("itemsBoardGetSelectedGroupFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "itemsBoardGetSelectedGroup",
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
								console.log("itemsBoardGetSelectedGroupFactory onSuccess");
								
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
								console.log("itemsBoardGetSelectedGroupFactory onFailure");

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
	"getTotalUsersSelectedGroupFactory",
	function($q, $timeout)
	{
		return function(groupID)
		{
			console.log("getTotalUsersSelectedGroupFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getTotalUsersSelectedGroup",
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
								console.log("getTotalUsersSelectedGroupFactory onSuccess");
								
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
								console.log("getTotalUsersSelectedGroupFactory onFailure");

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
	"getTotalRecyclingActionsSelectedGroupFactory",
	function($q, $timeout)
	{
		return function(groupID)
		{
			console.log("getTotalRecyclingActionsSelectedGroup");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getTotalRecyclingActionsSelectedGroup",
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
								console.log("getTotalRecyclingActionsSelectedGroup onSuccess");
								
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
								console.log("getTotalRecyclingActionsSelectedGroup onFailure");

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
	"getYTDSelectedGroupOverallActivityFactory",
	function($q, $timeout)
	{
		return function(groupID)
		{
			console.log("getYTDSelectedGroupOverallActivityFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getYTDSelectedGroupOverallActivity",
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
								console.log("getYTDSelectedGroupOverallActivityFactory onSuccess");
								
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
								console.log("getYTDSelectedGroupOverallActivityFactory onFailure");

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
	"getUsersActivitySelectedGroupFactory",
	function($q, $timeout)
	{
		return function(groupID)
		{
			console.log("getUsersActivitySelectedGroupFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getUsersActivitySelectedGroup",
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
								console.log("getUsersActivitySelectedGroupFactory onSuccess");
								
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
								console.log("getUsersActivitySelectedGroupFactory onFailure");

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

// Users Filter Dashboard related functions
app.factory
(
	"getUserstoFilterDashboardFactory",
	function($q, $timeout)
	{
		return function()
		{
			console.log("getUserstoFilterDashboardFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getUserstoFilterDashboard",
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
								console.log("getUserstoFilterDashboardFactory onSuccess");
								
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
								console.log("getUserstoFilterDashboardFactory onFailure");

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
	"getTotalGroupsSelectedUserFactory",
	function($q, $timeout)
	{
		return function(userID)
		{
			console.log("getTotalGroupsSelectedUserFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getTotalGroupsSelectedUser",
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
								console.log("getTotalGroupsSelectedUserFactory onSuccess");
								
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
								console.log("getTotalGroupsSelectedUserFactory onFailure");

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
	"getTotalRecyclingActionsSelectedUserFactory",
	function($q, $timeout)
	{
		return function(userID)
		{
			console.log("getTotalRecyclingActionsSelectedUserFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getTotalRecyclingActionsSelectedUser",
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
								console.log("getTotalRecyclingActionsSelectedUserFactory onSuccess");
								
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
								console.log("getTotalRecyclingActionsSelectedUserFactory onFailure");

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
	"userScoreboardGetSelectedUserFactory",
	function($q, $timeout)
	{
		return function(userID)
		{
			console.log("userScoreboardGetSelectedUserFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "userScoreboardGetSelectedUser",
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
								console.log("userScoreboardGetSelectedUserFactory onSuccess");
								
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
								console.log("userScoreboardGetSelectedUserFactory onFailure");

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
	"groupScoreboardGetSelectedUserFactory",
	function($q, $timeout)
	{
		return function(userID)
		{
			console.log("groupScoreboardGetSelectedUserFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "groupScoreboardGetSelectedUser",
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
								console.log("groupScoreboardGetSelectedUser onSuccess");
								
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
								console.log("groupScoreboardGetSelectedUser onFailure");

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
	"itemsBoardGetSelectedUserFactory",
	function($q, $timeout)
	{
		return function(userID)
		{
			console.log("itemsBoardGetSelectedUserFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "itemsBoardGetSelectedUser",
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
								console.log("itemsBoardGetSelectedUserFactory onSuccess");
								
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
								console.log("itemsBoardGetSelectedUserFactory onFailure");

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
	"getGroupsActivitySelectedUserFactory",
	function($q, $timeout)
	{
		return function(userID)
		{
			console.log("getGroupsActivitySelectedUserFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getGroupsActivitySelectedUser",
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
								console.log("getGroupsActivitySelectedUserFactory onSuccess");
								
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
								console.log("getGroupsActivitySelectedUserFactory onFailure");

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
	"getYTDSelectedUserOverallActivityFactory",
	function($q, $timeout)
	{
		return function(userID)
		{
			console.log("getYTDSelectedUserOverallActivityFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "ECOSustainabilityEffortsSQLAdapter",
				procedure: "getYTDSelectedUserOverallActivity",
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
								console.log("getYTDSelectedUserOverallActivityFactory onSuccess");
								
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
								console.log("getYTDSelectedUserOverallActivityFactory onFailure");

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
