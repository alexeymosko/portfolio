 var app = angular.module('portfolio');
 app.controller('homeController', ['$timeout', function($timeout){
 	this.showLine = false;
 	this.logoFlip = false;
 	var self = this;
 	$timeout(function(){
 		self.showLine = true;
 		self.logoFlip = true;
 	}, 1000);
 }]);
/*var line = document.getElementsByClassName("homepage-line")[0];
setInterval(function animateLine(){
  line.classList.toggle("line--visible");
}, 2000);

*/