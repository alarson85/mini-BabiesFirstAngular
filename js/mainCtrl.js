angular.module('friendsList').controller('mainCtrl', function( $scope ){
	$scope.name = 'Alex';
	$scope.friends = ['Kevin', 'Maureen', 'Drew', 'Cesar', 'Jacob', 'Marcos', 'Brady', 'Rudey'];

	$scope.addFriend = function(){
		$scope.friends.push($scope.addName);
	}

});	


