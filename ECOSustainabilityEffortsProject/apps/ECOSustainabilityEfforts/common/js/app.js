var app = angular.module('App', ['ngRoute', 'datatables', 'tc.chartjs', 'ui.bootstrap']);

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
		'/newMaterial',
		{
			templateUrl:'views/newMaterial.html',
			controller: 'newMaterialController'
		}).when(
		'/materials',
		{
			templateUrl:'views/materials.html',
			controller: 'materialsController'
		}).when(
		'/items',
		{
			templateUrl:'views/items.html',
			controller: 'itemsController'
		}).when(
		'/newItemStepOne',
		{
			templateUrl:'views/newItemStepOne.html',
			controller: 'newItemStepOneController'
		}).when(
		'/newItemDuplicates',
		{
			templateUrl:'views/newItemDuplicates.html',
			controller: 'newItemDuplicatesController'
		}).when(
		'/newItemStepTwo',
		{
			templateUrl:'views/newItemStepTwo.html',
			controller: 'newItemStepTwoController'
		}).when(
		'/acceptUserGroups',
		{
			templateUrl:'views/acceptUserGroups.html',
			controller: 'acceptUserGroupsController'
		}).when(
		'/acceptUserUsers',
		{
			templateUrl:'views/acceptUserUsers.html',
			controller: 'acceptUserUsersController'
		}).when(
		'/recycle',
		{
			templateUrl:'views/recycle.html',
			controller: 'recycleController'
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



