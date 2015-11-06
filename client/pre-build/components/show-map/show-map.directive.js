angular.module('page.directive')
.directive("showMap", ['leafletData','$modal','$log','$compile', function(leafletData,$modal,$log,$compile){
  return {
    restrict: "E",
    templateUrl: "/pre-build/components/show-map/show-map.directive.html",
    link: function(scope, elem, attr){
      // leafletData.getMap('the-map').then(function(map) {
      //   L.GeoIP.centerMapOnPosition(map, 15);
      // });

     var html = function(place){
      return "<p ng-click='open()'>"+place+"</p>";
    }


     scope.open = function(){
       var modalInstance = $modal.open({
         animation: true,
         templateUrl: '/pre-build/components/modal/template.html',
         controller: 'HomeController',
         size: 'lg',
         resolve: {
           items: function () {
             return scope.items;
           }
         }
       });

       modalInstance.result.then(function (selectedItem) {
         scope.selected = selectedItem;
       }, function () {
         $log.info('Modal dismissed at: ' + new Date());
       });
     }

      scope.defaults = {
       tileLayer: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
        path: {
          weight: 10,
          color: '#800000',
          opacity: 1
        },
        scrollWheelZoom: false
      };

      scope.center = {
        lat: 51.505,
        lng: -0.09,
        zoom: 8
      }

      scope.markers = {
        boroughMarket: {
          lat: 51.506268,
          lng: -0.091195,
          message: html('Borough Market'),
          getMessageScope: function(){
            return scope;
          },
          focus: true,
          draggable: false
        },
        londonBridge: {
          lat: 51.505319,
          lng: -0.086053,
          message: html('London Bridge'),
          getMessageScope: function(){
            return scope;
          },
          focus: false,
          draggable: false
        }
      }


    }
  };
}]);
