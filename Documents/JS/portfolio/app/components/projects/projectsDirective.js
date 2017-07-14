 var app = angular.module('portfolio');
  app.directive('projects', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/components/projects/projectsTemplate.html',
  		controller: function(){
  			
  		}, controllerAs: "projectsCtrl"
  	}
  });