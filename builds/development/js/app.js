var myApp = angular.module('myApp',['ngRoute','appControllers','ui.bootstrap']);

var appControllers = angular.module('appControllers',[]);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
			when('/login',{
				templateUrl: 'views/login.html',
				controller: 'RegistrationController'
			}).
			when('/register',{
				templateUrl: 'views/register.html',
				controller: 'RegistrationController'
				
			}).when('/meetings',{
				templateUrl: 'views/meetings.html',
				controller: 'RegistrationController'
			}).
			otherwise({
				redirectTo:'/login'
			});
}]);

/*
angular.module('ui.bootstrap').controller('AlertDemoCtrl', function ($scope) {
  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
});

*/