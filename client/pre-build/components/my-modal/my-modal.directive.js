angular.module('page.directive')
.directive("myModal", [function(){
  return {
    restrict: "E",
    templateUrl: "/pre-build/components/my-modal/my-modal.directive.html",
    scope: {
        contentTab: "=contentTab"
    },
    link: function(scope, elem, attrs){
        console.log('ttaaaab', scope.contentTab);
	console.log('I wrote this inside VIM!');
    }
  };
}]);
