angular.module('setting.controller',[])
.controller('SettingCtrl', function($scope, $ionicHistory) {
  console.log('------ start setting ctrl ------');
  $scope.goBack = function() {
		$ionicHistory.goBack();
  }
});