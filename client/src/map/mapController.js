'use strict';

angular.module('spark-wild').controller('mapCtrl', ['$rootScope', '$scope', '$location', 'uiGmapGoogleMapApi', 'Facebook', function($rootScope, $scope, $location, uiGmapGoogleMapApi, Facebook) {

	Facebook.getLoginStatus( function( response ) {
		if( response.status !== 'connected' ) {
			$rootScope.loggedIn = false;
			$location.path( '/' );
		}
	});

	uiGmapGoogleMapApi.then(function(maps) {

		//zoom 1 = world, 20 is smallest zoom.
		var startZoom = 13;

		$scope.map = { center: { latitude: 49.282089, longitude: -123.107421 }, zoom: startZoom, bounds: { } };
		$scope.options = {scrollwheel: false, disableDefaultUI: true}

		//adding marker for current user
		$scope.markerMain = {
			id: 0,
			coords: {
				latitude: 49.282089,
				longitude: -123.107421
			},
			options: {
				draggable: false,
				icon: '/assets/pin3.png',
			},
			events: {
				click: function(marker, eventName, args) {
					$location.path( '/profile' );
				},
			}
		};

		$scope.markerSecondary = {
			id: 0,
			coords: {
				latitude: 49.262918,
				longitude: -123.106871
			},
			options: {
				draggable: false,
				icon: '/assets/pin1.png',
			},
			events: {
				click: function(marker, eventName, args) {
					$location.path( '/chat' );
				},
			}
		};

		$scope.markerThird = {
			id: 0,
			coords: {
				latitude: 49.278599,
				longitude: -123.136225
			},
			options: {
				draggable: false,
				icon: '/assets/pin2.png',
			},
			events: {
				click: function(marker, eventName, args) {
					$location.path( '/chat' );
				},
			}
		};

    });
}]);
