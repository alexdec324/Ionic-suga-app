angular.module('suga-upload.controller',[])
.controller('SugaUploadCtrl', function($scope, $state, $ionicHistory, $ionicViewSwitcher) {
  console.log('------ start select picture ctrl ------')
  $scope.onClickNext = function() {
		$ionicViewSwitcher.nextDirection('forward');
  	$state.go('tabs.sugacustom');
  }
  $scope.goBack = function() {
		$ionicViewSwitcher.nextDirection('back');
		$state.go('tabs.upload');
  }
});