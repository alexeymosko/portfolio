;(function() {
"use strict";

var app = angular.module('portfolio');
  app.directive('navbar', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/shared/navbar/navbarTemplate.html'
  	}
  });
}());
