/*
 * Example of asynchronous filesystem access with unpredictable order.
 */

const fs = require('fs');

function print(err, string) {
  console.log({err, string});
}

fs.readFile('data/1.txt', 'utf8', print);
fs.readFile('data/2.json', 'utf8', print);
fs.readFile('data/3.txt', 'utf8', print);
fs.readFile('data/not-there.txt', 'utf8', print);

console.log("finished!");
