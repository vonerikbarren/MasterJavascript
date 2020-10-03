## Free Code Camp Practice

- In JavaScript, String values are immutable, which means they cannot be altered
once created.

```JavaScript

// Begin-=-=-=-=-=-=-=-=-=-
// ...Example #1:
var myStr = "Bob";
myStr[0] = "J";
//
// In Ex #1, the value of myStr cannot change to "Job" because the contents of 
// myStr cannot be altered. Note that this does NOT mean that myStr cannot be 
// changed, just that the individual characters of a string literal cannot be 
// changed. The only way to change myStr would be to assign it with a new 
// string. Like the following:
//
// ...Example #2:
var myStr = "Bob";
myStr = "Job";
//
// End-=-=-=-=-=-=-=-=-=-=-

// -=-=-=- Break -=-=-=-

// Begin-=-=-=-=-=-=-=-=-=-
// ...Problem: 
// Correct the assignment to myStr so it contains the string value of
// Hello World using the approach shown in the example above. 
// 
// ...Setup:
var myStr = "Jello World";
//
// ...My Solution:
myStr = "Hello World";
// End-=-=-=-=-=-=-=-=-=-=-


```