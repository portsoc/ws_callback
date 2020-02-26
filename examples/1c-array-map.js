/*
 * Example of using map with a callback instead of a loop.
 */

const SIX_NATIONS = [ "England", "France", "Ireland", "Italy", "Scotland", "Wales" ];

function shortenArrayLoop(arr) {
  const retval = [];
  for (const item of arr) {
    retval.push(shorten(item));
  }
  return retval;
}

function shorten(str) {
  return str.substring(0,3).toUpperCase();
}

function shortenArrayMap(arr) {
  return arr.map(shorten);
}

console.info('with loop');
console.log(shortenArrayLoop(SIX_NATIONS));

console.info();
console.info('with map');
console.log(shortenArrayMap(SIX_NATIONS));
