"use strict";
//  Write function `anyPositive` which is given an array of numbers and returns true if _any_ element is positive and false otherwise.

const arr = [-20, -1, -4, 8, -10];
const anyPositive = (arr) => {
  const result = arr.some(el => el >= 0);
  return result;
}
document.getElementById("array").innerHTML = anyPositive(arr);