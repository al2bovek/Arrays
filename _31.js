"use strict";
// Write a function `strLengthSort` that sorts an array of strings by how long each string is. Put the shortest strings first.

const words = ['b', 'a', 'c'];

function creatNewArray(words) {
  const result = words.sort();
  return result;
}
document.getElementById("array").innerHTML = creatNewArray(words);