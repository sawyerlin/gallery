var galleryApp = angular.module('galleryApp', []);

galleryApp.controller('HomeController', function($scope) {
  $scope.painters= [
  {name: 'davinci'},
  {name: 'picasso'},
  {name: 'monet'},
  {name: 'vangogh'},
  {name: 'xubeihong'},
  ];
});
