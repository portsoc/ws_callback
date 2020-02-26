/*
 * Examples showing parameters passed to forEach.
 */

const SIX_NATIONS = [ "England", "France", "Ireland", "Italy", "Scotland", "Wales" ];

function betterPrint(index, item, array) {
  console.log(`item ${index} in array ${array} is ${item}`);
}

function printArrayForEachParams(arr) {
  arr.forEach(betterPrint);
}

function printArrayForEachDirect(arr) {
  arr.forEach(console.log);
}


console.log('with our function');
printArrayForEachParams(SIX_NATIONS);

console.log();
console.log('with console.log directly');
printArrayForEachDirect(SIX_NATIONS);
