"use strict";
// Write a function `recognizeEmployees` that takes two arguments:

const names = ['Susan', 'Anthony', 'Bill'];
const employees = ['Bill', "Fill", "Susana"];

function recognizeEmployees(names, employees) {
  const great = [];
  const outstanding = [];
  names.map(name => !employees.includes(name) ? great.push(`Great job, ${name}`) : outstanding.push(`Outstanding job, ${name}`));
  const result = [...great, ...outstanding];
  return result;
}

document.getElementById("array").innerHTML = recognizeEmployees(names, employees);