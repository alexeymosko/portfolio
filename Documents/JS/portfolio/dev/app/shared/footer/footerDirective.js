;(function() {
"use strict";

var app = angular.module('portfolio');
  app.directive('footerBlock', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/shared/footer/footerTemplate.html',
  		controller: function(){
  			this.year = new Date().getFullYear();
  		}, controllerAs: "footerCtrl"
  	}
  });
}());
