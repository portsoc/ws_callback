/*
 * Example of asynchronous filesystem access with promisified fs.
 */

import fs from 'fs/promises';

function print(string) {
  console.log(string);
}

async function main() {
  print( await fs.readFile('data/1.txt', 'utf8') );
  print( await fs.readFile('data/2.json', 'utf8') );
  print( await fs.readFile('data/3.txt', 'utf8') );
  print( "finished!" );
}

main();
