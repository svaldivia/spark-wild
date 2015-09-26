'use strict';

angular.module('spark-wild').controller('chatCtrl', ['$scope', function($scope) {
	$scope.messages = [ 'that hike was amazing!' ];

	$scope.submitMessage = function(){
		socket.emit('chat message', this.newMessage);
		$scope.newMessage = '';
	};

	socket.on('chat message', function( message ){
    	$scope.messages.push( message );
    	$scope.$apply();
  	});
}]);