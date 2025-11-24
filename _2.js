"use strict";
// Declaring the array

const myArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
myArray[myArray.indexOf("thursday")] = null;
document.getElementById("array").innerHTML = `${myArray[2]} ${myArray.indexOf(null)}`;