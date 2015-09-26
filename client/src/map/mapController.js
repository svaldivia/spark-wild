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
			var startZoom = 13

			//to do: Load user location here
			var userLat = 49.282089
			var userLng = -123.107421

	    	$scope.map = { center: { latitude: userLat, longitude: userLng }, zoom: startZoom, bounds: { } };
	    	$scope.options = {scrollwheel: false, disableDefaultUI: true}

	    	//adding marker for current user
		    $scope.marker = {
				id: 0,
				coords: {
					latitude: userLat,
					longitude: userLng
				},
				options: { 
					draggable: false,
				},
				events: {
					click: function(marker, eventName, args) {
						console.log('Clicked main user')
					},
		      	}
		    };

			var createRandomMarker = function(i, bounds, idKey) {
			      var lat_min = bounds.southwest.latitude,
			        lat_range = bounds.northeast.latitude - lat_min,
			        lng_min = bounds.southwest.longitude,
			        lng_range = bounds.northeast.longitude - lng_min;

			      if (idKey == null) {
			        idKey = "id";
			      }

			      var latitude = lat_min + (Math.random() * lat_range);
			      var longitude = lng_min + (Math.random() * lng_range);
			      var ret = {
			        latitude: latitude,
			        longitude: longitude,
			        title: 'm' + i
			      };
			      ret[idKey] = i;
			      return ret;
			    };

			    $scope.randomMarkers = [];
			    // Get the bounds from the map once it's loaded
			    $scope.$watch(function() {
			      return $scope.map.bounds;
			    }, function(nv, ov) {
			      // Only need to regenerate once
			      if (!ov.southwest && nv.southwest) {
			        var markers = [];
			        for (var i = 0; i < 5; i++) {
			          markers.push(createRandomMarker(i, $scope.map.bounds))
			        }
			        $scope.randomMarkers = markers;
			      }
			    }, true);













		    console.log($scope.markers)


		    //To do: add markers for nearby activities/people
		    //$scope.markers = [];
    });
}]);