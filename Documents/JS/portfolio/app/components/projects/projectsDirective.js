 var app = angular.module('portfolio');
  app.directive('projects', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/components/projects/projectsTemplate.html',
  		controller: ['$timeout', function($timeout){
  			this.items = [{
  				pic: "./images/portfolio_site.jpg",
  				headline: "Portfolio",
  				description: "This is the current portfolio website written on Angular JS."
  			}, {
  				pic: "./images/typewriter.jpg",
  				headline: "Typewriter",
  				description: "Typewriter is a program able to show the desired input dynamically imitating typos. Written on native JS."
  			}];
  			this.showLine = false;
 			var self = this;
 			$timeout(function(){
 				self.showLine = true;
 			}, 1000);
 			this.header = {
 				pic: "./images/projects_rounded.png",
 				text: "Take a look at the samples of my work."
 			}
  		}], controllerAs: "projectsCtrl"
  	}
  });