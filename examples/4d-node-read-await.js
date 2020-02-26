/*
 * Example of asynchronous filesystem access with promisified fs.
 */

const fs = require('fs');
const util = require('util');

fs.readFileAsync = util.promisify(fs.readFile);

function print(err, string) {
  console.log(string);
}

async function main() {
  print( await fs.readFileAsync('data/1.txt', 'utf8') );
  print( await fs.readFileAsync('data/2.json', 'utf8') );
  print( await fs.readFileAsync('data/3.txt', 'utf8') );
  print( "finished!" );
}

main();
