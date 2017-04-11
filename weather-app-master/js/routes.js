app.routes.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'view/home/home.html',
			controller: 'HomeController',
			resolve: {}
		});

        $routeProvider.when('/5day', {
            templateUrl: 'view/5day/5day.html',
            controller: '5dayController',
            resolve: {}
        });
        $routeProvider.when('/5day/:day', {
            templateUrl: 'view/oneDay/oneDay.html',
            controller: 'OneDayController',
            resolve: {}
        });
        $routeProvider.when('/5day/:day/:item', {
            templateUrl: 'view/weatherDayDetail/weatherDayDetail.html',
            controller: 'WeatherDayDetailController',
            resolve: {}
        });

		$routeProvider.otherwise({
			redirectTo : '/home'
		});
}]);
