"use strict";

var app = angular.module("MushroomApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/mushrooms/view', {
    templateUrl: 'partials/mushroomView.html',
    controller: "MushroomCtrl"
  })
  .otherwise('/mushrooms/view');
});