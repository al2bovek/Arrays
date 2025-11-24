"use strict";
// Write a function `max` that takes an array of numbers returns the highest number in the array.
const arr = [23, 99, 5, 123, 6];
const max = (arr) => {
  return Math.max(...arr);
}
document.getElementById("array").innerHTML = max(arr);