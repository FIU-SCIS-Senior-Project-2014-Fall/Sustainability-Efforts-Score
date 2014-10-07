var app = angular.module('App', ['ngRoute']);

var busyIndicator = new WL.BusyIndicator('content');

app.factory(
	'busyIndicatorFactory',
	function(busyIndicator)
	{
		console.log('app.factory');

		return busyIndicator;
	}		
);

app.config(
	function($routeProvider, $locationProvider)
	{
		console.log('app.config');
		
//		$locationProvider.html5Mode(true).hashPrefix('!');
		
		$routeProvider.when(
		'/',
		{
			templateUrl:'views/home.html',
			controller: 'homeController'
		}).when(
		'/login',
		{
			templateUrl:'views/login.html'
		}).when(
		'/userHome',
		{
			templateUrl:'views/userHome.html',
			controller: 'userHomeController'
		}).when(
		'/newUser',
		{
			templateUrl:'views/newUser.html',
			controller: 'newUserController'
		}).when(
		'/editProfile',
		{
			templateUrl:'views/editProfile.html',
			controller: 'editProfileController'
		}). otherwise({
			redirectTo: 'views/userHome.html'
		});
	}
);



