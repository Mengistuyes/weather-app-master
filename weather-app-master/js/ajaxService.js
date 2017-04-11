app.services.service("ajaxService",
["$http", "dataStorageService", function($http, dataStorageService) {
    var APIKEY = 'b87ef13e00bc9136960cd7c0541a91b3';

    function getLocation(callback){
        var url = 'http://ipinfo.io';
        $http.get(url)
            .success(function(location) {
                console.log("location:", location);
                dataStorageService.setLocation(location);
                callback(null, location);
            });
    }

	function getTodayWeatherInfo(location, callback) {

        var url = 'http://api.openweathermap.org/data/2.5/weather';
        var cityName = location.city;
        var countryCode = location.country;
        var locationQuery = countryCode ? cityName + ',' + countryCode.toLowerCase() : cityName;

        var params = {q: locationQuery, appId:APIKEY, callback: 'JSON_CALLBACK'};

        var req = {
            method: 'jsonp',
            url: url,
            params: params
        };

        $http(req)
            .then(function (result) {
                console.log("Today's weather info:", result.data);
                callback(null, result.data);
            }, function (error) {
                callback("error", error);
            });
	}

	function get5dayWeatherInfo(location, callback) {
        var url = 'http://api.openweathermap.org/data/2.5/forecast';
        var cityName = location.city;
        var countryCode = location.country;
        var locationQuery = countryCode ? cityName + ',' + countryCode.toLowerCase() : cityName;

        var params = {q: locationQuery, appId: APIKEY, callback: 'JSON_CALLBACK'};

        var req = {
            method: 'jsonp',
            url: url,
            params: params
        };

        $http(req)
            .then(function (result) {
                console.log("5 days weather forecast:", result.data);
                dataStorageService.setFiveDayForecastData(result.data.list);
                callback(null, result.data.list);
            }, function (error) {
                callback("error", error);
            });
    }

	return {
        getLocation: getLocation,
        getTodayWeatherInfo: getTodayWeatherInfo,
        get5dayWeatherInfo: get5dayWeatherInfo
	};
}]);
