var app = angular.module("myApp", [
	"controllers",
	"routes",
	"directives",
	"services"
]);

app.controllers = angular.module("controllers", []);
app.directives = angular.module("directives", []);
app.services = angular.module("services", []);
app.routes = angular.module("routes", ["ngRoute"]);

