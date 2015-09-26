'use strict';

angular.module('spark-wild').controller( 'profileCtrl', [ '$rootScope', '$scope', '$http', '$location', 'Facebook', function( $rootScope, $scope, $http, $location, Facebook ) {

  Facebook.getLoginStatus( function( response ) {
    if( response.status !== 'connected' ) {
      $rootScope.loggedIn = false;
      $location.path( '/' );
    } else {
      Facebook.api('me?fields=name,bio,location', function( response ) {
        $scope.name = response.name;
        $scope.location = response.location.name;
        $scope.bio = response.bio;
      });
      Facebook.api('me/picture?width=200', function( response ) {
        $scope.picture = response.data.url;
      });
    }
  });

  $scope.activities = [
    'hiking',
    'biking',
    'walking',
    'tennis',
    'climbing',
    'running'
  ];

  $scope.selectedActivities = [];
  $scope.toggleSelection = function toggleSelection( activity ) {
    var index = $scope.selectedActivities.indexOf( activity );
    if ( index > -1) {
      $scope.selectedActivities.splice( index, 1);
    } else {
      $scope.selectedActivities.push( activity );
    }
  };

}]);
