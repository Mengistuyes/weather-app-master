app.directives.directive( "dateFormat",
    [
        function () {
            return {
                restrict: "AE",
                scope: {item: "=item"},
                templateUrl: "view/dateFormat/dateFormat.html",
                link: function (scope, $element, attributes) {
                    function init() {
                        scope.formattedDate = getFormattedDate(scope.item.dt);
                    }

                    function getFormattedDate(unix_timestamp){

                        var date = new Date(unix_timestamp*1000);
                        var hours = date.getHours();
                        var minutes = "0" + date.getMinutes();
                        return hours + ':' + minutes.substr(-2);
                    }

                    init();
                }

            };
}]);