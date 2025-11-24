"use strict";
// Write a function `isVowel` that takes a character (i.e. a string of length 1) as input and returns true if it is a vowel, false otherwise.

let value = 'z';
 const animals = ["buzz", "alligator", "zebra", "crocodile", "giraffe", "fizz"];
function removeZAnimals(arr, value) {
const animalsWithoutZ = [];
for (const el of arr) {
  if(!el.split("").some(el => el === value)) animalsWithoutZ.push(el);
}
return animalsWithoutZ;
}
document.getElementById("array").innerHTML = removeZAnimals(animals, value);