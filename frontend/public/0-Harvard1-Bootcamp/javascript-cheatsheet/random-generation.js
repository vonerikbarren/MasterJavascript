/***********************************************************************
 *                         RANDOM GENERATION                           *
 **********************************************************************/
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
// Math.random() gives us a number between 0 and 1
var random = Math.random();

// if we multiply the random number by 10, it will move the decimal
// place over by one. Here we are just going to multiply the random
// number (right now is between 0 and 1) by 10, and set that value
// back to the same variable
random = random * 10;

// now random is a random number between 0 and 10, but has a bunch of
// decimal places. We want to round this number to the nearest integer
// with Math.floor, Math.ceil, or Math.round
// Math.floor will round down to the nearest whole number (integer)
// Math.ceil will round up to the nearest whole number
// Math.round will round to the nearest whole number based on it's value
// so that 5.5 would round to 6 and 5.4 would round to 5.
random = Math.round(random);

// now random is a random whole number (integer) between 0 and 10
// we could do this all on one line with
var randomNumber = Math.round(Math.random() * 10);

// if we combine this with a function, we can create a function that
// returns a random number between 0 and the max attribute we pass in
function getRandomNumber(max) {
    // use our randomization math, but use the max argument we passed
    return Math.round(Math.random() * max);
}

// get our random number
var anotherRandomNumber = getRandomNumber(100);