'use strict';

angular.module('spark-wild').controller('profileCtrl', ['$scope','$http','$location', function($scope,$http,$location) {

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
    }
}]);
