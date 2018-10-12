angular.module('mywalletmenu.controller',[])
.controller('MyWalletMenuCtrl', function($scope, $ionicHistory) {
  console.log('------ start my wallet menu ctrl ------');
  $scope.goBack = function() {
		$ionicHistory.goBack();
  }
});