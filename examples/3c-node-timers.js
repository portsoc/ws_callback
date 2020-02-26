/*
 * Example of using timers in Node.js
 */


function sayHi() {
  console.log('hi, good morning!');
}

function beep() {
  console.log('beep');
}


setTimeout(sayHi, 2500);
setInterval(beep, 1000);
