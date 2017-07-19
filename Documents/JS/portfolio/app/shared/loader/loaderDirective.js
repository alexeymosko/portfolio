 var app = angular.module('portfolio');
  app.directive('loader', ['$interval', function($interval){
  	return {
  		restrict: 'E',
  		templateUrl: './app/shared/loader/loaderTemplate.html',
  		link: function(scope, element) {
			var rects = element[0].querySelectorAll(".rect");
			var currentActive = 0;
			rects[0].classList.add("rect--active");
			$interval(function(){
  				rects[currentActive].classList.remove("rect--active");
  				currentActive = currentActive < rects.length -1  ? ++currentActive : 0;
  				rects[currentActive].classList.add("rect--active");
			}, 450);
  		},
  	}
  }]);


  