app.factory
(
	"getSessionDataFactory",
	function($q)
	{
		return function()
		{
			console.log("getSessionDataFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "SingleStepAuthAdapter",
				procedure: "getSessionData",
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
								console.log("getSessionDataFactory onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								alert("getSessionDataFactory onError");

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
	"submitNewUserFactory",
	function($q)
	{
		return function(firstName, lastName, userName, email, password)
		{
			console.log("submitNewUserFactory");

			var deferred = $q.defer();

			var invocationData = 
			{
				adapter : "SingleStepAuthAdapter",
				procedure: "submitNewUser",
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
								alert("onSuccess");
								
								deferred.resolve(session);
							},
							this
						),
					onFailure :  
						$.proxy(
							function(error)
							{
								alert("onError");

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
