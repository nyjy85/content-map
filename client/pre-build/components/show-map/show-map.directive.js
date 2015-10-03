angular.module('page.directive')
.directive("showMap", ['leafletData', function(leafletData){
  return {
    restrict: "E",
    templateUrl: "/pre-build/components/show-map/show-map.directive.html",
    link: function(scope, elem, attr){
      console.log('inside the show map directive');
      // leafletData.getMap('the-map').then(function(map) {
      //   L.GeoIP.centerMapOnPosition(map, 15);
      // });

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
          message: "<p ng-click='open()'>Borough Market</p>",
          focus: true,
          draggable: false
        },
        londonBridge: {
          lat: 51.505319,
          lng: -0.086053,
          message: 'London Bridge',
          focus: false,
          draggable: false
        }
      }


    }
  };
}]);