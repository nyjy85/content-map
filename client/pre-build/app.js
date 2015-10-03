require('angular');
global.jQuery = require('jquery');
require('angular-ui-router');
require('bootstrap');
require('leaflet');
angular.module('page.directive',[]);
// angular.module('leaflet-directive', []);
require('angular-simple-logger');
require('angular-leaflet-directive');
require('angular-ui-bootstrap');
require('./home/home.controller');
require('./modules/modules.controller');
require('./modules/modules.factory');
require('./vendor/geoip');
require('./components');
// require('./navbar/navbar.directive');
// require('./show-map/show-map.directive');
// require('./my-modal/my-modal.directive');

var app = angular.module('Meaniscule', [
  'ui.router',
  'ui.bootstrap',
  'page.directive',
  'leaflet-directive'
])
.config(function ($urlRouterProvider, $locationProvider) {
   // This turns off hashbang urls (/#about) and changes it to something normal (/about)
   $locationProvider.html5Mode(true);
   // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
   $urlRouterProvider.otherwise('/');
})

