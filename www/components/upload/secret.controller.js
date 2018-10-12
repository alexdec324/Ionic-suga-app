angular.module('secret.controller',[])
.controller('SecretCtrl', function($scope, $state, $ionicHistory) {
  console.log('------ start secret ctrl ------')
  $scope.goBack = function() {
		$ionicHistory.goBack();
  }
});