angular.module('signin.controller',[])
.controller('SignInCtrl', function($scope, $state, $ionicHistory) {
  console.log('------ start sign in ctrl ------');

  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $state.go('tabs.home');
  };
  $scope.goSignUp = function() {
  	$state.go('signup');
  }

  $scope.goBack = function() {
		$ionicHistory.goBack();
  }
});