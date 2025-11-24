"use strict";
// Given an array of numbers, return their product. Use reduce metod.

const arr = [20, 1, 4, 8, 10];
const operator = prompt("operator");
const returnProduct = (arr, operator = "+") => {

  const result = arr.reduce((ac, el) => {
    switch (operator) {
      case "+": return ac + el;
      case "-": return ac - el;
      case "*": return ac * el;
      case "/": return ac / el;
      // default: throw new Error("Wrong operator");
      default: return "Wrong operator";
    }
  });
  return result;
}
document.getElementById("array").innerHTML = returnProduct(arr, operator);