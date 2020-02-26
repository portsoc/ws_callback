/*
 * Fat-arrow functions encourage us to think of functions
 * as variables that can be passed around and called back.
 */

const SIX_NATIONS = [ "England", "France", "Ireland", "Italy", "Scotland", "Wales" ];

const shorten = str => str.substring(0,3).toUpperCase();

function shortenArrayConst(arr) {
  return arr.map(shorten);
}

function shortenArrayInline(arr) {
  return arr.map(str => str.substring(0,3).toUpperCase());
}

console.log('with function from variable');
console.log(shortenArrayConst(SIX_NATIONS));

console.log();
console.log('with inline');
console.log(shortenArrayInline(SIX_NATIONS));
