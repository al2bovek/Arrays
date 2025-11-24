"use strict";
// Write a function `removeWordsWithChar`

let char = 'a';
 const words = ["buzZ", "alligator", "zebra", "crocodile", "giraffe", "fizz", "Zulu"];
function removeWordsWithChar(arr, char) {
const animalsWithoutZ = [];
for (const el of arr) {
  if(!el.split("").some(el => el === char || el === char.toLowerCase())) animalsWithoutZ.push(el);
}
return animalsWithoutZ;
}
document.getElementById("array").innerHTML = removeWordsWithChar(words, char);