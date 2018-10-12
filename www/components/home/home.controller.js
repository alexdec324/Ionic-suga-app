angular.module('home.controller',[])
.controller('HomeTabCtrl', function($scope, $state, $ionicPopup, IonicClosePopupService, $ionicScrollDelegate) {
  console.log('------ start home ctrl ------')
	$scope.init = function() {
		this.scroll = false;
		this.feature_view = false;
		this.post_purchase_popup = null;
		this.won_feature_popup = null;
		this.choose_post_popup = null;
		this.total_coins_popup = null;
		this.coins_earned_popup = null;
		this.get_coins_popup = null;
		this.featuring_post_id = null;
	};
  //post purchase screen
	$scope.openPostPurchase = function() {
  	console.log("----- open post purchase ----");
		$scope.post_purchase_popup = $ionicPopup.show({ 
			title: 'Great',
			templateUrl: 'components/home/post-purchase.html',
			cssClass: 'post-purchase-class',
			scope: $scope
		});
		IonicClosePopupService.register($scope.post_purchase_popup);
  }
  $scope.closePostPurchase = function() {
		$scope.post_purchase_popup.close();
  }
  $scope.openSetting = function() {
  	console.log('----- open setting screen -----')
  	$state.go('tabs.setting');
  }
  $scope.openSearch = function() {
  	console.log('----- open search screen -----')
  	$state.go('tabs.search');
  }
	//feature view
	$scope.onClickFeatureView = function() {
  	console.log('----- click feature view -----');
  	$scope.feature_view = !$scope.feature_view;
		if($scope.feature_view) {
			//angular.element(document.querySelector('.scratch-shapes')).addClass('enabled');
		} else {
			//angular.element(document.querySelector('.scratch-shapes')).removeClass('enabled');
		}
  }
	$scope.shapes = [
		{src: "img/shape00.png", data_id:1, hidden_src:"img/shape01.png"},
		{src: "img/shape00.png", data_id:2, hidden_src:"img/user-avatar01.png"},
		{src: "img/shape00.png", data_id:1, hidden_src:"img/shape01.png"},
		{src: "img/shape00.png", data_id:2, hidden_src:"img/user-avatar01.png"},
		{src: "img/shape00.png", data_id:2, hidden_src:"img/user-avatar01.png"}
	];
	var scratch_ids = [];
	$scope.onScratch = function(item) {
		if(scratch_ids.length>=5)
			return;
		var index = item.currentTarget.getAttribute("index");
  	var src = item.currentTarget.getAttribute("src");
		var hidden_src = $scope.shapes[index].hidden_src;
  	if(src == hidden_src)
			return;
  	$scope.shapes[index].src = hidden_src;
		var data_id = $scope.shapes[index].data_id;
		scratch_ids.push(data_id);
		if(scratch_ids.length==5) {
			var is_equal = true;//!!scratch_ids.reduce(function(a, b){ return (a === b) ? a : NaN; });
			console.log('--- shapes equals are '+ is_equal);
			if(is_equal) {
				$scope.openWonFeature();
			}
		}
  }
	/* Feature */
	//1. popup won feature
  $scope.openWonFeature = function() {
  	console.log("----- open won feature ----");
		$scope.won_feature_popup = $ionicPopup.show({ 
			templateUrl: 'components/home/won-feature.html',
			cssClass: 'won-feature-class',
			scope: $scope
		});
  }
  $scope.closeWonFeature = function() {
		if($scope.won_feature_popup != null)
			$scope.won_feature_popup.close();
  }
	//2. popup choose post
  $scope.openChoosePost = function() {
  	console.log("----- open choose post ----");
		$scope.date = new Date();
		$scope.choose_post_popup = $ionicPopup.show({ 
			templateUrl: 'components/home/choose-post.html',
			cssClass: 'choose-post-class',
			scope: $scope
		});
  }
  $scope.closeChoosePost = function() {
		if($scope.choose_post_popup)
			$scope.choose_post_popup.close();
  }
	$scope.saveFeatureLater = function() {
		$scope.closeWonFeature();
		$scope.closeChoosePost();
  }
	$scope.onFeatureNow = function() {
		console.log($scope.featuring_post_id);
		$scope.closeWonFeature();
		$scope.closeChoosePost();
  }
	/* Wallet */
	//1. popup total coins
  $scope.openTotalCoins = function() {
  	console.log("----- open Total Coins ----");
		$scope.total_coins_popup = $ionicPopup.show({ 
			title: "Total <span class='coins'>Coins</span>",
			templateUrl: 'components/home/total-coins.html',
			cssClass: 'total-coins-class',
			scope: $scope
		});
		IonicClosePopupService.register($scope.total_coins_popup);
  }
  $scope.closeTotalCoins = function() {
		$scope.total_coins_popup.close();
  }
	//2. popup coins earned
  $scope.openCoinsEarned = function() {
  	console.log("----- open Coins Earned ----");
		$scope.coins_earned_popup = $ionicPopup.show({ 
			title: "Coins <span class='earned'>Earned</span>",
			templateUrl: 'components/home/coins-earned.html',
			cssClass: 'coins-earned-class',
			scope: $scope
		});
		IonicClosePopupService.register($scope.coins_earned_popup);
  }
  $scope.closeCoinsEarned = function() {
		$scope.coins_earned_popup.close();
  }
	//3. popup get coins
  $scope.openGetCoins = function() {
  	console.log("----- open Get Coins ----");
		$scope.get_coins_popup = $ionicPopup.show({
			title: "Get Coins",			
			templateUrl: 'components/home/get-coins.html',
			cssClass: 'get-coins-class',
			scope: $scope
		});
		IonicClosePopupService.register($scope.get_coins_popup);
  }
  $scope.closeGetCoins = function() {
		$scope.get_coins_popup.close();
  }
	//scroll view
  $scope.onScroll = function() {
  	var scrollTopCurrent = $ionicScrollDelegate.getScrollPosition().top;
  	if (!scrollTopCurrent) {
  		console.log('---- current is top');
  		$scope.scroll = false;
  		$scope.$apply();
  	} else {
  		console.log('---- scrolling down or up')
  		$scope.scroll = true;
  		$scope.$apply();
  	}
		// var scrollTopMax = $ionicScrollDelegate.getScrollView().__maxScrollTop;
		// var scrollBottom = scrollTopMax - scrollTopCurrent;
		// if (!scrollBottom) {
		//   console.log('---- start scroll to bottom ----');
		//   //$ionicScrollDelegate.scrollBottom(true);
		// }
  }
	$scope.init();
});
angular.module('sugachicApp').directive('postChoose', function($state, $ionicViewSwitcher) {
	return {
		restrict: 'AE',
		link: function(scope, elem, attr) {
			//post click event
			elem.on('click', function() {
				$scope = scope.$parent.$parent;
				$scope.featuring_post_id = attr.id;
				angular.element(document.querySelectorAll('.post-item')).removeClass('active');

				elem.addClass('active');
			});
		}
	};
});