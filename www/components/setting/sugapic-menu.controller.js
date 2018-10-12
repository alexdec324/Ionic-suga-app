angular.module('sugapicmenu.controller',[])
.controller('SugapicMenuCtrl', function($scope, $state, $ionicHistory) {
  console.log('------ start sugapic menu ctrl ------');
  $scope.goBack = function() {
		$ionicHistory.goBack();
  }
});