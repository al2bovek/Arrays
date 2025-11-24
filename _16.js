"use strict";
//  Write a function `evens` which takes an array of numbers and returns a new array containing only the even numbers in the given array.


const arr = [20, 4, -4, 120, 13];
const arr_1 = [20, 4, -4, 120, 13];

const glueArrays = (arr, arr_1) => {
  const result = [...arr, ...arr_1];
  return result;
}
document.getElementById("array").innerHTML = glueArrays(arr, arr_1);