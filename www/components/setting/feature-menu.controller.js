angular.module('featuremenu.controller',[])
.controller('FeatureMenuCtrl', function($scope, $ionicHistory) {
  console.log('------ start feature menu ctrl ------');
  $scope.goBack = function() {
		$ionicHistory.goBack();
  }
});