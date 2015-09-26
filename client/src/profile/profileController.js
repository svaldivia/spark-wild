'use strict';

angular.module('spark-wild').controller( 'profileCtrl', [ '$rootScope', '$scope', '$http', '$location', 'Facebook', function( $rootScope, $scope, $http, $location, Facebook ) {

  Facebook.getLoginStatus( function( response ) {
    if( response.status !== 'connected' ) {
      $rootScope.loggedIn = false;
      $location.path( '/' );
    } else {
      Facebook.api('me?fields=id,name,email,bio,location', function( response ) {
        $scope.user = response;
        $scope.name = response.name;
        $scope.location = response.location.name;
        $http.post( '/api/user', $scope.user );
      });
      Facebook.api('me/picture?width=200', function( response ) {
        $scope.picture = response.data.url;
      });
    }
  });

  $scope.activities = [
    "hiking",
    "walking",
    "biking",
    "climbing",
    "tennis",
    "running"
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

  $scope.isSelected = function isSelected( activity ) {
    return (  $scope.selectedActivities.indexOf( activity ) > -1 );
  }

  $scope.submit = function submit() {
    $location.path( '/map' );
  }

}]);
