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
});
