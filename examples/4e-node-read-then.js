/*
 * Example of asynchronous filesystem access with promisified fs, but using then().
 */

const fs = require('fs');
const util = require('util');
const print = console.log;

fs.readFileAsync = util.promisify(fs.readFile);

function main() {
  fs.readFileAsync('data/1.txt', 'utf8')
  .then(print)
  .then(() => fs.readFileAsync('data/2.json', 'utf8') )
  .then(print)
  .then(() => fs.readFileAsync('data/3.txt', 'utf8') )
  .then(print)
  .then(() => {
    print("finished!");
  });
}

main();
