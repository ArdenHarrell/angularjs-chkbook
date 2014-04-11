'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function checkbookCtrl($scope, $http) {
	// Default value: Used to test simple filter...
	$scope.user = { "firstName": "", "lastName": "", "amount": "" };

	// $scope.test = "Got here...";
	console.log("Got here...");

}

function MyCtrl2() {

}
MyCtrl2.$inject = [];
