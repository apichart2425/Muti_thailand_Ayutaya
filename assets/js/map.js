var myApp = angular.module('myApp', ['uiGmapgoogle-maps']);

myApp.factory("Markers", function(){
  var Markers = [
    {
      "id": "0",
      "coords": {
        "latitude": "45.5200",
        "longitude": "-122.6819"
      },
      "window": {
        "title": "Portland, OR"
      }
    },
    {
      "id": "1",
      "coords": {
        "latitude": "40.7903",
        "longitude": "-73.9597"
      },
      "window" : {
        "title": "Manhattan New York, NY"
      }
    }
  ];
  return Markers;
});

myApp.controller("gMap",function($scope,Markers){
  $scope.map = { 
    center: { latitude: 39.8282, longitude: -98.5795 }, 
    zoom: 4 
  };
  $scope.markers = Markers;
});