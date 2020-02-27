/*
 * Example of asynchronous filesystem access.
 */

const fs = require('fs');

function print(err, string) {
  console.log({err, string});
}

fs.readFile('data/1.txt', 'utf8', print);
