/*
 * Example of asynchronous filesystem access with promisified fs, but using then().
 */

const fs = require('fs');
const util = require('util');

fs.readFileAsync = util.promisify(fs.readFile);

function print(string) {
  console.log(string);
}

function main() {
  fs.readFileAsync('data/1.txt', 'utf8')
  .then(data => {
    print(data);
  })
  .then(() => fs.readFileAsync('data/2.json', 'utf8') )
  .then(data => {
    print(data);
  })
  .then(() => fs.readFileAsync('data/3.txt', 'utf8') )
  .then(data => {
    print(data);
  });
}

main();
