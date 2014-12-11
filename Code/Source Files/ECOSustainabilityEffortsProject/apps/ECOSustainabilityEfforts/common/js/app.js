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
		'/joinGroups',
		{
			templateUrl:'views/joinGroups.html',
			controller: 'joinGroupsController'
		}).when(
		'/joinGroupsUsers',
		{
			templateUrl:'views/joinGroupsUsers.html',
			controller: 'joinGroupsUsersController'
		}).when(
		'/myGroupsUsers',
		{
			templateUrl:'views/myGroupsUsers.html',
			controller: 'myGroupsUsersController'
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
		'/joinedGroupsUsers',
		{
			templateUrl:'views/joinedGroupsUsers.html',
			controller: 'joinedGroupsUsersController'
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
		}).when(
		'/viewContests',
		{
			templateUrl:'views/viewContests.html',
			controller: 'viewContestsController'
		}).when(
		'/viewContestActivity',
		{
			templateUrl:'views/viewContestActivity.html',
			controller: 'viewContestActivityController'
		}).when(
		'/editJoinedGroupUser',
		{
			templateUrl:'views/editJoinedGroupUser.html',
			controller: 'editJoinedGroupUserController'
		}).otherwise({
			redirectTo: 'views/userHome.html'
		});
	}
);



