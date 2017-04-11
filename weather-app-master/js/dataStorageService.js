app.services.service("dataStorageService",
[function() {
    this.location = null;
    this.setLocation = function(location){
        this.location = location;
    };
    this.getLocation = function(){
        return this.location;
    };
    this.setFiveDayForecastData = function(data){
        this.fiveDayForcastData = data;
    };
    this.getFiveDayForecastData = function(){
        return this.fiveDayForcastData;
    };
    this.setFiveDayForecastGroupedData = function(data){
        this.fiveDayForecastGroupedData = data;
    };
    this.getFiveDayForecastGroupedData = function(){
        return this.fiveDayForecastGroupedData;
    };

    return this;
}]);
