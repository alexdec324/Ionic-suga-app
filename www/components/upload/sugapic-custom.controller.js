angular.module('suga-custom.controller',[])
.controller('SugaCustomCtrl', function($scope, $state, $ionicHistory) {
  console.log('------ start suga custom ctrl ------')
  $scope.goBack = function() {
		$ionicHistory.goBack();
  }
  $scope.onClickNext = function() {
  	$state.go('tabs.sugapublish', {cache: false});
  }
	$scope.user= {
		min:0,
		max:100,
		value:50
	}
});