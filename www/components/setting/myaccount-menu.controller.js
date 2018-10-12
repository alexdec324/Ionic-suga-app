angular.module('myaccountmenu.controller',[])
.controller('MyAccountMenuCtrl', function($scope, $ionicHistory) {
  console.log('------ start my account menu ctrl ------');
  $scope.goBack = function() {
		$ionicHistory.goBack();
  }
});