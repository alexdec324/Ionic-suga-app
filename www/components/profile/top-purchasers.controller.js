angular.module('toppurchasers.controller',[])
.controller('TopPurchasersCtrl', function($scope, $http) {
  console.log('------ start toppurchasers ctrl ------')
	$scope.page_title = "Mrina's Top Purchasers";
	$scope.user_id = 1;
  $scope.headers = {
    "Content-Type": "application/json",
    "Access-Token": "EV>OutSou>2018.03.27>BA!"
  }
  $scope.img_url = "http://192.168.100.173/assets/uploads/";
  $scope.api_url = "http://192.168.100.173/api/";
  $scope.urlGetPurchaser = $scope.api_url + "profile/purchasers";
  $scope.urlGetUserInfo = $scope.api_url + "profile/userinfo";
  $scope.top_purchasers = [];
	$scope.getPurchaser = function(){
  	$http({
      method: 'POST', 
      url: $scope.urlGetPurchaser, 
      headers: $scope.headers,
      data: {
			 "user_id": $scope.user_id
			}
    }).success(function(response) {
        if (response.status == 200) {
          $scope.top_purchasers = response.data;
        }
        console.log($scope.top_purchasers);
    });
  }

  $scope.getUserInfo = function(){
    $http({
      method: 'POST', 
      url: $scope.urlGetUserInfo, 
      headers: $scope.headers,
      data: {
       "user_id": $scope.user_id
      }
    }).success(function(response) {
        if (response.status == 200) {
          $scope.user = response;
        }
        console.log($scope.user);
    });
  }

  $scope.init = function(){
  	this.getPurchaser();
    this.getUserInfo();
  }

  $scope.init();
});