"use strict";
// Write function `allPositive` which is given an array of numbers and returns true if _every_ element is positive and false otherwise.

const arr = [0, 1, 4, 8, 10];
const allPositive = (arr) => {
  let result = true;
for (const el of arr) {
  if (el <= 0) {
    result = el > 0;
    break;
  }
}
  return result;
}
document.getElementById("array").innerHTML = allPositive(arr);