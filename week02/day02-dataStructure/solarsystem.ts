"use strict";
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

let planetList: string[] = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Uranus",
  "Neptune"
];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"

function addSaturn(x: string[]): string[] {
  return x.splice(5, 0, "Saturn");
}
addSaturn(planetList);
console.log(planetList);
// let putSaturn: string = [];
// console.log(putSaturn(planetList));
// export = putSaturn;
//console.log(addSaturn(planetList))
