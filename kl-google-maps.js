;(function($){
	"use strict";

	$(document).ready(function() {

		/*
		Find the Latitude and Longitude of your address:
			- http://itouchmap.com/latlong.html
			- http://universimmedia.pagesperso-orange.fr/geo/loc.htm
			- http://www.findlatitudeandlongitude.com/find-address-from-latitude-and-longitude/

		Find settings explained:
			- https://github.com/marioestrada/jQuery-gMap

		*/

		// Map Markers
		var mapMarkers = [

		{	latitude: -6.352612,
			longitude: 106.964279,

			icon: {
				image: "images/map-marker.png",
				iconsize: [60, 70], // w, h
				iconanchor: [60, 70] // x, y
			}
		}];

		// Map Color Scheme - more styles here http://snazzymaps.com/
		var mapStyles = [
			{
				"featureType": "water",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#acbcc9"
					}
				]
			},
			{
				"featureType": "landscape",
				"stylers": [
					{
						"color": "#f2e5d4"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#c5c6c6"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e4d7c6"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#fbfaf7"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#c5dac6"
					}
				]
			},
			{
				"featureType": "administrative",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": 33
					}
				]
			},
			{
				"featureType": "road"
			},
			{
				"featureType": "poi.park",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": 20
					}
				]
			},
			{},
			{
				"featureType": "road",
				"stylers": [
					{
						"lightness": 20
					}
				]
			}
		];

		// Map Initial Location
		var initLatitude = -6.3523755;
		var initLongitude = 106.9641742;

		// Map Extended Settings
		var map = jQuery(".th-google_map").gMap({
			controls: {
				panControl: true,
				zoomControl: true,
				mapTypeControl: true,
				scaleControl: true,
				streetViewControl: true,
				overviewMapControl: true
			},
			scrollwheel: false,
			markers: mapMarkers,
			latitude: initLatitude,
			longitude: initLongitude,
			zoom: 18,
			style: mapStyles,
			draggable: Modernizr.touch ? false : true

		});

	});// end of document ready

})(jQuery);


