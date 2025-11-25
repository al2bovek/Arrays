"use strict";
// Write a function `sortArray` that takes an array of numbers as input and sorts them in ascending order and returns.

const numbers = [5, 4.23, 6.4, 8.09, 3.20];

function creatNewArray(numbers) {
  const result = numbers.sort((a, b) => a - b);
  return result;
}
document.getElementById("array").innerHTML = creatNewArray(numbers);