'use strict';

angular.module('spark-wild').controller( 'profileCtrl', [ '$rootScope', '$scope', '$http', '$location', 'Facebook', function( $rootScope, $scope, $http, $location, Facebook ) {

  Facebook.getLoginStatus( function( response ) {
    if( response.status !== 'connected' ) {
      $rootScope.loggedIn = false;
      $location.path( '/' );
    }
  });

  $scope.formData = {};

  $scope.processForm = function(){
    $location.path('/map');
    $http({
      method  : 'POST',
      url     : '/saveuser',
          data    : "some data",  // pass in data as strings
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })
    .success(function(data) {
      console.log(data);

            // if (!data.success) {
            //   // if not successful, bind errors to error variables
            //   $scope.errorName = data.errors.name;
            //   $scope.errorSuperhero = data.errors.superheroAlias;
            // } else {
            //   // if successful, bind success message to message
            //   $scope.message = data.message;
            // }
    });
  };

}]);
