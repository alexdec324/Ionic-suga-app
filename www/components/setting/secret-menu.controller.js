angular.module('secretmenu.controller',[])
.controller('SecretMenuCtrl', function($scope, $state, $ionicHistory) {
  console.log('------ start secret menu ctrl ------');
  $scope.goBack = function() {
		$ionicHistory.goBack();
  }
});