"use strict";
// Turn this list of numbers into price strings with two digits and a dollar sign at the beginning.

const numbers = [5, 4.23, 6.4, 8.09, 3.20];

function creatNewArray(numbers) {
  const result = numbers.map(number => `$${number.toFixed(2)}`);
  return result;
}
document.getElementById("array").innerHTML = creatNewArray(numbers);