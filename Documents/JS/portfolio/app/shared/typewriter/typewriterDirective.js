 var app = angular.module('portfolio');
  app.directive('typewriter', function(){
  	return {
  		restrict: 'E',
  		scope: {typetext: '@'},
  		templateUrl: './app/shared/typewriter/typewriterTemplate.html',
  		link: function(scope, element){
  			var target = element[0].querySelector('.tw-title');
  			var typeMashine = typewriter(target, 'fast');
  			typeMashine.dealWithIt(JSON.parse(scope.typetext));
  		}
  	}
  });