angular.module('page.directive')
.directive("navbar", function(){
	return {
		restrict: "E",
		templateUrl: "/pre-build/components/navbar/navbar.html"
	};
});