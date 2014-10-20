var app = angular.module('App', ['ngRoute', 'datatables']);

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
		'/recycleLocationNearBy',
		{
			templateUrl:'views/recycleLocationNearBy.html',
			controller: 'recycleLocationNearByController'
		}).when(
		'/editProfile',
		{
			templateUrl:'views/editProfile.html',
			controller: 'editProfileController'
		}). when(
		'/newGroupProfile',
		{
			templateUrl:'views/groupProfile.html',
			controller: 'newGroupController'
		}). when(
		'/joinedGroups',
		{
			templateUrl:'views/joinedGroups.html',
			controller: 'joinedGroupsController'
		}).when(
		'/joinGroup',
		{
			templateUrl:'views/joinGroup.html',
			controller: 'joinGroupController'
		}).when(
		'/joinedGroupUsers',
		{
			templateUrl:'views/joinedGroupUsers.html',
			controller: 'joinedGroupUsersController'
		}).when(
		'/updateGroupProfile',
		{
			templateUrl:'views/updateGroupProfile.html',
			controller: 'updateGroupProfileController'
		}).when(
		'/myGroups',
		{
			templateUrl:'views/myGroups.html',
			controller: 'myGroupsController'
		}).when(
		'/groupUsers',
		{
			templateUrl:'views/groupUsers.html',
			controller: 'groupUsersController'
		}).when(
		'/newContest',
		{
			templateUrl:'views/newContest.html',
			controller: 'newContestController'
		}).otherwise({
			redirectTo: 'views/userHome.html'
		});
	}
);



