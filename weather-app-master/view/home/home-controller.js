app.controllers.controller("HomeController",
['$scope', "ajaxService",
function($scope, ajaxService) {
	function init() {
		$scope.weatherInfo = {weather:[], main:{}};
		$scope.weather = {};
        getLocation();
	}

	function getLocation(){
		ajaxService.getLocation(function(err, result){
			if(!err){
				$scope.location = result;
                getTodayWeatherInfo(result);
			}
		});
	}

	function getTodayWeatherInfo(result){
		ajaxService.getTodayWeatherInfo(result, function(err, result){
            if(!err){
                $scope.weatherInfo = result;
                $scope.weather = result.weather? result.weather[0]:$scope.weather ;
            }
        })
	}
	
	init();
}]);
