"use strict";
// Write a function `longLongVowels` which is given a string, and returns a version of that string extending any long vowels to 5 characters.

const vowels = ["a", "e", "i", "o", "u"];
const str = 'Good';
function longLongVowels(str, arr, num) {
  const add = (el, num = 5) => {
    let res = '';
    for (let i = 0; i < num - 1; i++) {
      res += el
    }
    return res;
  }
  arr = str.split("");
  const result = arr.map((el, index) => vowels.includes(el) && el === arr[index - 1] ? el = add(el, num) : el = el);
  return result.join("");
}
document.getElementById("array").innerHTML = longLongVowels(str, vowels);