/*
 * Fat-arrow functions encourage us
 * to think of functions as variables that can
 * be passed around and called back/
 */

const SIX_NATIONS = [ "England", "France", "Ireland", "Italy", "Scotland", "Wales" ];

const shorten = str => str.substring(0,3).toUpperCase();
const shortenArray = arr => arr.map(shorten);

console.log(shortenArray(SIX_NATIONS));


