"use strict";
// Write a function `isVowel` that takes a character (i.e. a string of length 1) as input and returns true if it is a vowel, false otherwise.

const vowels = ["a", "e", "i", "o", "u"];
let value = prompt("a character");

const isVowel = (arr, value) => {
  let result = false;
  for (const el of arr) {
    if (el === value || el === value.toLowerCase()) {
      return result = true;
    }
  }
  return result;
}
document.getElementById("array").innerHTML = isVowel(vowels, value);