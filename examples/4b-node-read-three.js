/*
 * Example of asynchronous filesystem access with unpredictable order.
 */

const fs = require('fs');

fs.readFile('data/1.txt', 'utf8', console.log);
fs.readFile('data/2.json', 'utf8', console.log);
fs.readFile('data/3.txt', 'utf8', console.log);

console.log("finished!");
