"use strict";
// Write a function `strLengthSort` that sorts an array of strings by how long each string is. Put the shortest strings first.

const words = ['Apple', 'Bananas', 'Cherry'];

function creatNewArray(words) {
  const result = words.sort((a, b) => a.length - b.length);
  return result;
}
document.getElementById("array").innerHTML = creatNewArray(words);