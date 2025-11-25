 "use strict";
// Write a function called `split` It should take as input a sentence and capitalize the first letter of every word in the sentence.


const str = 'And mom get the heck in here mom and bring me a darn mom sandwich';
const splitter = prompt("splitter");

function split(str, splitter) {
  console.log(str.length);

  const spLength = splitter.length;
  let result = [];
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== splitter[0]) {
      temp += str[i];
    } else {
      result.push(temp);
      temp = '';
      i += spLength - 1;
    }
    if (i === str.length - 1) {
      result.push(temp);
    }
  }
  return result;
}
document.getElementById("array").innerHTML = split(str, splitter);