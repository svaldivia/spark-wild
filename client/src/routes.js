'use strict';

angular.module('spark-wild')
	.config( ['$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ) {
		$locationProvider.html5Mode(true);

		$routeProvider
			// add new routes here
			.when( '/map', {templateUrl: '/partials/map/mapView', controller: 'mapCtrl'} )
			.when( '/chat', {templateUrl: '/partials/chat/chatView', controller: 'chatCtrl'} )
			.when( '/chats', {templateUrl: '/partials/chats/chatsView', controller: 'chatsCtrl'} )
			.when( '/profile', {templateUrl: '/partials/profile/profileView', controller: 'profileCtrl'} )
			.when( '/', {templateUrl: '/partials/home/homeView', controller: 'homeCtrl'} );
	}])
	.run( ['$rootScope', function( $rootScope ) {
		// if you need the <body> tag to have a special class for your view
		// add it here
		$rootScope.$on( '$routeChangeSuccess', function( event, currentRoute ) {
			switch( currentRoute.templateUrl ) {
				case '/partials/home/homeView':
					$rootScope.bodyClass = 'home';
					break;
				case '/partials/maps/mapView':
					$rootScope.bodyClass = 'map';
					break;
				case '/partials/chat/chatView':
					$rootScope.bodyClass = 'chat';
					break;
				case '/partials/chats/chatsView':
					$rootScope.bodyClass = 'chats';
					break;
				case '/partials/profile/profileView':
					$rootScope.bodyClass = 'profile';
					break;
				default:
					$rootScope.bodyClass = '';
					break;
			}
		});
	}]);
