## Free Code Camp Practice

- Bracket notation is a way to get a character at a specific index within a
string.

- Most modern programming languages, like JavaScript, dont start counting at 1
like humans do. They start at 0. This is referred to as Zero-based indexing.

- For example, the character at index 0 in the word "Charles" is "C". So if
var firstName = "Charles", you can get the value of the first letter of the 
string by using firstName[0].


```JavaScript

// Begin-=-=-=-=-=-=-=-=-=-
// ...Example: 
var firstName = "Charles";
var firstLetter = firstName[0]; // firstLetter is "C"
//
// End-=-=-=-=-=-=-=-=-=-=-

// -=-=-=- Break -=-=-=-

// Begin-=-=-=-=-=-=-=-=-=-
// ...Problem: 
// Use bracket notation to find the first character in the lastName variable
// and assign it to firstLetterofLastName.
//
// ...Setup:
var firstLetterofLastName = "";
var lastName = "Lovelace";
//
// ...My Solution:
firstLetterofLastName = lastName[0];
//
// End-=-=-=-=-=-=-=-=-=-=-


```