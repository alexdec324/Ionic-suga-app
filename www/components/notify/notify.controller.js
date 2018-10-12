angular.module('notify.controller',[])
.controller('NotifyTabCtrl', function($scope, $http) {
  console.log('------ start notify ctrl ------')
  $scope.user_id = 1;
  $scope.headers = {
    "Content-Type": "application/json",
    "Access-Token": "EV>OutSou>2018.03.27>BA!"
  }
  $scope.img_url = "http://192.168.100.173/assets/uploads/";
  $scope.api_url = "http://192.168.100.173/api/";
  $scope.urlGetNotifications = $scope.api_url + "notification/get";
  $scope.all_ntfs = [];
  $scope.getAllNotifications = function() {
    $http({
      method: 'POST', 
      url: $scope.urlGetNotifications, 
      headers: $scope.headers,
      data: {
			 "user_id": $scope.user_id
			}
    }).success(function(response) {
        if (response.status == 200) {
          $scope.all_ntfs = response.data;
        }
        console.log($scope.all_ntfs);
    });
  };
  
  $scope.convertNum = function(num){
  	var int = parseInt(num);
  	var result;
  	if (int > 1000) {
  		result = (int/1000).toFixed(1) + "k";
  	}else{
  		result = int;
  	}
  	console.log(result);
  	return result;
  }

  $scope.init = function(){
  	$scope.getAllNotifications();
  	// $scope.convertNum(1205);
  }

  $scope.init();
});