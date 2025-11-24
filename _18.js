"use strict";
// Given an array and a value, write function `findInHaystack` which returns true if the value is found in the array and false otherwise.

const arr = [20, 4, 4, 120, 13, 4, 99];
let value = prompt("a threshold valueber");

const findInHaystack = (arr, value) => {
  const result = arr.some(el => el == value);
  return result;
}
document.getElementById("array").innerHTML = findInHaystack(arr, value);