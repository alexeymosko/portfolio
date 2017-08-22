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
  				description: "<p>Surely it's not everything about the code. Good communication is key for a successful project and I make my best to deliver clear messages to everyone in the team including non-tech partners.</p><p> I am good at multitasking and prepared to handle deadline pressure. I am flexible, quick to adapt to new environments and always eager to extend my technological stack. </p>"
        }];
        this.show = {};
  		}, 
      controllerAs: "skillsCtrl"
  	}
  });
}());
