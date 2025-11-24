"use strict";
// Given an array and a value, write function `firstIndexOf` which returns the index of the first occurence of the value. If the value is not found, returns -1.

const arr = [20, 4, 4, 120, 13, 4, 99];
let value = prompt("a threshold valueber");

const firstIndexOf = (arr, value) => {
  let result = -1;
  const fn = arr.some((el, index) => {
    if(el == value) {result = index;
      return result
    }
  }
);
  return result;
}
document.getElementById("array").innerHTML = firstIndexOf(arr, value);