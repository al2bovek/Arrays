"use strict";
// Use the map method on the daysOfWeek array, creating a new array of abbreviated week days.

const daysOfWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

function creatNewArray(daysOfWeek) {
  const result = daysOfWeek.map(day => day.substring(0, 3));
  return result;
}
document.getElementById("array").innerHTML = creatNewArray(daysOfWeek);