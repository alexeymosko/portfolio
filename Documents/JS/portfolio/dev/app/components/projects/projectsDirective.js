;(function() {
"use strict";

var app = angular.module('portfolio');
  app.directive('projects', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/components/projects/projectsTemplate.html',
  		controller: ['$timeout', function($timeout){
  			this.items = [{
  				pic: "./images/portfolio_site.jpg",
  				headline: "Portfolio",
  				description: "This is the current portfolio website written on Angular JS.",
          ref: "https://portfolio-8e960.firebaseapp.com/#!/"
  			}, {
  				pic: "./images/typewriter.jpg", 
  				headline: "Typewriter",
  				description: "Typewriter is a program able to show the desired input dynamically imitating typos. Written on native JS.",
          ref: "https://jsfiddle.net/alexeymosko/whta9m3x/"
  			},
          {
          pic: "./images/resto.jpg",
          headline: "Resto",
          description: "A sample Angular single-page app with authorization and content uploading functionality",
          ref: "https://resto-2411b.firebaseapp.com/"
        },
          {
          pic: "./images/loaders.jpg",
          headline: "Loaders",
          description: "A set of sample loaders written using SVG and JS animations",
          ref: "https://jsfiddle.net/alexeymosko/akj6n6zb/"
          },
        ];
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
}());
