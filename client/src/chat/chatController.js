'use strict';

angular.module('spark-wild').controller('chatCtrl', ['$scope', function($scope) {
	$scope.messages = [];

	$scope.submitMessage = function(){
		socket.emit('chat message', this.newMessage);
		$scope.newMessage = '';
	};

	socket.on('chat message', function( message ){
		console.log( message );
    	$scope.messages.push( message );
    	$scope.$apply();
  	});
}]);