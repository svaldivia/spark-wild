'use strict';

angular.module('spark-wild').controller('chatsCtrl', ['$scope', function($scope) {
	$scope.chats = [
		{
			image: '/assets/profile-1.png',
			name: 'Sarah Perez',
			time: '3:00 PM',
			text: 'That hike was amazing!'
		},
		{
			image: '/assets/profile-3.png',
			name: 'Sebastian Valdivia',
			time: 'Yesterday',
			text: 'I\'d love to go for a bike ride...'
		},
		{
			image: '/assets/profile-2.png',
			name: 'Marius Ciuchete',
			time: 'Friday',
			text: 'Wanna go for a bike ride tomorrow?'
		}
	]
}]);