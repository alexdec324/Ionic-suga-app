angular.module('pic-upload.controller',[])
.controller('PicUploadCtrl', function($scope, $state, $ionicHistory, $ionicViewSwitcher) {
  console.log('------ start select picture ctrl ------')
  $scope.onClickNext = function() {
		$ionicViewSwitcher.nextDirection('forward');
  	$state.go('tabs.picpublish');
  }
  $scope.goBack = function() {
		$ionicViewSwitcher.nextDirection('back');
		$state.go('tabs.upload');
  }
});