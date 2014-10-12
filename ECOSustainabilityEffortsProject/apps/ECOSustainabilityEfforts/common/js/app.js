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
<<<<<<< HEAD
=======
		'/recycleLocationNearBy',
		{
			templateUrl:'views/recycleLocationNearBy.html',
			controller: 'recycleLocationNearByController'
		}).when(
>>>>>>> d04b7a6a89bbcc72ae3d839bd45197a7ac351c64
		'/editProfile',
		{
			templateUrl:'views/editProfile.html',
			controller: 'editProfileController'
<<<<<<< HEAD
		}). when(
		'/newGroupProfile',
		{
			templateUrl:'views/groupProfile.html',
			controller: 'newGroupController'
		}).when(
		'/editGroupProfile',
		{
			templateUrl:'views/groupProfile.html',
			controller: 'editGroupProfileController'
		}).otherwise({
=======
		}). otherwise({
>>>>>>> d04b7a6a89bbcc72ae3d839bd45197a7ac351c64
			redirectTo: 'views/userHome.html'
		});
	}
);



