app.controller(
	'recycleLocationNearByController',
	function()
	{
		console.log('recycleLocationNearByController');
	}			
);	

app.directive(
	'gmaps', 
	function() {
		return {
			restrict: 'C', // restrict this directive to css class with name gmaps
			link: function(scope, element, attrs) {
				console.log('gmaps');
				
				console.log('creating handleNoGeolocation');
				
				function handleNoGeolocation(errorFlag) {
					console.log('creating handleNoGeolocation');
					
					var siberia = new google.maps.LatLng(60, 105);
					var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
				
					if (errorFlag) {
						alert('Error: The Geolocation service failed.');
						
						currentPosition = newyork;
				
					} else {
						alert('Error: Your browser doesn\'t support geolocation.');
						
						currentPosition = siberia;
					}

					map.setCenter(currentPosition);

					performSearch();
				}
				
				console.log('creating createMarker');
				
				function createMarker(place) {
					console.log('createMarker');
					
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

				console.log('creating callback');
				
				function callback(results, status) {
					console.log('callback');
					
					if (status == google.maps.places.PlacesServiceStatus.OK) {
						for (var i = 0; i < results.length; i++) {
							createMarker(results[i]);
						}
					} else {
						alert(status);
					}
				}

				console.log('performSearch');
				
				function performSearch() {
					console.log('performSearch');
					
					var request = {
						bounds: map.getBounds(),
						keyword: 'recycle or recycle center or scrap'
					};

					service.radarSearch(request, callback);
				}

				console.log('1');
				
				var map;
				var service;
				var infowindow;
				var currentPosition;
				
				console.log('2');
				
				var mapOtions = 
				{
					zoom: 12
				};
			
				console.log('3');
				
				var mapDiv = document.getElementById('map-canvas'); // element; 
				
				map = new google.maps.Map (
				  	mapDiv, 
				  	mapOtions
				);
			
				console.log('4');
				
				// Try HTML5 geolocation
				if(navigator.geolocation) {
					navigator.geolocation.getCurrentPosition (
						function(position) {
							console.log('getCurrentPosition Success');
							
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
							
							performSearch();
						}, 
						function() {
							console.log('getCurrentPosition Failed');

							handleNoGeolocation(true);
						}
					);
				} else {
					console.log('HTML 5 geolocation Failed');

					// Browser doesn't support Geolocation
					handleNoGeolocation(false);
				}
				
				console.log('5');
				
				infoWindow = new google.maps.InfoWindow();
				
				console.log('6');
				
				service = new google.maps.places.PlacesService(map);
				
				console.log('7');
				
				google.maps.event.addListener(map, 'idle', performSearch);			

				console.log('8');
			}
		}
	}
);