var galleryApp = angular.module('galleryApp', 
    ['ngRoute', 'galleryControllers']);

galleryApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    }).
    when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'ContactController'
    }).
    when('/detail/:name/:id', {
      templateUrl: 'partials/detail.html',
      controller: 'DetailController'
    });
}]);
