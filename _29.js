"use strict";
// Write a function `lleetspeak` which is given a string, and returns a version of that string extending any long vowels to 5 characters.

const leetspeakVersion = {
  A: 4,
  E: 3,
  G: 6,
  I: 1,
  O: 0,
  S: 5,
  T: 7,
}
const keys = Object.keys(leetspeakVersion);
let result = "";
const str = 'Leet ORANGE Challenge';
function leetspeak(str, obj) {
  const temp = str.split('');
  for (let element of temp) {
    result += keys.includes(element) || keys.includes(element.toUpperCase()) ? element = leetspeakVersion[element.toUpperCase()] : element = element.toLowerCase();
  }

  return result;
}
document.getElementById("array").innerHTML = leetspeak(str, leetspeakVersion);