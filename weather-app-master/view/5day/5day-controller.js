app.controllers.controller("5dayController",
['$scope', "ajaxService","dataStorageService","$location",
function($scope, ajaxService, dataStorageService, $location) {
	function init() {
		$scope.weatherInfoList = [];
        var location = dataStorageService.getLocation();

        if(!location){
            $location.url('/home');
            return;
        }
        var groupedDayData = dataStorageService.getFiveDayForecastGroupedData();
        if(dataStorageService.getFiveDayForecastData() && groupedDayData){
            $scope.weatherInfoList = getWeatherInfoList(groupedDayData);
		} else{
        	get5dayWeatherInfo(location);
        }
	}

	function get5dayWeatherInfo(result){
		ajaxService.get5dayWeatherInfo(result, function(err, result){
            if(!err){
                var day = getGroupWeatherByDay(result);

                $scope.weatherInfoList = getWeatherInfoList(day);
                dataStorageService.setFiveDayForecastData(result);
                dataStorageService.setFiveDayForecastGroupedData(day);
            }
        })
	}
	function getWeatherInfoList(day){
        var keys = Object.keys(day);
        var weatherInfoList = [];
        keys.forEach(function(key){
            weatherInfoList.push(day[key].weatherInfo);
        });
        return weatherInfoList;
	}

	function getGroupWeatherByDay(result){
		result = result || [];
		var day = {};
		result.forEach(function(item){
            var objKey = item.dt_txt.substr(0,10);
            if(!day[objKey]){
            	day['' + objKey] = {
            		weatherInfo: {day: objKey, icon: item.weather[0].icon, description:item.weather[0].description, temp:item.main.temp},
            		list: [item]
				}
			} else{
                day[objKey].list.push(item);
			}
		});

		return day;
	}
	
	init();
}]);
