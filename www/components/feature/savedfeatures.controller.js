angular.module('savedfeatures.controller',[])
.controller('SavedFeaturesCtrl', function($scope, $ionicHistory, $ionicPopup, IonicClosePopupService) {
  console.log('------ start saved features ctrl ------');
	$scope.init = function() {
		this.waitinglist_popup = null;
	}
	$scope.goBack = function() {
		$ionicHistory.goBack();
  }
	$scope.onFeatureNow = function(id) {
  	console.log("----- start feature now ----");
		if(id==1) $scope.feature_user = 'Marina Blumberg';
		else $scope.feature_user = 'Clodia van halen';
		$scope.waitinglist_popup = $ionicPopup.show({ 
			templateUrl: 'components/feature/not-available.html',
			cssClass: 'not-available-class',
			scope: $scope
		});
		IonicClosePopupService.register($scope.waitinglist_popup);
  }
	$scope.closeWaitingList = function() {
		$scope.waitinglist_popup.close();
  }
});