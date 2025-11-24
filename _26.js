"use strict";
// Write a function called `nicer`. It should clean up the language in its input sentence.

const forbiddenWords = ['heck',
  'darn',
  'dang',
  'crappy'];
const str = 'mom get the heck in here and bring me a darn sandwich. Dang';
function nicer(forbiddenWords, str) {
  const arr = str.split(" ");
  const result = arr.filter(el => !forbiddenWords.includes(el.toLowerCase())).join(" ");
  return result;
}
document.getElementById("array").innerHTML = nicer(forbiddenWords, str);