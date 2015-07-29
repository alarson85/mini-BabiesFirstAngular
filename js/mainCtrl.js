var app = angular.module('friendsList');
app.controller('mainCtrl', function($scope){
	$scope.friends = ['Kevin', 'Maureen', 'Drew', 'Cesar'];

	$scope.addFriend = function(){
		$scope.friends.push($scope.addName);
	}

});	


