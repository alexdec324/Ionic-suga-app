angular.module('profile.controller', [])
.controller('ProfileTabCtrl', function($scope, $state, $ionicPopup, IonicClosePopupService, $http, $httpParamSerializer) {
  // console.log('------ start profile ctrl ------');
  $scope.user_id = 1;
  $scope.headers = {
    "Content-Type": "application/json",
    "Access-Token": "EV>OutSou>2018.03.27>BA!"
  }
  $scope.img_url = "http://192.168.100.173/assets/uploads/";
  $scope.api_url = "http://192.168.100.173/api/";
  $scope.urlGetUserInfo = $scope.api_url + "profile/userinfo";
  $scope.urlGetPosts = $scope.api_url + "profile/get_posts";
  $scope.urlGetPersonalCard = $scope.api_url + "card/get?user_id="+$scope.user_id;
  $scope.urlGetCategories = $scope.api_url + "category/get?user_id="+$scope.user_id;
  $scope.urlGetCategoryPosts = $scope.api_url + "profile/get_categoryPosts?user_id="+$scope.user_id;

  $scope.all_posts = [];
  $scope.category_colors = ["#252525", "#488934", "#e94b78", "#e1bd50", "#e34b28", "#db1d1d", "#478f81", "#984d9f", "2679b8"]

  var _CURRENT_ANGLE = 0;

  $scope.current_deg = 0;
  $scope.old_cursor_x = 0;
  $scope.current_cursor_x = 0;
  $scope.clicked = true;

  // $scope.

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
          $scope.user.networth = $scope.convertNum($scope.user.networth)
        }
        // console.log($scope.user);
    });
  }

  $scope.getPosts = function(category = 'all'){
    // console.log('category=====', category);
    $http({
      method: 'POST', 
      url: $scope.urlGetPosts, 
      headers: $scope.headers,
      data: {
       "user_id": $scope.user_id,
       "category": category
      }
    }).success(function(response) {
        if (response.status == 200) {
          $scope.all_posts = $scope.listToMatrix(response.data, 3);
          $scope.total = response.data.length;
        }else if(response.status == 401) {
          $scope.all_posts = [];
          $scope.total = 0;
        }
        console.log($scope.all_posts);
    });
  }

  $scope.getCategoryPosts = function(){
    $scope.total = 0;
    $http({
      method: 'GET',
      url: $scope.urlGetCategoryPosts,
      headers: $scope.headers
    }).success(function(response){
      if (response.status == 200) {
        $scope.category_posts = response.data;
        for (var i = 0; i < $scope.category_posts.length; i++) {
          $scope.total += $scope.category_posts[i].posts.length;
          $scope.category_posts[i].posts = $scope.listToMatrix($scope.category_posts[i].posts, 3);
        }
      }
      // console.log($scope.category_posts);
    })
  }

  $scope.getPersonalCard = function(){
  	$http({
      method: 'GET', 
      url: $scope.urlGetPersonalCard, 
      headers: $scope.headers
    }).success(function(response) {
        if (response.status == 200) {
          $scope.personal_card = response;
        }
        // console.log($scope.personal_card);
    });
  }

  $scope.getCategories = function(){
    $http({
      method: 'GET', 
      url: $scope.urlGetCategories, 
      headers: $scope.headers
    }).success(function(response) {
        if (response.status == 200) {
          $scope.categories = response.data;
          $scope.category_num = $scope.categories.length;
          $scope.rest_categories = $scope.simpleArray(9 - $scope.category_num)
        }
        // console.log($scope.rest_categories);
    });
  }

  $scope.circular_move = function(deg){
    _CURRENT_ANGLE += 30;
    $scope.current_deg = $scope.current_deg + 360 - (360 + ($scope.current_deg%360)) - 30 * deg;
    // console.log($scope.current_deg);
  }

  $scope.convertNum = function(num){
  	var int = parseInt(num);
  	var result;
  	if (int > 1000) {
  		result = (int/1000).toFixed(1) + "k";
  	}else{
  		result = int;
  	}
  	// console.log(result);
  	return result;
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

  $scope.simpleArray = function(length){
    var simple_array = [];
    for (var i = 0; i < length; i++) {
      simple_array[i] = i;
    }
    return simple_array;
  }

	$scope.init = function() {
    this.getCategories();
    this.getUserInfo();
    this.getPosts();
		this.category_view = false;
		this.personal_card_popup = null;
		this.posts_mode = 'all';
	};









  $scope.openSetting = function() {
  	console.log('----- open setting screen -----')
  	$state.go('tabs.setting');
  }
  $scope.openSearch = function() {
  	console.log('----- open search screen -----')
  	$state.go('tabs.search');
  }
  $scope.onClickCategoryView = function() {
  	console.log('----- click category view -----');
  	$scope.category_view = !$scope.category_view;
    $scope.getCategoryPosts();
  }
  $scope.openPersonalCard = function() {
  	$scope.getPersonalCard();
  	console.log("----- open personal card ----");
		$scope.personal_card_popup = $ionicPopup.show({ 
			title: "Mrina Blumberg",
			templateUrl: 'components/profile/personal-card.html',
			cssClass: 'personal-class',
			scope: $scope
		});
		IonicClosePopupService.register($scope.personal_card_popup);
  }
  $scope.closePersonalCard = function() {
		$scope.personal_card_popup.close();
  }
  $scope.goToTopPurchasers = function() {
  	$state.go('tabs.toppurchasers');
  }
	$scope.goToChat = function() {
  	$state.go('tabs.chat');
  }
  $scope.onClickSugaBtn = function() {
  	if($scope.posts_mode == 'all') {
			$scope.posts_mode = 'suga';
			$scope.getSugaPosts();
		} else {
			$scope.posts_mode = 'all';
			$scope.getAllPosts();
		}
  }
	$scope.onClickSecretBtn = function() {
  	if($scope.posts_mode == 'all') {
			$scope.posts_mode = 'secret';
			$scope.getSecretPosts();
		} else {
			$scope.posts_mode = 'all';
			$scope.getAllPosts();
		}
  }
	$scope.getAllPosts = function() {
		
	};
	$scope.getSugaPosts = function() {
		
	};
	$scope.getSecretPosts = function() {
		
	};
	$scope.goToMainProfile = function() {
		console.log('----- go to main profile view -----');
  	$scope.posts_mode = 'all';
		$scope.getAllPosts();
  }
	$scope.init();
});
angular.module('profile.controller').directive('postClicks', function($state, $ionicViewSwitcher) {
	return {
		restrict: 'AE',
		link: function(scope, elem, attr) {
			//post click event
			elem.on('click', function($event) {
				$event.stopPropagation();
				var post_id = attr.id;
				//console.log(post_id);
				var type = attr.type;
				$ionicViewSwitcher.nextDirection('forward');
				$state.go('postdetail', {'id':post_id, 'type':type});
			});
		}
	};
});