/*
 * Example of asynchronous filesystem access with promisified fs.
 */

const fs = require('fs');
const util = require('util');
const print = console.log;

fs.readFileAsync = util.promisify(fs.readFile);

async function main() {
  print( await fs.readFileAsync('data/1.txt', 'utf8') );
  print( await fs.readFileAsync('data/2.json', 'utf8') );
  print( await fs.readFileAsync('data/3.txt', 'utf8') );
  print( "finished!" );
}

main();
