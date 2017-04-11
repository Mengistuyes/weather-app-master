app.controllers.controller("WeatherDayDetailController",
['$scope', "ajaxService","dataStorageService","$route", "$location",
function($scope, ajaxService, dataStorageService, $route, $location) {
	function init() {
        $scope.location = dataStorageService.getLocation() || {};

        var day = $route.current.params['day'];
        var item = $route.current.params['item'];
        var groupedDayData = dataStorageService.getFiveDayForecastGroupedData();

        if(!groupedDayData){
        	$location.url('/home');
        	return;
		}
		item = item?parseInt(item): 0;
        $scope.weatherInfo = groupedDayData[day].list[item];
        $scope.weatherInfo.sys.sunrise = getFormattedDate($scope.weatherInfo.sys.sunrise);
        $scope.weatherInfo.sys.sunset = getFormattedDate($scope.weatherInfo.sys.sunset);

	}

	function getFormattedDate(unix_timestamp){

        var date = new Date(unix_timestamp*1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        return hours + ':' + minutes.substr(-2);
	}
	
	init();
}]);
