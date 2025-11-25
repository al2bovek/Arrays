"use strict";
// Write a function called `capitalizeAll` It should take as input a sentence and capitalize the first letter of every word in the sentence.

const str = 'mom get the heck in here and bring me a darn sandwich. Dang';
const capitalize = (str) => {
  return `${str[0].toUpperCase()}${str.substring(1)}`;
}
function capitalizeAll(str) {
  let result = [];
  const object = str.split(" ");
  for (const element of object) {
    result.push(capitalize(element));
  }
  return result.join(' ');
}
document.getElementById("array").innerHTML = capitalizeAll(str);