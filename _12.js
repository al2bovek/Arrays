"use strict";
//  Write a function `evens` which takes an array of numbers and returns a new array containing only the even numbers in the given array.


const arr = [21, 4.77, -4, 20, 13, 0.003];
const integers = (arr) => {
  const result = arr.filter(el => Number.isInteger(el));
  return result;
}
document.getElementById("array").innerHTML = integers(arr);