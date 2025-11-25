"use strict";
// We have an array of numbers that are stored as strings.

const numbers = [ '1', '2', '3', '4', '5' ];

function creatNewArray(numbers) {
  const result = numbers.map(number => +number);
  return result;
}
document.getElementById("array").innerHTML = creatNewArray(numbers);