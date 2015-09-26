'use strict';

angular.module('spark-wild').controller('mapCtrl', ['$scope','uiGmapGoogleMapApi', function($scope, uiGmapGoogleMapApi) {
	    
	    uiGmapGoogleMapApi.then(function(maps) {

			//zoom 1 = world, 20 is smallest zoom.
			var startZoom = 15

			//to do: Load user location here
			var userLat = 49.282089
			var userLng = -123.107421

	    	$scope.map = { center: { latitude: userLat, longitude: userLng }, zoom: startZoom };
	    	$scope.options = {scrollwheel: false, disableDefaultUI: true}

	    	//adding marker for user
		    $scope.marker = {
				id: 0,
				coords: {
					latitude: userLat,
					longitude: userLng
				},
		      options: { draggable: false },
		      events: {
		      	click: function(marker, eventName, args) {
				$scope.map.zoom = 8;
				},

		        // dragend: function (marker, eventName, args) {
		        //   $log.log('marker dragend');
		        //   var lat = marker.getPosition().lat();
		        //   var lon = marker.getPosition().lng();
		        //   $log.log(lat);
		        //   $log.log(lon);

		        //   $scope.marker.options = {
		        //     draggable: true,
		        //     labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
		        //     labelAnchor: "100 0",
		        //     labelClass: "marker-labels"
		        //   };
		        // }
		      }
		    };




		    //To do: add markers for nearby activities/people
		    //$scope.markers = [];
		    
		    console.log($scope.marker)


    });
}]);