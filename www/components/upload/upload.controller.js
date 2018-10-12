angular.module('upload.controller',[])
.controller('UploadTabCtrl', function($scope, $state) {
  console.log('------ start upload ctrl ------')
  $scope.openSetting = function() {
  	console.log('----- open setting screen -----')
  	$state.go('tabs.setting');
  }
});