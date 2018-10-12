angular.module('notificationmenu.controller',[])
.controller('NotificationMenuCtrl', function($scope, $ionicHistory) {
  console.log('------ start notification menu ctrl ------');
  $scope.goBack = function() {
		$ionicHistory.goBack();
  }
});