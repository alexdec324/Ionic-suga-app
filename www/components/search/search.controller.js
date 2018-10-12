angular.module('search.controller',[])
.controller('SearchCtrl', function($scope, $state, $http) {
	$scope.showAdvanced = false;
  console.log('------ start search ctrl ------');

  $scope.user_id = 1;
  $scope.headers = {
    "Content-Type": "application/json",
    "Access-Token": "EV>OutSou>2018.03.27>BA!"
  }
  $scope.img_url = "http://192.168.100.173/assets/uploads/";
  $scope.api_url = "http://192.168.100.173/api/";
  $scope.urlSearchUser = $scope.api_url + "search/user";
  $scope.urlGetPopularPosts = $scope.api_url + "search/popular_posts";
  $scope.query = "";
  $scope.order = "fans";
  $scope.filter = "fans";

  $scope.searchUser = function(){
  	// console.log($scope.query);
  	// if ($scope.showAdvanced) {
	  	$http({
	      method: 'POST', 
	      url: $scope.urlSearchUser, 
	      headers: $scope.headers,
	      data: {
				 "user_id": $scope.user_id,
				 "q": $scope.query,
				 "o": $scope.order,
				 "f": $scope.filter
				}
	    }).success(function(response) {
	        if (response.status == 200) {
	          $scope.users = response.data;
	        }else if (response.status == 401) {
	        	$scope.users = []
	        }
	        console.log(response);
	    });
  	// }else{
  	// 	$http({
	  //     method: 'POST', 
	  //     url: $scope.urlSearchUser, 
	  //     headers: $scope.headers,
	  //     data: {
			// 	 "user_id": $scope.user_id,
			// 	 "q": $scope.query,
			// 	 "o": null,
			// 	 "f": null
			// 	}
	  //   }).success(function(response) {
	  //       if (response.status == 200) {
	  //         $scope.users = response.data;
	  //       }else if (response.status == 401) {
	  //       	$scope.users = []
	  //       }
	  //       console.log(response);
	  //   });
  	// }
  }

  $scope.get_popularPosts = function(){
  	$http({
      method: 'POST', 
      url: $scope.urlGetPopularPosts, 
      headers: $scope.headers,
      data: {
			 "user_id": $scope.user_id
			}
    }).success(function(response) {
        if (response.status == 200) {
          $scope.popular_posts = $scope.listToMatrix(response.data, 4);
        }else if (response.status == 401) {
        	$scope.popular_posts = []
        }
        console.log($scope.popular_posts);
    });
  }

  $scope.setOrder = function(order){
  	$scope.order = order;
  	this.searchUser();
  }

  $scope.setFilter = function(filter){
  	$scope.filter = filter;
  	this.searchUser();
  }

  $scope.listToMatrix = function(list, elementsPerSubArray) {
    var matrix = [], i, k;
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    // console.log(matrix);
    return matrix;
  }

  $scope.init = function(){
  	// this.searchUser();
  	this.get_popularPosts();
  }

  $scope.init();


  $scope.openSetting = function() {
  	console.log('----- open setting screen -----')
  	$state.go('tabs.setting');
  }
  $scope.onClickAdvanced = function() {
  	$scope.showAdvanced = !$scope.showAdvanced;
  }
});