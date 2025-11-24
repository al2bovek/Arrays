"use strict";
// Write a function `findLongestWord` that computes the reversal of a string.

function findLongestWord(str = "takes a string of words and returns the longest word") {
  let result;
  const arr = str.split(" ");
  const elLengths = [];
  for (const element of arr) {
    elLengths.push(element.length);
  }
  const maxLength = Math.max(...elLengths);
  const maxLengthIndex = elLengths.indexOf(maxLength);
  result = arr[maxLengthIndex];
  return result;
}
document.getElementById("array").innerHTML = findLongestWord();