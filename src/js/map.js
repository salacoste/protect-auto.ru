

		// When the window has finished loading create our google map below
		google.maps.event.addDomListener(window, 'load', init);

		function init() {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 11,

				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(40.6700, -73.9400), // New York

				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
			};

			// Get the HTML DOM element that will contain your map 
			// We are using a div with id="map" seen below in the <body>
			var mapElement = document.getElementById('map');

			// Create the Google Map using our element and options defined above
			var map = new google.maps.Map(mapElement, mapOptions);


			var pin = [];


			var markersPins = [];

			var activePinIndex = $(".contacts__block.active").data("key");

			function pinsSet (){
				var pinIndex = 0;
				// Let's also add a marker while we're at it
				for (var key in markers) {

					if(activePinIndex == key ){
						var pinIcon = "i/pin.svg";
					}else{
						var pinIcon = "i/pin_dark.svg";
					}
					pinIndex ++;
					pin[key] = new google.maps.Marker({
						position: new google.maps.LatLng(markers[key].position[0], markers[key].position[1]),
						map: map,
						title: markers[key].title,
						id: markers[key].id,
						point: new google.maps.Point(-50,-137),
						icon: pinIcon,
					});
					pin[key].addListener('click', function() {
						$(".contacts__block").removeClass("active");
						$( this.id ).trigger("click");
					});

				}




			}


			function setMapOnAll(map) {
				for (var key in markers) {
					pin[key].setMap(map);
				}
			  }

			pinsSet();
			

		$(".contacts__block").click(function(){
			activePinIndex = $(this).data("key");
			setMapOnAll(null);
			// removeMarker($(this).data("key"))
			// toggleMarker( location, $(this).data("key"));
			$(".contacts__block").removeClass("active");
			$(this).addClass("active");
			console.log(pin);
			pinsSet();
		});
		}