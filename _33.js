"use strict";
// Write a function `sumSort`. Given an array of array of numbers like:

const numbers = [
[1, 3, 4],
[2, 4, 6, 8],
[3, 6]
];

function creatNewArray(numbers) {
  const result = numbers.sort((a, b) => a.reduce((ac, el) => ac + el) - b.reduce((ac, el) => ac + el));
  return result;
}
document.getElementById("array").innerHTML = creatNewArray(numbers);