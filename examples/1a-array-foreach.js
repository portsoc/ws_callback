/*
 * Example of using forEach with a callback instead of a loop.
 */

const SIX_NATIONS = [ "England", "France", "Ireland", "Italy", "Scotland", "Wales" ];



function print(item) {
  console.log(item);
}


function printArrayLoop(arr) {
  for (const item of arr) {
    print(item);
  }
}

function printArrayForEach(arr) {
  arr.forEach(print);
}



console.log('with loop');
printArrayLoop(SIX_NATIONS);

console.log();
console.log('with forEach');
printArrayForEach(SIX_NATIONS);
