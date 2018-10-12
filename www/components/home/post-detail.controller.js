angular.module('postdetail.controller',[])
.controller('PostDetailCtrl', function($scope, $state, $stateParams, $ionicViewSwitcher) {
  console.log('------ start post detail ctrl ------')
	var posttypes = ['pic', 'sugapic', 'secret'];
  $scope.post_type = posttypes[$stateParams.type];
	$scope.goBack = function() {
		$ionicViewSwitcher.nextDirection('back');
		$state.go('tabs.profile');
  }
});