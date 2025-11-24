"use strict";
// Write a function `reverse` that computes the reversal of a string.

const str = prompt("word");
function reverse(str) {
let result = '';
for (let i = str.length - 1; i >= 0 ; i--) {
  result += str[i];
}
return result;
}
document.getElementById("array").innerHTML = reverse(str);