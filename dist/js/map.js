(function ($) {
	$(document).ready(function () {

		// Initialize and add the map
		function initMap() {
			// The location
			const centerMap = {
				lat: 55.755826,
				lng: 37.617300
			};
			// The map
			const map = new google.maps.Map(document.getElementById("map"), {
				zoom: 12,
				center: centerMap,
				styles: [{
						"featureType": "administrative",
						"elementType": "all",
						"stylers": [{
							"saturation": "-100"
						}]
					},
					{
						"featureType": "administrative.province",
						"elementType": "all",
						"stylers": [{
							"visibility": "off"
						}]
					},
					{
						"featureType": "landscape",
						"elementType": "all",
						"stylers": [{
								"saturation": -100
							},
							{
								"lightness": 65
							},
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "poi",
						"elementType": "all",
						"stylers": [{
								"saturation": -100
							},
							{
								"lightness": "50"
							},
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "all",
						"stylers": [{
							"saturation": "-100"
						}]
					},
					{
						"featureType": "road.highway",
						"elementType": "all",
						"stylers": [{
							"visibility": "simplified"
						}]
					},
					{
						"featureType": "road.arterial",
						"elementType": "all",
						"stylers": [{
							"lightness": "30"
						}]
					},
					{
						"featureType": "road.local",
						"elementType": "all",
						"stylers": [{
							"lightness": "40"
						}]
					},
					{
						"featureType": "transit",
						"elementType": "all",
						"stylers": [{
								"saturation": -100
							},
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "geometry",
						"stylers": [{
								"hue": "#ffff00"
							},
							{
								"lightness": -25
							},
							{
								"saturation": -97
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "labels",
						"stylers": [{
								"lightness": -25
							},
							{
								"saturation": -100
							}
						]
					}
				]
			});
			// The marker
			var marker = new google.maps.Marker({
				position: {
					lat: 55.755826,
					lng: 37.617300
				},
				map: map,
				icon: 'img/icons/map-marker.png'
			});
		}
		if ($('#map').length) {
			initMap();
		}

	});
})(jQuery);