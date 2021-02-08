/*
 * Example of asynchronous filesystem access with promisified fs, but using then().
 */

import fs from 'fs/promises';

function print(string) {
  console.log(string);
}

function main() {
  fs.readFile('data/1.txt', 'utf8')
    .then(data => {
      print(data);
    })
    .then(() => {
      return fs.readFile('data/2.json', 'utf8');
    })
    .then(data => {
      print(data);
    })
    .then(() => {
      return fs.readFile('data/3.txt', 'utf8');
    })
    .then(data => {
      print(data);
    })
    .then(() => {
      print("finished!");
    });
}

main();
