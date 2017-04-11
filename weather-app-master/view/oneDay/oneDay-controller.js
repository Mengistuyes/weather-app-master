app.controllers.controller("OneDayController",
['$scope', "ajaxService","dataStorageService","$route", "$location",
function($scope, ajaxService, dataStorageService, $route, $location) {
	function init() {
		$scope.weatherInfoList = [];
        var location = dataStorageService.getLocation();
        var groupedDayData = dataStorageService.getFiveDayForecastGroupedData();
        if(!location || !groupedDayData){
            $location.url('/home');
            return;
        }
        var dayKey = $route.current.params['day'];
        var dayWeatherData = groupedDayData[dayKey];
        if(dayWeatherData){
            $scope.day = dayKey;
            $scope.weatherInfoList = dayWeatherData.list;
        }
	}

	init();
}]);
