"use strict";
// We have an array of words that are stored in as strings.

const words = [ 'apple', 'pear', 'cherry' ];

function creatNewArray(words) {
  const result = words.map(word => word.toUpperCase());
  return result;
}
document.getElementById("array").innerHTML = creatNewArray(words);