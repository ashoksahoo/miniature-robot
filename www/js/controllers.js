/**
 * Created by Ashok on 7/27/2014.
 */
'use strict';

/* Controllers */

angular.module('blogApp.controllers', [])
  .controller('CreateEditCtrl', ['$scope','$rootScope', '$http', '$location',
		function($scope,$rootScope, $http, $location) {
		$scope.post = function() {
					$http.post(url, {
						title: $scope.title,
						content: $scope.content
					})
						.success(function(response) {
							$scope.post = response;
							$location.url('/');
						})
						.error(function() {
							$scope.msg = 'Can not Post';
						});

				};

  }])
  .controller('ListCtrl', ['$scope','$rootScope', '$http', '$location',
		function($scope,$rootScope, $http, $location) {
		$http.get (url)
			.success(function(response) {
				$scope.posts = response;
			})
			.error(function() {
				$scope.msg = 'Can not Fetch Post';
			});



  }]);
