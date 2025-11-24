"use strict";
// Write a function `sumNumbers` which is given an array of numbers and returns the sum of the numbers. Do the same with reduce() method.

const arr = [1, 4, 8];
const sumNumbers = (arr) => {
  return arr.reduce((ac, el) => ac + el);
}
document.getElementById("array").innerHTML = sumNumbers(arr);