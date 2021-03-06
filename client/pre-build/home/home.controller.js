angular.module('page.directive')
.config(function($stateProvider) {
  $stateProvider.state('home', {
      url: '/',
      templateUrl: '/pre-build/home/home.html',
      controller: 'HomeController'
  });
})
.controller('HomeController', ['$log', '$modal', '$compile', '$scope', '$http', 'leafletData',
  function($log, $modal, $compile, $scope, $http, leafletData){ 

      // modal shiet
    $scope.items = ['item 1', 'item 2', 'item 3'];

    $scope.center = {};

  /*
    $scope.$on('leafletDirectiveMarker.click', function(event, args){
      console.log('hello world!')
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: '/pre-build/components/modal/template.html',
        controller: 'HomeController',
        size: 'lg',
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });

      $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
      };
    });
*/
     $scope.open = function(){
       console.log('hellloooo')
       var modalInstance = $modal.open({
         animation: true,
         templateUrl: '/pre-build/components/modal/template.html',
         controller: 'HomeController',
         size: 'lg',
         resolve: {
           items: function () {
             return $scope.items;
           }
         }
       });

       modalInstance.result.then(function (selectedItem) {
         $scope.selected = selectedItem;
       }, function () {
         $log.info('Modal dismissed at: ' + new Date());
       });
     }


    $scope.tabs = [{title: "content", items: [1,2,3]}, {title: "photos", items: [3, 4, 5]}, {title: "calendar", items: [6, 7, 8]}, {title: "transportation", items:[9, 10, 11]}]
    $scope.msgfromscope = "...and i'm a message from the homecontroller scope, just so you know that i work!";

}]);
