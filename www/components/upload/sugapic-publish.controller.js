angular.module('suga-publish.controller',[])
.controller('SugaPublishCtrl', function($scope, $ionicHistory) {
  console.log('------ start publish picture ctrl ------');
  $scope.goBack = function() {
		$ionicHistory.goBack();
  }
});