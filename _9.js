"use strict";
// Write function `mean`, which takes an array of numbers and returns their mean. We use "mean" instead of average because "average" can mean many things — mean, median, or mode while mean only ever means one thing.

const arr = [20, 4, -4, 20, 10];
const mean = (arr) => {
  const result = arr.reduce((ac, el) => ac + el) / arr.length;
  return result;
}
document.getElementById("array").innerHTML = mean(arr);