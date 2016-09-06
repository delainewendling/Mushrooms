"use strict";

app.factory("MushroomFactory", function($q, $http){

  let getMushrooms = function(){
    let mushrooms = [];
    return $q((resolve, reject)=>{
      $http.get('../../data/mushrooms.json')
      .success((mushroomData)=>{
        console.log("mushroom data", mushroomData);
        resolve(mushroomData);
      })
      .error((error)=>{
        console.log("error", error);
        reject(error);
      })
    })
  }

  return {getMushrooms};
});