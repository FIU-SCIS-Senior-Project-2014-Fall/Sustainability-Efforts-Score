
var app = angular.module('App', ['ngRoute']);

var busyIndicator = new WL.BusyIndicator('content');

app.factory("busyIndicator",function()
	{
		return busyIndicator;
	}		
);

app.config(['$routeProvider',
	function($routeProvider)
	{
		 $routeProvider.when('/',
		 {
			 templateUrl:'views/home.html',
			 controller: 'homeController'
		 }).
		 when('/login',
		 {
			 templateUrl:'views/login.html'
		 }).
		 when('/userHome',
		 {
			 templateUrl:'views/userHome.html',
			 controller: 'userHomeController'
		 }).
		 otherwise({
			 redirectTo: '/'
		 });;
	}
]);



