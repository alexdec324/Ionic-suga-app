angular.module('pic-publish.controller',[])
.controller('PicPublishCtrl', function($scope, $ionicHistory) {
  console.log('------ start publish picture ctrl ------');
  $scope.goBack = function() {
		$ionicHistory.goBack();
  }
});