/**
 * Created by Ashok on 7/27/2014.
 */

'use strict';

var url = "http://localhost:3000/";

angular.module('blogApp', [
  'ngRoute',
  'blogApp.services',
  'blogApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'tpl/list.html', controller: 'ListCtrl'});
  $routeProvider.when('/new', {templateUrl: 'tpl/create.html', controller: 'CreateEditCtrl'});
  $routeProvider.when('/edit/:id', {templateUrl: 'tpl/edit.html', controller: 'CreateEditCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
