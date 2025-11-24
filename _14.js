"use strict";
//  Write a function `evens` which takes an array of numbers and returns a new array containing only the even numbers in the given array.


const arr = [20, 4, -4, 120, 13];
let num = prompt("a threshold number");
const countEven = (arr, num) => {
  const result = arr.filter(el => el < num).length;
  return result;
}
document.getElementById("array").innerHTML = countEven(arr, num);