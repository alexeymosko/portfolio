;(function() {
"use strict";

var app = angular.module('portfolio', ['ui.router', 'in-viewport', 'ngSanitize']);
app.config(function($stateProvider, $urlRouterProvider) { 
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/components/home/homeView.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'app/components/about/aboutView.html'
		})
		.state('skills', {
			url: '/skills',
			templateUrl: 'app/components/skills/skillsView.html'
		})
		.state('projects', {
			url: '/projects',
			templateUrl: 'app/components/projects/projectsView.html'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'app/components/contact/contactView.html'
		})
});
app.run(
    ['$rootScope', '$timeout', '$transitions',
        function($rootScope, $timeout, $transitions) {
        	$transitions.onStart({ }, function(trans) {
        		$rootScope.preloader = true; 
				trans.promise.finally(function() {
					$timeout(function(){
                	$rootScope.preloader = false;
                }, 1200)
				});
  			});
        }
    ])
}());

;(function() {
"use strict";

angular.module('portfolio').run(['$templateCache', function($templateCache) {$templateCache.put('shared/footerTemplate.html','<footer class = "footer">\n\t<div class = "footer-icons">\n\t\t<a class = "footer-icons__link footer-icons__link--email" href= "mailto:alexeymosko@gmail.com" alt  = "Email icon"></a>\n\t\t<a class = "footer-icons__link footer-icons__link--facebook" href= "https://www.facebook.com/alexey.mosko" alt  = "Facebook icon"></a>\n\t\t<a class = "footer-icons__link footer-icons__link--github" href= "#" alt  = "Github icon"></a>\n\t</div>\n\t<div class = "footer-text">Alexey Mosko, 2017</div>\n</footer>');
$templateCache.put('components/projects/projectsTemplate.html','<div class = "content-container" viewport = "window">\n\t<div class = "projects-header" viewport-enter= "projectsCtrl.header.inViewport = true" viewport-leave= "projectsCtrl.header.inViewport = false">\n\t\t<div class = "projects-header__img-wrapper" ng-class = "{\'projects-header__img-wrapper--start\': projectsCtrl.header.inViewport === true}">\n\t\t<img class = "projects-header__img" ng-src = "{{projectsCtrl.header.pic}}" alt = "projects">\n\t\t</div>\n\t\t<div class = "projects-header__text">{{projectsCtrl.header.text}}</div>\n\t\t<div class = "projects-header-line" ng-class = "{\'projects-header-line--visible\':projectsCtrl.showLine}">\n\t</div>\n\t<div class = "projects-list">\n\t\t<div class = "projects-list-item" ng-repeat = "item in projectsCtrl.items">\n\t\t\t<h2 class = "projects-list-item-headline">{{item.headline}}</h2>\n\t\t\t<div class = "projects-list-item-body">\n\t\t\t<a class = "projects-list-item-link" ng-href = "{{item.ref}}" target = "blank">\n\t\t\t\t<img class = "projects-list-item-pic" ng-src = "{{item.pic}}">\n\t\t\t</a>\t\n\t\t\t<p class = "projects-list-item-description">{{item.description}}</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n</div>');
$templateCache.put('components/skills/skillsTemplate.html','<div class = "content-container">\n\t<div class = "skills-list" viewport = "window" >\n\t\t\t<div class = "skills-item"  viewport-enter="item.inViewport = true" viewport-leave= "item.inViewport = false"\nng-repeat="item in skillsCtrl.items track by $index">\n\t\t\t\t<div class= "skills-item__img-wrapper" ng-class = "{\'skills-item__img-wrapper--start\': item.inViewport === true}">\n\t\t\t\t<img class = "skills-item__img"  ng-src = "{{item.image}}" >\n\t\t\t\t</div>\n\t\t\t\t<h2 class = "skills-item__headline"><span>{{item.headline}}</span></h2>\n\t\t\t\t<div class = "skills-item__description" ng-bind-html = "item.description"></div>\n\t\t\t</div>\n\t\t\t\n\t</div>\n</div>');
$templateCache.put('shared/footer/footerTemplate.html','<footer class = "footer">\n\t<div class = "footer-container">\n\t\t<div class = "footer-icons">\n\t\t\t<a class = "footer-icons__link footer-icons__link--email" href= "mailto: alexeymosko@gmail.com" alt  = "Email icon" target = "blank"></a>\n\t\t\t<a class = "footer-icons__link footer-icons__link--facebook" href= "https://www.facebook.com/alexey.mosko" alt  = "Facebook icon" target= "blank"></a>\n\t\t\t<a class = "footer-icons__link footer-icons__link--github" href= "https://github.com/alexeymosko" alt  = "Github icon" target = "blank"></a>\n\t\t</div>\n\t\t<div class = "footer-text"><span>Alexey Mosko </span><span>{{footerCtrl.year}}</span></div>\n\t</div>\n</footer>');
$templateCache.put('shared/loader/loaderTemplate.html','<div class = "loader-overlay">\n\t<div class="loader">\n\t\t\t  <div class="rect"></div>\n\t\t\t  <div class="rect"></div>\n\t\t\t  <div class="rect"></div>\n\t\t\t  <div class="rect"></div> \n\t</div>\n</div>');
$templateCache.put('shared/logo/logoTemplate.html','<div class = "nav-home" ui-sref="home">\n\t\t<!--<img class = "nav-home__img" src="images/home.png" alt = "Alexey Mosko"> -->\n\t<svg class = "logo">\n\t  \t<defs>\n\t\t  \t<clipPath id = "clipCircle">\n\t\t    \t<use xlink:href="#circle" />\n\t\t  \t</clipPath>\n\t  \t</defs>\n\t \t <circle class = "logo__circle" id = "circle" r = "45" cx = "50" cy = "50">\n\t   \t</circle>\n  \t\t<image class = "logo__img" xlink:href="images/home.png" clip-path="url(#clipCircle)">\n  \t\t</image>\n\t</svg>\n\t<div class = "nav-home-text">\n\t\t\t<div class = "nav-home-text__name">Alexey Mosko</div>\n\t\t\t<div class = "nav-home-text__description">Front-end developer</div>\n\t</div>\n</div> ');
$templateCache.put('shared/navbar/navbarTemplate.html','<nav class = "nav" ng-class = "{\'nav--home\':isActive(\'/\')}">\n\t<logo class = "logo" ng-hide = "isActive(\'/\')"></logo>\n\t<ul class = "top-menu">\n\t\t<li class = "top-menu__item"><a class = "top-menu__link" ui-sref="home" alt="">Home</a></li>\n\t\t<li class = "top-menu__item"><a class = "top-menu__link" ui-sref="about" alt="">About</a></li>\n\t\t<li class = "top-menu__item"><a class = "top-menu__link" ui-sref="skills" alt="">Skills</a></li>\n\t\t<li class = "top-menu__item"><a class = "top-menu__link" ui-sref="projects" alt="">Projects</a></li>\n\t\t<li class = "top-menu__item"><a class = "top-menu__link" ui-sref="contact" alt="">Contact</a></li>\n\t</div>\n</nav>');
$templateCache.put('shared/typewriter/typewriterTemplate.html','<div class = "tw-wrapper">\n\t<h1 class = "tw-title"></h1>\n</div>\n');}]);
}());

;(function() {
"use strict";

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
}());

;(function() {
"use strict";

var app = angular.module('portfolio');
  app.directive('navbar', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/shared/navbar/navbarTemplate.html',
  		controller: ['$scope', '$location', function($scope, $location){
			$scope.isActive = function(viewLocation) {
    			return viewLocation === $location.path();
			};
		}]
  	}
  });
}());

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

;(function() {
"use strict";

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
}());

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

;(function() {
"use strict";

var app = angular.module('portfolio');
  app.directive('skills', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './app/components/skills/skillsTemplate.html',
  		link: function(scope, element) {
  			/*var images = element[0].querySelectorAll(".skills-item__img");
  			[].forEach.call(images, function(el){
  				el.addEventListener("animationend", function(){
  					el.classList.remove('skills-item__img--start');
  				});
  				el.classList.add('skills-item__img--start');
  			}); */
  		},
  		controller: function(){
  			this.items = [{
  				image: "./images/coding.png",
  				headline: "Coding",
  				description: "<p>I produce reliable, adaptable and maintainable client-side script using JavaScript and corresponding frameworks (Angular JS, jQuery) according to the modern standards and best practices for web development. </p><p>I have a confident command of tools for creating asynchronous web applications (AJAX, JSON), build tools and tusk runners (NPM, Gulp) as well as source control tools (Git). </p><p>I am competent at cross platform debugging for browsers and mobile devices, have a solid understanding of MVC architecture  and able to work with third party APIs.</p>"
  			}, {image: "images/layout.png",
  				headline: "Layout",
  				description: "<p>I turn mockups and prototypes into cross-platform, pixel-perfect web UIs , landing pages and websites  using  the latest versions of HTML, CSS as well as stylesheet pre-processors (LESS).</p><p>I also have experience in wire-framing and design tools (Readymag, Tilda, NinjaMock)</p>"}, 
  				{image: "images/analytics.png",
  				headline: "Website analytics",
  				description: "<p>I analyze website performance using traffic tracking tools (Google Analytics) and generate in-depth reports concerning  key metrics as visitors/unique visitors,  traffic sources, page views, bounce rates, average time on site as well as in-page analyses. </p><p>I manage pay-per-click online campaigns and analyze conversions. </p>"}, 
  				{image: "images/video.png",
  				headline: "Video production",
  				description: "<p>I shoot video features and online tutorials using professional DSLR camera and edit footage with Adobe Premiere Pro.  </p>"}, 
  				{image: "images/language.png",
  				headline: "Language skills",
  				description: "<p>I'm proficient in both written and spoken English and German, be it a purely tech conversation or business negotiations.  I can also read documentation in French. </p>" },
  				{image: "images/softskills.png",
  				headline: "Soft skills",
  				description: "<p>Surely it's not everything about the code. Good communication is key for a successful project and I make my best to deliver clear messages to everyone in the team including non-tech partners.</p><p> I am good at multitasking and prepared to handle deadline pressure. I am flexible, quick to adapt to new environments and always eager to extend my technological stack. </p>"}];
  		}, controllerAs: "skillsCtrl"
  	}
  });
}());

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

;(function() {
"use strict";

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
}());

;(function() {
"use strict";


}());

;(function() {
"use strict";

!function(i){"use strict";i.module("in-viewport",[])}(window.angular);
!function(e){"use strict";function n(){return{require:"^viewport",restrict:"A",link:t}}function t(e,n,t,i){8!==n[0].nodeType&&t.viewportEnter&&i.add("enter",n[0],function(){e.$apply(function(){e.$eval(t.viewportEnter)})})}e.module("in-viewport").directive("viewportEnter",n)}(window.angular);
!function(e){"use strict";function i(){return{require:"^viewport",restrict:"A",link:n}}function n(e,i,n,t){8!==i[0].nodeType&&n.viewportLeave&&t.add("leave",i[0],function(){e.$apply(function(){e.$eval(n.viewportLeave)})})}e.module("in-viewport").directive("viewportLeave",i)}(window.angular);
!function(t){"use strict";function e(t){return{restrict:"A",scope:!0,controller:n,link:i(t)}}function n(e){function n(){var e,o,r;if(f){if(a)return void(w=!0);a=!0,e=f(),t.forEach(p,function(t){o=t.element.getBoundingClientRect(),r=i(o.left,o.top,e)||i(o.right,o.top,e)||i(o.left,o.bottom,e)||i(o.right,o.bottom,e),(null===t.state||t.state!==r)&&(r&&"function"==typeof t.enter?t.enter():r||"function"!=typeof t.leave||t.leave()),t.state=r}),a=!1,w&&(w=!1,n())}}function i(t,e,n){return t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}function o(t){f=t}function r(){return f}function u(){window.clearTimeout(d),d=window.setTimeout(function(){n()},100)}function l(t,e,n){var i;if(-1===["leave","enter"].indexOf(t))throw"invalid event specified";i=s.indexOf(e),-1===i&&(s.push(e),p.push({element:e,state:null,leave:null,enter:null}),i=s.length-1),p[i][t]=n}function c(){return p}var d,f=null,a=!1,w=!1,s=[],p=[];t.element(e).on("resize",u).on("orientationchange",u),this.setViewportFn=o,this.getViewportFn=r,this.add=l,this.getItems=c,this.updateDelayed=u}function i(e){var n=function(n,i,o,r){"window"===o.viewport?(r.setViewportFn(function(){return{top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth}}),t.element(e).on("scroll",r.updateDelayed)):(r.setViewportFn(function(){return i[0].getBoundingClientRect()}),i.on("scroll",r.updateDelayed)),n.$watch(function(){r.updateDelayed()})};return n.$inject=["$scope","iElement","iAttrs","viewport"],n}t.module("in-viewport").directive("viewport",e),e.$inject=["$window"],n.$inject=["$window"],i.$inject=["$window"]}(window.angular);
}());
