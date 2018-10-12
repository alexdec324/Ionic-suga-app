// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'sugachicApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('sugachicApp', [
 'ionic',
 'ionic.closePopup',
 'signin.controller',
 'signup.controller',
 'home.controller',
 'chat.controller',
 'upload.controller',
 'notify.controller',
 'profile.controller',
 'setting.controller',
 'notificationmenu.controller',
 'sugapicmenu.controller',
 'secretmenu.controller',
 'mywalletmenu.controller',
 'myaccountmenu.controller',
 'featuremenu.controller',
 'savedfeatures.controller',
 'search.controller',
 'toppurchasers.controller',
 'mychat.controller',
 'pic-upload.controller',
 'pic-publish.controller',
 'suga-upload.controller',
 'suga-custom.controller',
 'suga-publish.controller',
 'secret.controller',
 'postdetail.controller'
 ])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.hide();
      ionic.Platform.fullScreen();
      //StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
  $stateProvider
  .state('signin', {
		url: '/sign-in',
		templateUrl: 'components/auth/sign-in.html',
		controller: 'SignInCtrl'
  })
  .state('signup', {
		url: '/sign-up',
		templateUrl: 'components/auth/sign-up.html',
		controller: 'SignUpCtrl'
  })
  .state('tabs', {
    url: "/tab",
    abstract: true,
    templateUrl: "components/tabs/tabs.html",
		controller: 'MyTabtrl'
  })
  .state('tabs.home', {
    url: "/home",
    views: {
      'home-tab': {
        templateUrl: "components/home/home.html",
        controller: 'HomeTabCtrl'
      }
    }
  })
  .state('tabs.mychat', {
    url: "/mychat",
    views: {
      'chat-tab': {
        templateUrl: "components/chat/my-chats.html",
        controller: 'MyChatCtrl'
      }
    }
  })
  .state('chat', {
    url: '/chat',
    templateUrl: "components/chat/chat.html",
    params: {'id':null},
    controller: 'ChatTabCtrl'
    // url: "/chat", 
    // params: {'id':null},
    // views: {
    //   'chat-tab': {
    //     templateUrl: "components/chat/chat.html",
    //     controller: 'ChatTabCtrl'
    //   }
    // }
  })
  .state('tabs.upload', {
    url: "/upload",
    views: {
      'upload-tab': {
        templateUrl: "components/upload/upload.html",
        controller: 'UploadTabCtrl'
      }
    }
  })
  .state('tabs.picupload', {
    url: "/picupload",
    views: {
      'upload-tab': {
        templateUrl: "components/upload/pic-upload.html",
        controller: 'PicUploadCtrl'
      }
    }
  })
  .state('tabs.picpublish', {
    url: "/picpublish",
    views: {
      'upload-tab': {
        templateUrl: "components/upload/pic-publish.html",
        controller: 'PicPublishCtrl'
      }
    }
  })
	.state('tabs.sugaupload', {
    url: "/sugaupload",
    views: {
      'upload-tab': {
        templateUrl: "components/upload/sugapic-upload.html",
        controller: 'SugaUploadCtrl'
      }
    }
  })
  .state('tabs.sugacustom', {
    url: "/sugacustom",
    views: {
      'upload-tab': {
        templateUrl: "components/upload/sugapic-custom.html",
        controller: 'SugaCustomCtrl'
      }
    }
  })
  .state('tabs.sugapublish', {
    url: "/sugapublish",
    views: {
      'upload-tab': {
        templateUrl: "components/upload/sugapic-publish.html",
        controller: 'SugaPublishCtrl'
      }
    }
  })
  .state('tabs.secret', {
    url: "/secret",
    views: {
      'upload-tab': {
        templateUrl: "components/upload/secret.html",
        controller: 'SecretCtrl'
      }
    }
  })
  .state('tabs.notify', {
    url: "/notify",
    views: {
      'notify-tab': {
        templateUrl: "components/notify/notify.html",
        controller: 'NotifyTabCtrl'
      }
    }
  })
  .state('tabs.profile', {
    url: "/profile",
    views: {
      'profile-tab': {
        templateUrl: "components/profile/profile.html",
        controller: 'ProfileTabCtrl'
      }
    }
  })
	.state('tabs.toppurchasers', {
    url: "/purchasers",
    views: {
      'profile-tab': {
        templateUrl: "components/profile/top-purchasers.html",
        controller: 'TopPurchasersCtrl'
      }
    }
  })
  .state('tabs.setting', {
    url: "/setting",
    views: {
      'setting-tab': {
        templateUrl: "components/setting/setting.html",
        controller: 'SettingCtrl'
      }
    }
  })
  .state('tabs.notificationmenu', {
    url: "/notificationmenu",
    views: {
      'setting-tab': {
        templateUrl: "components/setting/notification-menu.html",
        controller: 'NotificationMenuCtrl'
      }
    }
  })
  .state('tabs.sugapicmenu', {
    url: "/sugapicmenu",
    views: {
      'setting-tab': {
        templateUrl: "components/setting/sugapic-menu.html",
        controller: 'SugapicMenuCtrl'
      }
    }
  })
  .state('tabs.secretmenu', {
    url: "/secretmenu",
    views: {
      'setting-tab': {
        templateUrl: "components/setting/secret-menu.html",
        controller: 'SecretMenuCtrl'
      }
    }
  })
  .state('tabs.mywalletmenu', {
    url: "/mywalletmenu",
    views: {
      'setting-tab': {
        templateUrl: "components/setting/mywallet-menu.html",
        controller: 'MyWalletMenuCtrl'
      }
    }
  })
  .state('tabs.myaccountmenu', {
    url: "/myaccountmenu",
    views: {
      'setting-tab': {
        templateUrl: "components/setting/myaccount-menu.html",
        controller: 'MyAccountMenuCtrl'
      }
    }
  })
  .state('tabs.featuremenu', {
    url: "/featuremenu",
    views: {
      'setting-tab': {
        templateUrl: "components/setting/feature-menu.html",
        controller: 'FeatureMenuCtrl'
      }
    }
  })
	.state('tabs.savedfeatures', {
    url: "/savedfeatures",
    views: {
      'feature-tab': {
        templateUrl: "components/feature/savedfeatures.html",
        controller: 'SavedFeaturesCtrl'
      }
    }
  })
  .state('tabs.search', {
    url: "/search",
    views: {
      'search-tab': {
        templateUrl: "components/search/search.html",
        controller: 'SearchCtrl'
      }
    }
  })
	.state('postdetail', {
		url: '/post-detail',
		templateUrl: 'components/home/post-detail.html',
		params: {'id':null, 'type':0},
		controller: 'PostDetailCtrl'
  });
  $urlRouterProvider.otherwise("/sign-in");
})
.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  console.log('---- start nav ctrl ------')
  $scope.showRightMenu = function() {
    $ionicSideMenuDelegate.toggleRight();
  }
})
.controller('MyTabtrl', function($scope, $state, $ionicHistory, $timeout) {
  $scope.selectTab = function(index) {
		if(index==1) {
			console.log('------ selected my chat tab ------')
			$timeout(function() {
				$ionicHistory.nextViewOptions({disableAnimate: true});
				$state.go('tabs.mychat');
			}, 1);
		} else if(index==2) {
			console.log('------ selected upload tab ------')
			$timeout(function() {
				$ionicHistory.nextViewOptions({disableAnimate: true});
				$state.go('tabs.upload');
			}, 1);
		} else if(index==4) {
			console.log('------ selected profile tab ------')
			$timeout(function() {
				$ionicHistory.nextViewOptions({disableAnimate: true});
				$state.go('tabs.profile');
			}, 1);
		}
  }
})