"use strict";
// Write a function `isVowel` that takes a character (i.e. a string of length 1) as input and returns true if it is a vowel, false otherwise.

let value = 'Z';
 const words = ["buzZ", "alligator", "zebra", "crocodile", "giraffe", "fizz", "Zulu"];
function removeAnyWordWithZ(arr, value) {
const wordsWithoutZ = [];
for (const el of arr) {
  if(!el.split("").some(el => el === value || el === value.toLowerCase())) wordsWithoutZ.push(el);
}
return wordsWithoutZ;
}
document.getElementById("array").innerHTML = removeAnyWordWithZ(words, value);