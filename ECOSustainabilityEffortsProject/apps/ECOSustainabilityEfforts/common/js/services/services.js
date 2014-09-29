app.factory
(
	"getSessionData",
	function($q)
	{
		return function()
		{
			alert("getSessionData");

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
