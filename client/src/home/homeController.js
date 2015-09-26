'use strict';

angular.module('spark-wild').controller('homeCtrl', ['$rootScope', '$location', 'Facebook', '$scope', function($rootScope, $location, Facebook, $scope) {
	$scope.error = false;

	$scope.login = function() {
		Facebook.login(function(response) {
			if( response.status === 'connected' ) {
				$rootScope.loggedIn = true;
				$location.path( '/profile' );
				$scope.error = false;
			} else {
				$rootScope.loggedIn = false;
				$scope.error = "Please authorize the Facebook app";
			}
      	});
	};

}]);