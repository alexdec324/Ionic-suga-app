angular.module('chat.controller',[])
.directive('fileModel', ['$parse', function ($parse) {
    return {
    restrict: 'A',
    link: function(scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function(){
            scope.$apply(function(){
                modelSetter(scope, element[0].files[0]);
            });
        });
    }
   };
}])
.controller('ChatTabCtrl', function($scope, $state, $stateParams, $ionicModal, $ionicHistory, $ionicViewSwitcher, $http, $interval) {
  console.log('------ start chat ctrl ------');

  $scope.user_id = 1;
  $scope.pair_id = $stateParams.id;
  console.log($scope.pair_id);
  $scope.headers = {
    "Content-Type": "application/json",
    "Access-Token": "EV>OutSou>2018.03.27>BA!"
  }
  $scope.img_url = "http://192.168.100.173/assets/uploads/";
  $scope.api_url = "http://192.168.100.173/api/";
  $scope.urlGetMessages = $scope.api_url + "chat/get_messages";
  $scope.urlSendMessage = $scope.api_url + "chat/send_message";
  $scope.urlUpdateSeen = $scope.api_url + "chat/update_seen";
  $scope.all_msgs = [];
  $scope.sender_message = "";
  $scope.last_chat_id = null;
  $scope.chattingWith = false;

  var stopFetch;
  var file = $scope.myFile;
  console.log('file is =======' );
  console.dir(file);
  $scope.getAllMessages = function() {
    $http({
      method: 'POST', 
      url: $scope.urlGetMessages, 
      headers: $scope.headers,
      data: {
			 "sender_id": $scope.user_id,
			 "recipient_id": $scope.pair_id
			}
    }).success(function(response) {
        if (response.status == 200) {
          $scope.all_msgs = response.data;
          $scope.getLastMessageId();
          console.log($scope.last_chat_id);
          $scope.updateSeen();
        }
        console.log($scope.all_msgs);
    });
  };
  $scope.sendMessage = function() {
    if ($scope.sender_message) {
    	$http({
        method: 'POST', 
        url: $scope.urlSendMessage, 
        headers: $scope.headers,
        data: {
				 "sender_id": $scope.user_id,
				 "recipient_id": $scope.pair_id,
				 "message": $scope.sender_message
				}
      }).success(function(response) {
          if (response.status == 200) {
          	console.log(response);
            
          }
          // $scope.listMessages(true);
      });
      $scope.sender_message = "";
    }
  };

  $scope.getLastMessageId = function() {
    $scope.last_chat_id = $scope.all_msgs[$scope.all_msgs.length - 1].chat_id;
  };

  $scope.updateSeen = function(){
    $http({
        method: 'POST', 
        url: $scope.urlUpdateSeen, 
        headers: $scope.headers,
        data: {
          "chat_id": $scope.last_chat_id,
          "user_id": $scope.user_id
        }
      }).success(function(response) {
          if (response.status == 200) {
            console.log(response);
            
          }
      });
  }

  $scope.set_chattingWith = function(){
    $scope.chattingWith = true;
  }
  $scope.remove_chattingWith = function(){
    $scope.chattingWith = false;
  }

  $scope.view_fileDialog = function(){
     document.getElementById('file').click();
  }
  $scope.Upload = function(){
    // var files = document.getElementById('file').files[0];
    console.log($scope.img_file);
  }


  $scope.openSetting = function() {
  	console.log('----- open setting screen -----')
  	$state.go('tabs.setting');
  }
	$ionicModal.fromTemplateUrl('components/chat/private-pic-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});

	$scope.openPrivatePicModal = function() {
		$scope.modal.show();
	};

	$scope.closePrivatePicModal = function() {
		$scope.modal.hide();
	};

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});

	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
		// Execute action
	});
	
	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
		// Execute action
	});
  $scope.openSearch = function() {
  	console.log('----- open search screen -----')
  	$state.go('tabs.search');
  }
  $scope.goBack = function() {
  	$interval.cancel(stopFetch);
		$ionicViewSwitcher.nextDirection('back');
		$state.go('tabs.mychat');
  }

  $scope.init = function() {
    $scope.getAllMessages();
    stopFetch = $interval(function () {
      $scope.getAllMessages();
    }, 3000);
  };
  $scope.init();
});

// angular.module('chat.controller',[]).directive('fileModel', ['$parse', function ($parse) {
//     return {
//     restrict: 'A',
//     link: function(scope, element, attrs) {
//         var model = $parse(attrs.fileModel);
//         var modelSetter = model.assign;
 
//         element.bind('change', function(){
//             scope.$apply(function(){
//                 modelSetter(scope, element[0].files[0]);
//             });
//         });
//     }
//    };
// }]);
 
// // We can write our own fileUpload service to reuse it in the controller
// angular.module('chat.controller',[]).service('fileUpload', ['$http', function ($http) {
//     this.uploadFileToUrl = function(file, uploadUrl, name){
//          var fd = new FormData();
//          fd.append('file', file);
//          fd.append('name', name);
//          $http.post(uploadUrl, fd, {
//              transformRequest: angular.identity,
//              headers: {'Content-Type': undefined,'Process-Data': false}
//          })
//          .success(function(){
//             console.log("Success");
//          })
//          .error(function(){
//             console.log("Erro");
//          });
//      }
//  }]);