;(function() {
"use strict";

var app = angular.module('portfolio', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) { 
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			//templateUrl: 'app/components/home/homeView.html'
			template: 'Hello World!'
		});
});
}());
