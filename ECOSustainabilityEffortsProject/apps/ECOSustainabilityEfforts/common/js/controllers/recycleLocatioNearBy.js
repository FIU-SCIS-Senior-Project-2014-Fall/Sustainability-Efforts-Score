app.controller(
	'recycleLocationNearByController',
	function($scope)
	{
		console.log('recycleLocationNearByController');
		
		var map;
		var service;
		var infowindow;
		var currentPosition;
		
		function handleNoGeolocation(errorFlag) {
			var siberia = new google.maps.LatLng(60, 105);
			var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
		
			if (errorFlag) {
				console.log('Error: The Geolocation service failed.');
				
				currentPosition = newyork;
		
			} else {
				console.log('Error: Your browser doesn\'t support geolocation.');
				
				currentPosition = siberia;
			}

			map.setCenter(currentPosition);

			performSearch();
		}
		
		function createMarker(place) {
			var marker = new google.maps.Marker (
				{
					map: map,
					position: place.geometry.location,
				}
			);

			google.maps.event.addListener(
				marker, 
				'click', 
				function() {
					service.getDetails(
						place, 
						function(result, status) {
							if (status != google.maps.places.PlacesServiceStatus.OK) {
						      alert(status);
						      
						      return;
						    }
		
							infoWindow.setContent(result.name + "<br />" + result.formatted_address +"<br />" + result.website + "<br />" + result.rating + "<br />" + result.formatted_phone_number);
		
							infoWindow.open(map, marker);
						}
					);
				}
			);
		}

		function callback(results, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				for (var i = 0; i < results.length; i++) {
					createMarker(results[i]);
				}
			} else {
				alert(status);
			}
		}

		function performSearch() {
			var request = {
				bounds: map.getBounds(),
				keyword: 'recycle or recycle center or scrap'
			};

			service.radarSearch(request, callback);
		}
		
		$scope.init = function () {
			console.log('init');
			
			var mapOtions = 
			{
				zoom: 12
			};
		
			var mapDiv = document.getElementById('map-canvas'); 
			
			map = new google.maps.Map (
			  	mapDiv, 
			  	mapOtions
			);
		
			// Try HTML5 geolocation
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition (
					function(position) {
						currentPosition = new google.maps.LatLng (
							position.coords.latitude,
					        position.coords.longitude
						);
					
						var infowindow = new google.maps.InfoWindow (
							{
							    map: map,
							    position: currentPosition,
							    content: 'Location found using HTML5.'
					  		}
					  	);
					
						map.setCenter(currentPosition);
						
						searchNearBy(currentPosition);
					}, 
					function() {
						handleNoGeolocation(true);
					}
				);
			} else {
				// Browser doesn't support Geolocation
				handleNoGeolocation(false);
			}
			
			infoWindow = new google.maps.InfoWindow();
			
			service = new google.maps.places.PlacesService(map);
			
			google.maps.event.addListener(map, 'idle', performSearch);
		}
	}			
);	
