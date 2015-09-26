'use strict';

angular.module('spark-wild').controller('mapCtrl', ['$scope','uiGmapGoogleMapApi', function($scope, uiGmapGoogleMapApi) {
	    
	    uiGmapGoogleMapApi.then(function(maps) {

			//zoom 1 = world, 20 is smallest zoom.
			var startZoom = 15

			//Load user location here
			var userLat = 49.282089
			var userLng = -123.107421

	    	$scope.map = { center: { latitude: userLat, longitude: userLng }, zoom: startZoom };
	    	$scope.options = {scrollwheel: false, disableDefaultUI: true}

		    $scope.marker = {
				id: 0,
				coords: {
					latitude: 49.282089,
					longitude: -123.107421
				}
		    };


    });
}]);