angular.module('mychat.controller',[])
.controller('MyChatCtrl', function($scope, $state, $ionicViewSwitcher, $http, $interval) {
  $scope.$on('$ionicView.loaded', function () {
    //do something
    console.log('------ start my chat ctrl ------')
  });
  $scope.user_id = 1;
  $scope.headers = {
    "Content-Type": "application/json",
    "Access-Token": "EV>OutSou>2018.03.27>BA!"
  }
  $scope.img_url = "http://192.168.100.173/assets/uploads/";
  $scope.api_url = "http://192.168.100.173/api/";
  $scope.urlGetMessages = $scope.api_url + "chat/get_all";
  $scope.urlSearchMessages = $scope.api_url + "chat/search";
  $scope.all_msgs = [];
  $scope.query = "";
  var stopSearch;
  $scope.getAllMessages = function() {
    // return $interval(function () {
      $http({
        method: 'POST', 
        url: $scope.urlGetMessages, 
        headers: $scope.headers,
        data: {'user_id': $scope.user_id}
      }).success(function(response) {
          if (response.status == 200) {
            $scope.all_msgs = response.data;
          }
          console.log($scope.all_msgs);
          // $scope.listMessages(true);
      });
    // }, 5000);
  };
  $scope.searchMessages = function(){
      $http({
        method: 'POST', 
        url: $scope.urlSearchMessages, 
        headers: $scope.headers,
        data: {
          'user_id': $scope.user_id,
          'query': $scope.query
        }
      }).success(function(response) {
          if (response.status == 200) {
            $scope.all_msgs = response.data;
          }else if (response.status == 401) {
            $scope.all_msgs = [];
          }
          console.log($scope.all_msgs);
      });
  }

  $scope.dateDiff = function(date){
    var result;
    var curr_date = new Date();
    var seen_date = new Date(date);
    var diff_time = curr_date.getTime() - seen_date.getTime();
    if (diff_time >= 1000*3600*24) {
      result = parseInt(diff_time/(24*3600*1000)) + "d";
    }else if (diff_time >= 1000*3600) {
      result = parseInt(diff_time/(3600*1000)) + "h";
    }else if (diff_time >= 1000*60) {
      result = parseInt(diff_time/(60*1000)) + "m";
    }else {
      result = parseInt(diff_time/(1000)) + "s";
    }
    return result;
    console.log(result);
  }

  $scope.openSetting = function() {
  	console.log('----- open setting screen -----')
    $state.go('tabs.setting');
  }
  $scope.openSearch = function() {
    console.log('----- open search screen -----')
    $state.go('tabs.search');
  }
  $scope.openConversation = function(id) {
    console.log(id);
    $interval.cancel(stopSearch);
		$ionicViewSwitcher.nextDirection('forward');
    $state.go('chat', {'id':id});
  }
  $scope.init = function() {
    $scope.getAllMessages();
    // $scope.searchMessages();
  };
  $scope.init();
});