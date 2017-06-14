'use strict';

// Declare app level module which depends on views, and components
angular.module('markupChallenge', [
  'ngRoute',
  'markupChallenge.product',
  'markupChallenge.view1',
  'markupChallenge.view2',
  'markupChallenge.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
  when("/product", {
        templateUrl : "product/product.html",
        controller: "productCtrl"
    }).
    otherwise({redirectTo: '/product'});
}]);
