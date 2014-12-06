var galleryControllers = angular.module('galleryControllers', []);

galleryControllers.controller('HomeController', function($scope, $http) {
  
  $http.get('datas/home.json').success(function(data) {
    $scope.TopFive = data.TopFive;
    $scope.Kind = data.Kind;
    $scope.Painters = [];
    $scope.Filter = "Moderne";
    $scope.ChangeFilter = function (filter) {
      $scope.Filter = filter;
    };
    $scope.Limits = [];
    $scope.ChangeLimit = function (name) {
      var painter = _.find($scope.Painters, function(painter) { return painter.Name === name; });

      painter.Limit = painter.Limit == 5 ? 100 : 5;
      painter.LimitName = painter.Limit == 5 ? 'Encore Plus': 'Moins';
    }

    angular.forEach (data.Painters, function (value, key) {
      $http.get('datas/' + value + '.json').success(function(data) {
        var painter = {
          Name : value,
          Contents : data,
          Limit: 5,
          LimitName: 'Encore Plus'
        };
        $scope.Painters.push(painter);
      });
    });
  });
}).controller('DetailController', function($scope, $routeParams, $http) {
    var name = $routeParams.name,
        id = $routeParams.id;
    
    $http.get('datas/' + name + '.json').success(function(data) {
      var oeuvre = _.find(data.Oeuvre, function(oeuvre) { return oeuvre.Id == id; });
      $scope.Oeuvre = oeuvre;
    });
}).controller('ContactController', function($scope) {
  function setPosition(mapOptions) {
    console.log(mapOptions);
    console.log(google.maps);
    var map = new google.maps.Map($('#map-canvas')[0], mapOptions);
    console.log(map);
  }

  function initialize() {
    var mapOptions = {
        center: { lat: -34.397, lng: 150.644},
        zoom: 8
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          mapOptions.center.lat = position.coords.latitude;
          mapOptions.center.lng = position.coords.longitude;
          setPosition(mapOptions);
        });
    } else {
        setPosition(mapOptions);
    }
  }

  initialize();
});
