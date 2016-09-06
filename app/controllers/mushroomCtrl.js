"use strict";

app.controller("MushroomCtrl", function($scope, MushroomFactory){

  MushroomFactory.getMushrooms()
  .then((mushroomCollection)=>{
    //mushrooms is being defined here
    let mushArr = mushroomCollection.mushrooms;
    let newMushrooms = [];
    mushArr.forEach((mushroom)=>{
      console.log("key", Object.keys(mushroom));
      Object.keys(mushroom).forEach((key)=>{
        mushroom[key].name = key;
        newMushrooms.push(mushroom[key]);
      });
    });
    console.log("new mushrooms", newMushrooms)
    $scope.mushrooms = newMushrooms;
  });

});