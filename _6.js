"use strict";
// Given an array of numbers, return their product. Use reduce metod.

const arr = [0, 1, 4, 8, 10];
const operator = prompt("operator");
const returnProduct = (arr, operator) => {
  let result = arr.reduce((ac, el) => ac operator el);

  return result;
}
document.getElementById("array").innerHTML = returnProduct(arr, operator);