var galleryApp = angular.module('galleryApp', []);

galleryApp.directive('onLastRepeat', function () {
  return function (scope, element, attrs) {
    if (scope.$last) setTimeout(function () {
      scope.$emit('onRepeatLast', element, attrs);
    }, 1);
  
  }
}).controller('HomeController', function($scope, $http) {
  $scope.$on('onRepeatLast', function(scope, element, attrs) {
    $('#top').unslider();
  });

  $http.get('datas/home.json').success(function(data) {
    $scope.TopFive = data.TopFive;
    $scope.Kind = data.Kind;
    $scope.Painters = [];

    angular.forEach (data.Painters, function (value, key) {
      $http.get('datas/' + value + '.json').success(function(data) {
        $scope.Painters.push({
          Name : value,
          Contents : data
        });
      });
    });
  });
});
