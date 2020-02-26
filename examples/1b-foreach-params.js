/*
 * Examples showing parameters passed to forEach.
 */

const SIX_NATIONS = [ "England", "France", "Ireland", "Italy", "Scotland", "Wales" ];



function printArrayForEachParams(arr) {
  arr.forEach((item, index, array) => {
    console.log(`item ${index} in array ${array} is ${item}`);
  });
}

function printArrayForEachDirect(arr) {
  arr.forEach(console.log);
}



console.log('with our function');
printArrayForEachParams(SIX_NATIONS);

console.log();
console.log('with console.log directly');
printArrayForEachDirect(SIX_NATIONS);
