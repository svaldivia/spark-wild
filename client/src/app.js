'use strict';

angular.module('spark-wild', ['ngResource', 'ngRoute', 'ngLodash','uiGmapgoogle-maps', 'facebook'] )
	.config( ['uiGmapGoogleMapApiProvider', 'FacebookProvider', function( GoogleMapApiProvider, FacebookProvider ) {
    	GoogleMapApiProvider.configure({
	        key: 'AIzaSyAKU4eqwTJt46Wj3e7ybNKOdOcF9JekjTA',
	        v: '3.20', //defaults to latest 3.X anyhow
	        libraries: 'weather,geometry,visualization'
    	});
		FacebookProvider.init( '1664935427126975' );
	}]);

var socket = io();