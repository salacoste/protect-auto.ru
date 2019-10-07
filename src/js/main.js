var arrow = '<svg viewBox="0 0 21 12" xmlns="http://www.w3.org/2000/svg"><path d="M19.738.93a.68.68 0 0 0-.961 0l-8.454 8.471-8.47-8.47a.68.68 0 0 0-.962.961l8.935 8.935a.664.664 0 0 0 .48.199.692.692 0 0 0 .48-.2l8.935-8.934a.666.666 0 0 0 .017-.961z"/></svg>';

$("document").ready(function(){

	// $(".header__nav-submenu-button").click(function(){
		
	// 	if( window.innerWidth >= 1024 ){

			
	// 	}else{
	// 		$(this).toggleClass("active").next().slideToggle(200);
	// 	}
	// });
	var menuTimeout;

	$(".header__nav > ul > li").mouseenter(function(){

		if( window.innerWidth >= 1200 ){
			clearTimeout(menuTimeout);
			$(".header__nav-submenu-button").removeClass("active");
			$(".header__nav ul li ul").removeClass("active");
			$(this).children().addClass("active");
			$(this).children().next().css("display", "block").addClass("active");
			// console.log("3214");
		}
	});

	$(".header__nav > ul > li > ul").mouseenter(function(){
		clearTimeout(menuTimeout);
	});

	window.onresize = function(){
		$(".header__nav-submenu-button").removeClass("active");
		$(".header__nav ul li ul").css("display", "none").removeClass("active");
		// console.log("3214");
	};

	$(".header__nav > ul > li").mouseleave(function(){

		menuTimeout = setTimeout(function(){
			if( window.innerWidth >= 1200 ){
				$(".header__nav-submenu-button").removeClass("active");
				$(".header__nav ul li ul").removeClass("active");
			}
		}, 150);

	});

	$(".header__nav > ul > li").click(function(){
		if( window.innerWidth < 1200 ){
			$(this).children().toggleClass("active");
			$(this).children().next().slideToggle(200);
		}
	});

	$(".header__nav-button").click(function(){
		$(".header__nav-block").toggleClass("active");
	});

	$(".header__close-nav").click(function(){
		$(".header__nav-block").removeClass("active");
	});


	if( window.innerWidth < 1260 ){
		$('.js-advantages-slider').owlCarousel({
			loop:false,

			responsive:{
				0: {
					margin: 20,
					items: 1
				},
				520: {
					margin: 20,
					items: 2
				},
				768: {
					margin: 20,
					items: 3
				}
			}
		})
	}

	if( window.innerWidth < 1024 ){
		$('.offers__slider').owlCarousel({
			loop:false,

			responsive:{
				0: {
					margin: 20,
					items: 1
				},
				520: {
					margin: 20,
					items: 2
				}
			}
		})
	}



	$(".products__items").owlCarousel({
		loop:false,
		onInitialized: function(){
			console.log( $(".products__items .owl-dots").wrap("<div class='products__items-dots-wrap'></div>") );
		},
		responsive:{
			0: {
				margin: 20,
				items: 1
			},
			520: {
				margin: 20,
				items: 2
			},
			800: {
				margin: 20,
				items: 3
			},
			1100: {
				margin: 30,
				items: 3,
				nav: true,
				navText: [arrow, arrow]
			}
		}

	})





	menuSwipeStart =function(e) {
		xDown = e.touches[0].clientX;
		yDown = e.touches[0].clientY;
		// console.log("xDown:" + xDown + "   yDown:" + yDown);
	};



	menuSwipeMove = function(e) {
		if ( ! xDown || ! yDown ) {
			return;
		}
	
		var xUp = e.touches[0].clientX;
		var yUp = e.touches[0].clientY;
	
		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;
	

		// alert();
		console.log(xDiff);
		if( xDiff > 10){
			// alert(xDiff);
			$(".header__nav-block").removeClass("active");
		}
		// if{

		// }
		// if(Math.abs( xDiff )+Math.abs( yDiff )>150){
		//  	if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
		// 		if ( xDiff > 0 ) {
		// 			alert('лево');
		// 			console.log("xDiff:" + xDiff);
		// 		}
		// 		//  else 
		// 			// alert('право');
		// 	}
		// }
		//   else {
		// 	if ( yDiff > 0 ) 
		// 		alert('вверх'); 
		// 	 else 
		// 		alert('вниз');
		//   }
		xDown = null;
		yDown = null;
	};
	


	var nav = document.querySelector(".header__nav-block");

	// console.log(nav);
	
	nav.addEventListener('touchstart', menuSwipeStart, false);
	// nav.addEventListener('touchmove', handleTouchMove, false);
	nav.addEventListener('touchmove', menuSwipeMove, false);


	$(document).mouseup(function (e) {
		if(window.innerWidth < 1200){
			var container = $(".header__nav-block");
			if (container.has(e.target).length === 0){
				container.removeClass("active");
			}
		}
	});








	var modalOpen = function(modal){
		$("html, body").css("overflow", "hidden");
		$(modal).fadeIn(200);
	}

	var modalClose = function(){
		$("html, body").css("overflow", "auto");
		$(".modal__video").html("");
		$(".modal").fadeOut(200);
	}

	var videoAdd = function(modal, video){
		// $("html, body").css("overflow", "auto");
		// console.log($(modal).find(".modal__video"));
		$(modal).find(".modal__video").html(video);
	}

	$(".js-modal-video").click(function(){
		// 

		console.log($(this).data("video"));
		modalOpen($(this).data("video-modal"));
		videoAdd( $(this).data("video-modal"), $(this).data("video"))
	});

	$(".js-modal-close, .modal__backing").click(function(){
		modalClose();
	});

	$('.custom-scrollbar').scrollbar();


	$(".prcie__item-button").click(function(){
		$(".prcie__item").removeClass("active");
		$(this).parent().addClass("active");
	});

	$(".technologies__item-button").click(function(){
		$(".technologies__item-button").removeClass("active");
		$(".technologies__item").removeClass("active");
		$(this).parent().addClass("active");
		// $(this).parent().addClass("active");
	});

	$(window).scroll(function(){
		if( window.pageYOffset > 1 && window.innerWidth >= 1200){
			$(".header").addClass("header_scrolled");

		}else{
			$(".header").removeClass("header_scrolled");
		}
	});




	

		// When the window has finished loading create our google map below
		google.maps.event.addDomListener(window, 'load', init);

		function init() {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 9,
				disableDefaultUI: true,

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
			map = new google.maps.Map(mapElement, mapOptions);


			var pin = [];


			var markersPins = [];

			var activePinIndex = $(".contacts__block.active").data("key");

			function pinsSet (){
				var pinIndex = 0;
				// Let's also add a marker while we're at it
				for (var key in markers) {

					if(activePinIndex == key ){
						// var pinIcon = "i/pin.svg";
						// var size = new google.maps.Size(101, 137);
						// var pinIcon = {
						// 	url: "i/pin.svg", // url
						// 	scaledSize: new google.maps.Size(101, 137) // scaled size
						// 	// scaledSize: new google.maps.Size(101, 137) // scaled size
						// 	// origin: new google.maps.Point(50,137), // origin
						// };

						var pinIcon = new google.maps.MarkerImage(
							'i/pin.svg',
							new google.maps.Size(101,137), //size
							null, //origin
							null, //anchor
							new google.maps.Size(101,137) //scale
						);
					}else{
						// var pinIcon = "i/pin_dark.svg";
						// var size = new google.maps.Size(33, 45);
						var pinIcon = {
							url: "i/pin_dark.svg", // url
							// size: new google.maps.Size(33, 45), // scaled size
							scaledSize: new google.maps.Size(33, 45) // scaled size
							// origin: new google.maps.Point(16,45), // origin
						};
					}
					pinIndex ++;
					pin[key] = new google.maps.Marker({
						position: new google.maps.LatLng(markers[key].position[0], markers[key].position[1]),
						map: map,
						title: markers[key].title,
						id: markers[key].id,
						point: new google.maps.Point(-50,-137),
						// size: size,
						// scaledSize: size,
						
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
			// console.log(pin);
			pinsSet();
			if( window.innerWidth >= 768 ){
				var centerTransform = -0.5;
			}else{
				var centerTransform = 0;
			}
			map.setCenter(new google.maps.LatLng(markers[activePinIndex].position[0], markers[activePinIndex].position[1] + centerTransform));
		});
		}



		$(".js-map-toggle").change(function(){
			if( $(this).is(":checked") ){
				$(".contacts__map").fadeOut(200);
				// $(".contacts__info").fadeIn(200);
				$(".contacts__info").css("height", "calc(100vh - 120px)");
				$(".contacts__block").fadeIn(200);
			}else{
				$(".contacts__map").fadeIn(200);
				// $(".contacts__info").fadeOut(200);
				$(".contacts__block:not(.active)").fadeOut(200);
				$(".contacts__info").css("height", $(".contacts__block.active").outerHeight() + 10);
			}
		});




		$("body").on("click", ".js-tab-button", function(){
			// $(".js-tab-button").click(function(){
				var buttons = $( $(this).data("tabs") ).find(".js-tab-button"),
					contents = $( $(this).data("tabs") ).find(".js-tab-content");
		
		
		
				if( ! $(this).hasClass("active") ){
					$( buttons ).removeClass("active");
					$( contents ).removeClass("active");
					console.log(buttons);
					console.log($( $(this).data("tabs") ));
					
					$( this ).addClass("active");
		
					for( i=0; i < buttons.length; i++){
						if( $(buttons[i]).hasClass("active") ){
							// if( $(buttons[i]).hasClass("js-tab-content_with-pagination") ){
							// 	$(".modal__content").addClass("modal__content_with-pagination");
							// }else{
							// 	$(".modal__content").removeClass("modal__content_with-pagination");
							// }
							$( contents[i] ).addClass("active");
							break;
						}
					}
				}
			});

});