/***********************************************************************
 *                              ARRAYS                                 *
 **********************************************************************/
// READ MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// an array is denoted with brackets [] and is a list of items. They
// are automatically given a key (also known as an index) which starts
// at 0 and counts as items are added.
// the "first item" is at index 0, "second item" is at index 1 and so on
var arrayVariable = ["first item", "second item"];

// arrays can have a mix of different types of values, strings, numbers,
// booleans, even other arrays and objects
var mixedArray = ["string", 12, true];

// we can get the length of an array just by using the variables name
// and accessing the special property length
console.log("the mixed array's length is: ", mixedArray.length);

// we can access values from an array by using the index in brackets
// after the name of the variable. This would output "second item",
// since the "first item" in the array is at index 0
console.log("the value at index 1 of the arrayVariable is: ", arrayVariable[1]);

// we can also change the value of a value in an array at a specific position
arrayVariable[1] = "changed second item";

// or can add a new one just by using the next index number
arrayVariable[2] = "new item";

// we can even add a new item to the end of the array by using a special
// method that arrays have called "push". There are a lot of usefull 
// methods on arrays, you can find them all here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#
arrayVariable.push("another new item");

// let's console log out the array to see what we have now
console.log("updated array: ", arrayVariable);