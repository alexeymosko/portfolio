;(function() {
"use strict";

var app = angular.module('portfolio');
  app.directive('logo', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/shared/logo/logoTemplate.html'
  	}
  });
}());
