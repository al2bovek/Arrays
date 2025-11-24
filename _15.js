"use strict";
//  Write a function `evens` which takes an array of numbers and returns a new array containing only the even numbers in the given array.


const arr = [20, 4, -4, 120, 13];
const squareDance = (arr) => {
  const result = arr.map(el => el**2);
  return result;
}
document.getElementById("array").innerHTML = squareDance(arr);