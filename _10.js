"use strict";
//  Write a function `evens` which takes an array of numbers and returns a new array containing only the even numbers in the given array.


const arr = [20, 4, -4, 20, 13];
const even = (arr) => {
  const result = arr.filter(el => el%2 === 0);
  return result;
}
document.getElementById("array").innerHTML = even(arr);